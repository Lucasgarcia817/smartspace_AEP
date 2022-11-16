import { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';
import { USER_URL } from '../constants';

const styles = StyleSheet.create({
  input: {
    marginTop: 15,
  },
  button: {
    marginTop: 15,
    height: 40,
    backgroundColor: '#226C56',
  },
  titulo: {
    marginTop: 25,
    marginBottom: 40,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#226C56',
  },
  logoTitulo: {
    marginTop: 50,
    alignItems: 'center',
  },
  main: {
    backgroundColor: '#97F4D9',
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
});

const Cadastro = ({ navigation }) => {
  const irParaVisualizacao = () => {
    navigation.navigate('Visualizacao');
  };

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirmar, setConfirmar] = useState();
  const [estado, setEstado] = useState();
  const [cidade, setCidade] = useState();

  const salvarUsuario = async () => {
    await axios.post(USER_URL, {
      nome: nome,
      email: email,
      senha: senha,
      confirmar: confirmar,
      estado: estado,
      cidade: cidade,
    });
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.logoTitulo}>
        <Image style={styles.logo} source={require('./assets/logo.webp')} />
        <Text style={styles.titulo}> Smart Space</Text>
      </View>
      <TextInput
        style={styles.input}
        label="Nome*"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        label="Email*"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        label="Senha*"
        value={senha}
        secureTextEntry
        onChangeText={setSenha}
      />
      <TextInput
        style={styles.input}
        label="Confirmar senha*"
        value={confirmar}
        secureTextEntry
        onChangeText={setConfirmar}
      />
      <TextInput
        style={styles.input}
        label="Estado"
        value={estado}
        onChangeText={setEstado}
      />
      <TextInput
        style={styles.input}
        label="cidade"
        value={cidade}
        onChangeText={setCidade}
      />
      <Button
        mode="contained"
        onPress={(salvarUsuario, irParaVisualizacao)}
        style={styles.button}>
        Cadastrar
      </Button>
    </ScrollView>
  );
};

export default Cadastro;
