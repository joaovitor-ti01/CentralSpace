import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { MissionProvider } from '../context/MissionContext';

export default function Layout() {
  return (
    <MissionProvider>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: '#020617',
          },
          headerTintColor: '#fff',

          tabBarStyle: {
            backgroundColor: '#020617',
            borderTopColor: '#0f172a',
            height: 70,
            paddingBottom: 8,
            paddingTop: 8,
          },

          tabBarActiveTintColor: '#00e5ff',
          tabBarInactiveTintColor: '#64748b',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Painel',
            tabBarIcon: ({ color }) => (
              <Ionicons name="planet-outline" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="lancamento"
          options={{
            title: 'Missões',
            tabBarIcon: ({ color }) => (
              <Ionicons name="rocket-outline" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </MissionProvider>
  );
}