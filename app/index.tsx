import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useMission } from '../context/MissionContext';

export default function Home() {
  const { missions } = useMission();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.galaxy1} />
      <View style={styles.galaxy2} />

      <Text style={styles.logo}>CENTRAL ESPACIAL</Text>
      <Text style={styles.sublogo}>PAINEL DE CONTROLE</Text>

      <View style={styles.alert}>
        <Text style={styles.alertText}>
         ALERTA: ENERGIA EM NÍVEL CRÍTICO (57%)
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        SISTEMA DE TELEMETRIA
      </Text>

      <View style={styles.grid}>
        <View style={[styles.card, styles.red]}>
          <Text style={styles.cardTitle}>Energia</Text>
          <Text style={styles.cardValue}>57%</Text>
          <Text style={styles.statusRed}>NÍVEL CRÍTICO</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Comunicação</Text>
          <Text style={styles.cardValue}>82%</Text>
          <Text style={styles.statusBlue}>ESTÁVEL</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Estabilidade</Text>
          <Text style={styles.cardValue}>83%</Text>
          <Text style={styles.statusBlue}>NOMINAL</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Temperatura</Text>
          <Text style={styles.cardValue}>36°C</Text>
          <Text style={styles.statusBlue}>NORMAL</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        MISSÕES MONITORADAS ({missions.length})
      </Text>

      {missions.length === 0 ? (
        <Text style={styles.empty}>
          Nenhuma missão registrada.
        </Text>
      ) : (
        missions.map((mission, index) => (
          <View key={index} style={styles.missionCard}>
            <View style={styles.row}>
              <View>
                <Text style={styles.missionName}>
                  {mission.nome}
                </Text>

                <Text style={styles.destination}>
                  {mission.destino}
                </Text>
              </View>

              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  EM ANDAMENTO
                </Text>
              </View>
            </View>

            <Text style={styles.progressText}>
              Progresso
            </Text>

            <View style={styles.progressBar}>
              <View style={styles.progress} />
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.info}>
                Lançamento: 26/05/2026
              </Text>

              <Text style={styles.info}>
                Tripulação: 4 astronautas
              </Text>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    padding: 20,
  },

  galaxy1: {
    position: 'absolute',
    width: 300,
    height: 300,
    backgroundColor: '#7c3aed',
    borderRadius: 200,
    top: -100,
    right: -120,
    opacity: 0.25,
  },

  galaxy2: {
    position: 'absolute',
    width: 250,
    height: 250,
    backgroundColor: '#0ea5e9',
    borderRadius: 200,
    top: 200,
    left: -120,
    opacity: 0.12,
  },

  logo: {
    color: '#22d3ee',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 30,
  },

  sublogo: {
    color: '#cbd5e1',
    marginBottom: 30,
    letterSpacing: 3,
  },

  alert: {
    backgroundColor: '#ff004c',
    padding: 18,
    borderRadius: 18,
    marginBottom: 30,
  },

  alertText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  sectionTitle: {
    color: '#22d3ee',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    letterSpacing: 2,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#081028',
    padding: 20,
    borderRadius: 24,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#12203d',
  },

  red: {
    borderColor: '#ff004c',
  },

  cardTitle: {
    color: '#cbd5e1',
    marginBottom: 15,
    fontSize: 16,
  },

  cardValue: {
    color: '#fff',
    fontSize: 38,
    fontWeight: 'bold',
  },

  statusRed: {
    color: '#ff004c',
    marginTop: 10,
    fontWeight: 'bold',
  },

  statusBlue: {
    color: '#22d3ee',
    marginTop: 10,
    fontWeight: 'bold',
  },

  empty: {
    color: '#64748b',
  },

  missionCard: {
    backgroundColor: '#081028',
    borderRadius: 25,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#12203d',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  missionName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  destination: {
    color: '#94a3b8',
    marginTop: 5,
  },

  badge: {
    backgroundColor: '#00c2ff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },

  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },

  progressText: {
    color: '#cbd5e1',
    marginTop: 20,
    marginBottom: 10,
  },

  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#1e293b',
    borderRadius: 10,
  },

  progress: {
    width: '72%',
    height: 10,
    backgroundColor: '#00e5ff',
    borderRadius: 10,
  },

  infoRow: {
    marginTop: 20,
    gap: 8,
  },

  info: {
    color: '#94a3b8',
  },
});