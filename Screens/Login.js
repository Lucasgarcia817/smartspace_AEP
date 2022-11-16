import { View, StyleSheet, Image, Text, ImageBackground} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';


const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  button: {
    marginTop: 40,
    backgroundColor: '#97F4D9',
    width: 220,
    height: 40,
  },
  logoTitulo: {
    marginTop: 50,
    alignItems: 'center',
  },
  titulo: {
    marginTop: 25,
    marginBottom: 40,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#226C56',
  },
  input: {
    marginTop: 20,
    backgroundColor: 'whitesmoke',
    shadowRadius: 5,
    width: 300,
  },
  cadastre: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  imageBack: {
    width: 333,
    height: 827,
    flex: 1,
    justifyContent: 'center',
  },
});

const Home = ({navigation}) => {
  const irParaCadastro = () => {
    navigation.navigate('Cadastro');
  };

  const irParaHome = () => {
    navigation.navigate('Home');
  };

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  return (
    <View>
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/login-background.jpg')}
          resizeMode="cover"
          style={styles.imageBack}>
          <View style={styles.main}>
            <View style={styles.logoTitulo}>
              <Image
                style={styles.logo}
                source={require('./assets/logo.webp')}
              />
              <Text style={styles.titulo}> Smart Space</Text>
            </View>
            <TextInput
              style={styles.input}
              label="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              label="Senha"
              value={senha}
              secureTextEntry
              onChangeText={setSenha}
            />
            <Button
              style={styles.button}
              mode="contained"
              onPress={irParaHome}>
              Login
            </Button>
            <View style={styles.cadastre}>
              <Text style={styles.textoCadastre}>Não possui conta?</Text>
              <Button mode="text" onPress={irParaCadastro}>
                Cadastre-se
              </Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Home;
