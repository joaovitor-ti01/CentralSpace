import { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import { useMission } from '../context/MissionContext';

export default function Lancamento() {
  const { addMission } = useMission();

  const [nome, setNome] = useState('');
  const [destino, setDestino] = useState('');

  function cadastrar() {
    if (!nome || !destino) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    addMission({
      nome,
      destino,
    });

    Alert.alert('Missão iniciada com sucesso 🚀');

    setNome('');
    setDestino('');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.galaxy} />

      <Text style={styles.title}>
        NOVA MISSÃO
      </Text>

      <Text style={styles.subtitle}>
        REGISTRAR NOVA MISSÃO ESPACIAL
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>
          NOME DA MISSÃO
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Artemis III"
          placeholderTextColor="#64748b"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>
          DESTINO
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Órbita Lunar"
          placeholderTextColor="#64748b"
          value={destino}
          onChangeText={setDestino}
        />

        <TouchableOpacity style={styles.button} onPress={cadastrar}>
          <Text style={styles.buttonText}>
            INICIAR MISSÃO
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    padding: 20,
  },

  galaxy: {
    position: 'absolute',
    width: 300,
    height: 300,
    backgroundColor: '#7c3aed',
    borderRadius: 200,
    top: -100,
    right: -100,
    opacity: 0.25,
  },

  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 30,
  },

  subtitle: {
    color: '#cbd5e1',
    marginBottom: 40,
    letterSpacing: 2,
  },

  form: {
    backgroundColor: '#081028',
    padding: 25,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#12203d',
  },

  label: {
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#12203d',
    borderRadius: 16,
    padding: 18,
    color: '#fff',
    marginBottom: 25,
  },

  button: {
    backgroundColor: '#00d9ff',
    padding: 20,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#020617',
    fontWeight: 'bold',
    fontSize: 18,
  },
});