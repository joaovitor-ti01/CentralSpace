import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { MissionProvider } from '../context/MissionContext';

export default function RootLayout() {
  return (
    <MissionProvider>
      <Tabs screenOptions={{
        tabBarActiveTintColor: '#00e5ff',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#0a0f24', borderTopColor: '#1f293d' },
        headerStyle: { backgroundColor: '#0a0f24' },
        headerTitleStyle: { color: '#fff', fontWeight: 'bold' },
      }}>
        <Tabs.Screen 
          name="index" 
          options={{ 
            title: "Painel de Controle",
            tabBarIcon: ({ color }) => <Ionicons name="planet-outline" size={24} color={color} />
          }} 
        />
        <Tabs.Screen 
          name="lancamento" 
          options={{ 
            title: "Nova Missão",
            tabBarIcon: ({ color }) => <Ionicons name="rocket-outline" size={24} color={color} />
          }} 
        />
      </Tabs>
    </MissionProvider>
  );
}