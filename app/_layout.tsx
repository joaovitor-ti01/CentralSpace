import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { MissionProvider } from '../context/MissionContext';

export default function Layout() {
  return (
    <MissionProvider>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#0b1329',
            borderTopColor: '#1e293b',
            height: 100,          // Altura estendida para garantir conforto no toque
            paddingBottom: 38,   // Empurra os botões bem para cima, saindo da área nativa do celular
            paddingTop: 10,
            position: 'absolute', // Garante flutuação correta sobre o layout
            bottom: 0,
            left: 0,
            right: 0,
          },
          tabBarActiveTintColor: '#00e5ff',
          tabBarInactiveTintColor: '#64748b',
          headerStyle: {
            backgroundColor: '#030712',
            borderBottomWidth: 1,
            borderBottomColor: '#1e293b',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: '900',
            fontSize: 16,
            letterSpacing: 1,
          }
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'PAINEL DE CONTROLE',
            tabBarLabel: 'Painel',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "planet" : "planet-outline"} size={22} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="lancamento"
          options={{
            title: 'REGISTRO DE VETOR',
            tabBarLabel: 'Lançar',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "rocket" : "rocket-outline"} size={22} color={color} />
            ),
          }}
        />
      </Tabs>
    </MissionProvider>
  );
}