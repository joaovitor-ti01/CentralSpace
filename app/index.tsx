import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useMission } from '../context/MissionContext';

export default function Home() {
  const { missions, concluirMissao, cancelarMissao } = useMission();

  // Função que escolhe o ícone e a cor digital certa com base no destino guardado
  function getPlanetIconConfig(destino: string) {
    const nome = (destino || '').toLowerCase().trim();
    
    if (nome.includes('marte')) {
      return { icon: "planet-outline" as const, color: "#ff4500" }; // Laranja/Vermelho Marte
    }
    if (nome.includes('lua')) {
      return { icon: "moon-outline" as const, color: "#e2e8f0" }; // Cinza Claro Lua
    }
    if (nome.includes('jupiter') || nome.includes('júpiter')) {
      return { icon: "disc-outline" as const, color: "#fbbf24" }; // Amarelo Júpiter
    }
    if (nome.includes('saturno')) {
      return { icon: "planet" as const, color: "#f59e0b" }; // Saturno com anéis
    }
    if (nome.includes('terra')) {
      return { icon: "globe-outline" as const, color: "#3b82f6" }; // Azul Terra
    }
    if (nome.includes('venus') || nome.includes('vênus') || nome.includes('mercurio') || nome.includes('mercúrio')) {
      return { icon: "sunny-outline" as const, color: "#f43f5e" }; // Quentes
    }
    
    // Ícone de radar/espaço padrão para outros destinos
    return { icon: "radio-outline" as const, color: "#00e5ff" }; 
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 130 }} showsVerticalScrollIndicator={false}>
        <View style={styles.glow1} />

        <Text style={styles.title}>🌌 CENTRAL ESPACIAL</Text>
        <Text style={styles.subtitle}>SISTEMA DE MONITORIZAÇÃO ORBITAL</Text>

        <View style={styles.alertBox}>
          <Text style={styles.alertText}>⚠️ ALERTA DE PROTOCOLO: FLUTUAÇÃO DE ENERGIA DETECTADA</Text>
        </View>

        <View style={styles.grid}>
          <View style={[styles.infoCard, { borderLeftColor: '#ff0055' }]}>
            <Text style={styles.infoTitle}>⚡ ENERGIA</Text>
            <Text style={[styles.infoValue, { color: '#ff0055' }]}>57%</Text>
          </View>
          <View style={[styles.infoCard, { borderLeftColor: '#00e5ff' }]}>
            <Text style={styles.infoTitle}>📡 LINK UP</Text>
            <Text style={styles.infoValue}>89%</Text>
          </View>
          <View style={[styles.infoCard, { borderLeftColor: '#a855f7' }]}>
            <Text style={styles.infoTitle}>🚀 SATÉLITES</Text>
            <Text style={[styles.infoValue, { color: '#a855f7' }]}>12 ACTIVE</Text>
          </View>
          <View style={[styles.infoCard, { borderLeftColor: '#22c55e' }]}>
            <Text style={styles.infoTitle}>🛰️ RADARES</Text>
            <Text style={[styles.infoValue, { color: '#22c55e' }]}>ONLINE</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>MISSÕES OPERACIONAIS ({missions.length})</Text>

        {missions.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum vetor de missão ativo no quadrante.</Text>
          </View>
        ) : (
          missions.map((mission) => {
            const iconConfig = getPlanetIconConfig(mission.destino);
            
            return (
              <View key={mission.id} style={styles.card}>
                <View style={styles.content}>
                  
                  {/* Cabeçalho do Card com Ícone Digital */}
                  <View style={styles.cardHeader}>
                    <View style={styles.titleWithIcon}>
                      <Ionicons name={iconConfig.icon} size={24} color={iconConfig.color} style={styles.planetIcon} />
                      <Text style={styles.name}>{mission.nome}</Text>
                    </View>
                    <View style={[
                      styles.badge,
                      mission.status === 'Concluída' && styles.badgeGreen,
                      mission.status === 'Cancelada' && styles.badgeRed
                    ]}>
                      <Text style={styles.badgeText}>{(mission.status || 'Em andamento').toUpperCase()}</Text>
                    </View>
                  </View>

                  <Text style={styles.destination}>📍 DESTINO: {(mission.destino || '').toUpperCase()}</Text>
                  
                  <View style={styles.metaRow}>
                    <Text style={styles.metaText}>👨‍🚀 TRIPULAÇÃO: {mission.tripulacao}</Text>
                    <Text style={styles.metaText}>📅 LÇM: {mission.lancamento}</Text>
                  </View>

                  <View style={styles.etaRow}>
                    <Text style={styles.etaLabel}>⏱️ PREVISÃO DE CHEGADA:</Text>
                    <Text style={[styles.etaValue, { color: iconConfig.color }]}>{mission.previsao || 'Não informada'}</Text>
                  </View>

                  <View style={styles.progressHeader}>
                    <Text style={styles.progressLabel}>STATUS DO VETOR (PROGRESSO)</Text>
                    <Text style={styles.progressPercent}>{mission.progresso}%</Text>
                  </View>
                  <View style={styles.progressBar}>
                    <View style={[
                      styles.progress, 
                      { width: `${mission.progresso}%` },
                      mission.status === 'Concluída' && { backgroundColor: '#22c55e' },
                      mission.status === 'Cancelada' && { backgroundColor: '#ef4444' }
                    ]} />
                  </View>

                  {mission.status === 'Em andamento' && (
                    <View style={styles.buttons}>
                      <TouchableOpacity style={styles.buttonFinish} onPress={() => concluirMissao(mission.id)}>
                        <Text style={styles.buttonText}>FINALIZAR</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonCancel} onPress={() => cancelarMissao(mission.id)}>
                        <Text style={styles.buttonText}>ABORTAR</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' }, 
  scrollView: { flex: 1 },
  glow1: { position: 'absolute', width: 200, height: 200, backgroundColor: '#1e3a8a', borderRadius: 200, top: -50, right: -50, opacity: 0.15 },
  title: { color: '#ffffff', fontSize: 26, fontWeight: '900', marginTop: 30, paddingHorizontal: 20, letterSpacing: 1 },
  subtitle: { color: '#475569', fontSize: 12, fontWeight: '700', marginBottom: 20, paddingHorizontal: 20, letterSpacing: 2 },
  alertBox: { backgroundColor: 'rgba(239, 68, 68, 0.05)', padding: 14, borderRadius: 12, marginHorizontal: 20, marginBottom: 25, borderWidth: 1, borderColor: 'rgba(239, 68, 68, 0.15)' },
  alertText: { color: '#f87171', fontSize: 11, fontWeight: 'bold', textAlign: 'center', letterSpacing: 0.5 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 25 },
  infoCard: { width: '48%', backgroundColor: '#0f172a', padding: 16, borderRadius: 14, marginBottom: 14, borderWidth: 1, borderColor: '#1e293b', borderLeftWidth: 4 },
  infoTitle: { color: '#64748b', fontSize: 11, fontWeight: 'bold', letterSpacing: 1 },
  infoValue: { color: '#00e5ff', fontSize: 22, fontWeight: '900', marginTop: 6 },
  sectionTitle: { color: '#ffffff', fontSize: 16, fontWeight: '800', marginBottom: 15, paddingHorizontal: 20, letterSpacing: 1 },
  emptyContainer: { padding: 30, alignItems: 'center' },
  emptyText: { color: '#475569', fontSize: 14, fontStyle: 'italic' },
  card: { backgroundColor: '#0f172a', borderRadius: 20, marginBottom: 16, marginHorizontal: 20, borderWidth: 1, borderColor: '#1e293b' },
  content: { padding: 20 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  titleWithIcon: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  planetIcon: { marginTop: -2 },
  name: { color: '#ffffff', fontSize: 20, fontWeight: 'bold' },
  destination: { color: '#00e5ff', fontSize: 12, fontWeight: 'bold', marginBottom: 12, letterSpacing: 0.5 },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  metaText: { color: '#64748b', fontSize: 12, fontWeight: '500' },
  etaRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#1e293b', paddingBottom: 12 },
  etaLabel: { color: '#475569', fontSize: 11, fontWeight: 'bold' },
  etaValue: { fontSize: 12, fontWeight: 'bold' },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  progressLabel: { color: '#475569', fontSize: 11, fontWeight: 'bold' },
  progressPercent: { color: '#ffffff', fontSize: 11, fontWeight: 'bold' },
  progressBar: { height: 6, backgroundColor: '#1e293b', borderRadius: 3, overflow: 'hidden' },
  progress: { height: '100%', backgroundColor: '#00e5ff', borderRadius: 3 },
  buttons: { flexDirection: 'row', gap: 10, marginTop: 20 },
  buttonFinish: { flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.08)', padding: 14, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(34, 197, 94, 0.5)' },
  buttonCancel: { flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.08)', padding: 14, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(239, 68, 68, 0.5)' },
  buttonText: { color: '#ffffff', fontWeight: 'bold', fontSize: 13, letterSpacing: 1 },
  badge: { backgroundColor: 'rgba(0, 229, 255, 0.08)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(0, 229, 255, 0.4)' },
  badgeGreen: { backgroundColor: 'rgba(34, 197, 94, 0.08)', borderColor: 'rgba(34, 197, 94, 0.4)' },
  badgeRed: { backgroundColor: 'rgba(239, 68, 68, 0.08)', borderColor: 'rgba(239, 68, 68, 0.4)' },
  badgeText: { color: '#ffffff', fontSize: 10, fontWeight: '900', letterSpacing: 0.5 }
});