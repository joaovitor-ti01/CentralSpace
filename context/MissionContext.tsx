import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface Mission {
  id: string;
  name: string;
  destination: string;
  status: 'Ativa' | 'Concluída';
}

interface Telemetry {
  energy: number;
  communication: number;
  orbitalStability: number;
}

interface MissionContextType {
  missions: Mission[];
  telemetry: Telemetry;
  addMission: (mission: Omit<Mission, 'id'>) => Promise<void>;
  updateTelemetry: () => void;
}

const MissionContext = createContext<MissionContextType | undefined>(undefined);

export const MissionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [telemetry, setTelemetry] = useState<Telemetry>({ energy: 100, communication: 95, orbitalStability: 98 });

  useEffect(() => {
    const loadData = async () => {
      const storedMissions = await AsyncStorage.getItem('@space_missions');
      if (storedMissions) setMissions(JSON.parse(storedMissions));
    };
    loadData();
  }, []);

  const updateTelemetry = () => {
    setTelemetry({
      energy: Math.max(0, Math.min(100, Math.floor(Math.random() * 50) + 40)), // Flutua e gera alertas críticos
      communication: Math.floor(Math.random() * 30) + 70,
      orbitalStability: Math.floor(Math.random() * 20) + 80,
    });
  };

  const addMission = async (newMission: Omit<Mission, 'id'>) => {
    const updated = [...missions, { ...newMission, id: Date.now().toString() }];
    setMissions(updated);
    await AsyncStorage.setItem('@space_missions', JSON.stringify(updated));
  };

  return (
    <MissionContext.Provider value={{ missions, telemetry, addMission, updateTelemetry }}>
      {children}
    </MissionContext.Provider>
  );
};

export const useMission = () => {
  const context = useContext(MissionContext);
  if (!context) throw new Error('useMission deve ser usado dentro de um MissionProvider');
  return context;
};