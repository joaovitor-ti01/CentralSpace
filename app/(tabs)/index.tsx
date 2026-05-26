import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useMission } from '../../context/MissionContext';

export default function Dashboard() {
  const { telemetry, missions, updateTelemetry } = useMission();

  useEffect(() => {
    const interval = setInterval(updateTelemetry, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>SISTEMA DE TELEMETRIA</Text>
      
      {telemetry.energy < 60 && (
        <View style={styles.alertBox}>
          <Text style={styles.alertText}>ALERTA: ENERGIA EM NÍVEL CRÍTICO ({telemetry.energy}%)!</Text>
        </View>
      )}

      <View style={styles.grid}>
        <View style={[styles.card, telemetry.energy < 60 && styles.cardDanger]}>
          <Text style={styles.cardLabel}>Energia</Text>
          <Text style={styles.cardValue}>{telemetry.energy}%</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Comunicação</Text>
          <Text style={styles.cardValue}>{telemetry.communication}%</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Estabilidade Orbital</Text>
          <Text style={styles.cardValue}>{telemetry.orbitalStability}%</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>MISSÕES MONITORADAS ({missions.length})</Text>
      {missions.length === 0 ? (
        <Text style={styles.noMissions}>Nenhuma missão registrada no quadrante.</Text>
      ) : (
        missions.map((mission) => (
          <View key={mission.id} style={styles.missionCard}>
            <View>
              <Text style={styles.missionName}>{mission.name}</Text>
              <Text style={styles.missionDest}>Destino: {mission.destination}</Text>
            </View>
            <Text style={styles.statusActive}>{mission.status}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050814', padding: 20 },
  sectionTitle: { color: '#00e5ff', fontSize: 16, fontWeight: 'bold', marginVertical: 15, letterSpacing: 2 },
  alertBox: { backgroundColor: '#ff1744', padding: 15, borderRadius: 8, marginBottom: 15 },
  alertText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { backgroundColor: '#0a0f24', width: '48%', padding: 15, borderRadius: 8, marginBottom: 15, borderLeftWidth: 4, borderLeftColor: '#00e5ff' },
  cardDanger: { borderLeftColor: '#ff1744', backgroundColor: '#1a0b16' },
  cardLabel: { color: '#aaa', fontSize: 12 },
  cardValue: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginTop: 5 },
  noMissions: { color: '#666', fontStyle: 'italic' },
  missionCard: { backgroundColor: '#0a0f24', padding: 15, borderRadius: 8, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  missionName: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  missionDest: { color: '#aaa', fontSize: 13 },
  statusActive: { fontWeight: 'bold', fontSize: 12, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, backgroundColor: '#004d40', color: '#00e676' }
});