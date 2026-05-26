import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface Mission {
  nome: string;
  destino: string;
}

interface MissionContextData {
  missions: Mission[];
  addMission: (mission: Mission) => void;
}

const MissionContext = createContext({} as MissionContextData);

export function MissionProvider({ children }: any) {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    loadMissions();
  }, []);

  async function loadMissions() {
    const data = await AsyncStorage.getItem('@missions');

    if (data) {
      setMissions(JSON.parse(data));
    }
  }

  async function addMission(mission: Mission) {
    const updated = [...missions, mission];

    setMissions(updated);

    await AsyncStorage.setItem('@missions', JSON.stringify(updated));
  }

  return (
    <MissionContext.Provider value={{ missions, addMission }}>
      {children}
    </MissionContext.Provider>
  );
}

export function useMission() {
  return useContext(MissionContext);
}