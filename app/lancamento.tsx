import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useMission } from '../context/MissionContext';

export default function Lancamento() {
  const { addMission } = useMission();
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [destino, setDestino] = useState('');
  const [tripulacao, setTripulacao] = useState('');
  const [previsao, setPrevisao] = useState('');

  async function cadastrar() {
    if (!nome.trim() || !destino.trim() || !tripulacao.trim() || !previsao.trim()) {
      Alert.alert('Protocolo Incompleto', 'Preencha todos os campos, incluindo a previsão de chegada.');
      return;
    }

    const numeroTripulantes = Number(tripulacao);
    if (isNaN(numeroTripulantes) || numeroTripulantes < 0) {
      Alert.alert('Dados Inválidos', 'A tripulação deve ser um número válido.');
      return;
    }

    await addMission({
      nome: nome.trim(),
      destino: destino.trim(),
      tripulacao: numeroTripulantes,
      previsao: previsao.trim(),
    });

    Alert.alert('🚀 Sucesso', `${nome} foi adicionada aos vetores ativos.`);
    
    setNome('');
    setDestino('');
    setTripulacao('');
    setPrevisao('');
    router.push('/');
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ justifyContent: 'center', flexGrow: 1, paddingBottom: 120 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>🚀 INICIAR MISSÃO</Text>
          <Text style={styles.subtitle}>REGISTRO DE DIRETRIZ E MANIFESTO DE VOO</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>NOME DA MISSÃO</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Artemis III"
              placeholderTextColor="#334155"
              value={nome}
              onChangeText={setNome}
            />

            <Text style={styles.label}>COORDENADAS DE DESTINO (EX: MARTE, LUA, JÚPITER...)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Marte"
              placeholderTextColor="#334155"
              value={destino}
              onChangeText={setDestino}
            />

            <Text style={styles.label}>QUANTIDADE DE TRIPULANTES</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 4"
              placeholderTextColor="#334155"
              keyboardType="numeric"
              value={tripulacao}
              onChangeText={setTripulacao}
            />

            <Text style={styles.label}>PREVISÃO DE CHEGADA (T_ETA)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 6 Meses / 2 Anos"
              placeholderTextColor="#334155"
              value={previsao}
              onChangeText={setPrevisao}
            />

            <TouchableOpacity style={styles.button} onPress={cadastrar} activeOpacity={0.8}>
              <Text style={styles.buttonText}>AUTORIZAR LANÇAMENTO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', paddingHorizontal: 20 },
  formContainer: { justifyContent: 'center', width: '100%' },
  title: { color: '#ffffff', fontSize: 28, fontWeight: '900', letterSpacing: 1, textAlign: 'center', marginTop: 20 },
  subtitle: { color: '#475569', fontSize: 11, fontWeight: '700', marginBottom: 25, letterSpacing: 1.5, textAlign: 'center' },
  formGroup: { backgroundColor: '#0f172a', padding: 25, borderRadius: 24, borderWidth: 1, borderColor: '#1e293b' },
  label: { color: '#64748b', fontSize: 11, fontWeight: 'bold', marginBottom: 8, letterSpacing: 1 },
  input: { backgroundColor: '#020617', borderWidth: 1, borderColor: '#1e293b', borderRadius: 12, padding: 16, color: '#ffffff', fontSize: 15, marginBottom: 22 },
  button: { backgroundColor: '#00e5ff', padding: 18, borderRadius: 12, alignItems: 'center', marginTop: 10, shadowColor: '#00e5ff', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 6 },
  buttonText: { color: '#020617', fontWeight: '900', fontSize: 15, letterSpacing: 1 }
});