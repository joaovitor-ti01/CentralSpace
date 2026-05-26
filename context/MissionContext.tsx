import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface Mission {
  id: string;
  nome: string;
  destino: string;
  status: 'Em andamento' | 'Concluída' | 'Cancelada';
  progresso: number;
  tripulacao: number;
  lancamento: string;
  previsao: string; // Nova propriedade funcional
}

interface MissionContextData {
  missions: Mission[];
  addMission: (missionData: Omit<Mission, 'id' | 'status' | 'progresso' | 'lancamento'>) => Promise<void>;
  concluirMissao: (id: string) => Promise<void>;
  cancelarMissao: (id: string) => Promise<void>;
}

const MissionContext = createContext<MissionContextData>({} as MissionContextData);

export function MissionProvider({ children }: { children: ReactNode }) {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    loadMissions();
  }, []);

  async function loadMissions() {
    try {
      const data = await AsyncStorage.getItem('@missions');
      if (data) {
        setMissions(JSON.parse(data));
      }
    } catch (error) {
      console.error("Erro ao carregar missões:", error);
    }
  }

  async function saveMissions(updated: Mission[]) {
    setMissions(updated);
    await AsyncStorage.setItem('@missions', JSON.stringify(updated));
  }

  async function addMission(missionData: Omit<Mission, 'id' | 'status' | 'progresso' | 'lancamento'>) {
    const newMission: Mission = {
      ...missionData,
      id: Date.now().toString(),
      status: 'Em andamento',
      progresso: Math.floor(Math.random() * 20) + 10, // Inicia com uma porcentagem dinâmica entre 10% e 30%
      lancamento: new Date().toLocaleDateString('pt-BR'),
    };
    const updated = [newMission, ...missions];
    await saveMissions(updated);
  }

  async function concluirMissao(id: string) {
    const updated = missions.map((m) =>
      m.id === id ? { ...m, status: 'Concluída' as const, progresso: 100 } : m
    );
    await saveMissions(updated);
  }

  async function cancelarMissao(id: string) {
    const updated = missions.map((m) =>
      m.id === id ? { ...m, status: 'Cancelada' as const } : m
    );
    await saveMissions(updated);
  }

  return (
    <MissionContext.Provider value={{ missions, addMission, concluirMissao, cancelarMissao }}>
      {children}
    </MissionContext.Provider>
  );
}

export function useMission() {
  return useContext(MissionContext);
}