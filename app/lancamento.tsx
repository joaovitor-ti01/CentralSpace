import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useMission } from '../context/MissionContext';

export default function Lancamento() {
  const { addMission } = useMission();
  const router = useRouter();
  
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');

  const handleLaunch = async () => {
    if (!name.trim() || !destination.trim()) {
      Alert.alert('Erro de Protocolo', 'Todos os campos são obrigatórios!');
      return;
    }

    if (name.length < 3) {
      Alert.alert('Erro de Validação', 'O nome da missão deve ter pelo menos 3 caracteres.');
      return;
    }

    await addMission({ name, destination, status: 'Ativa' });
    Alert.alert('Sucesso', 'Missão espacial lançada e registrada!');
    setName('');
    setDestination('');
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTRAR NOVA MISSÃO ESPACIAL</Text>
      
      <Text style={styles.label}>Nome da Missão *</Text>
      <TextInput 
        style={styles.input} 
        value={name} 
        onChangeText={setName} 
        placeholder="Ex: Artemis III"
        placeholderTextColor="#555"
      />

      <Text style={styles.label}>Coordenadas / Destino *</Text>
      <TextInput 
        style={styles.input} 
        value={destination} 
        onChangeText={setDestination} 
        placeholder="Ex: Órbita Lunar"
        placeholderTextColor="#555"
      />

      <TouchableOpacity style={styles.button} onPress={handleLaunch}>
        <Text style={styles.buttonText}>INICIAR MISSÃO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050814', padding: 25, justifyContent: 'center' },
  title: { color: '#00e5ff', fontSize: 16, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', letterSpacing: 1.5 },
  label: { color: '#fff', fontSize: 14, marginBottom: 8 },
  input: { backgroundColor: '#0a0f24', color: '#fff', padding: 15, borderRadius: 8, marginBottom: 20, borderWidth: 1, borderColor: '#1f293d' },
  button: { backgroundColor: '#00e5ff', padding: 16, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#050814', fontWeight: 'bold', fontSize: 16 }
});