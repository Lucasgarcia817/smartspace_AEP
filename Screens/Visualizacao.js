import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#97F4D9',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    margin: 10,
    width: 100,
    height: 100,
  },
  logoTitulo: {
    display: 'flex',
    flexDirection: 'row',
  },
  cidade: {
    fontSize: 30,
    marginTop: 35,
    marginLeft: 30,
  },
  descricao: {
    margin: 10,
    backgroundColor: '#EBFFFB',
    borderRadius: 15,
    padding: 10,
    textAlign: 'center',
  },
  tituloMapa: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  mapa: {
    marginLeft: 30,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#226C56',
    width: 150,
    height: 35,
    marginTop: 10,
    marginLeft: 85,
    shadowRadius: 10,
  },
  avaliar: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  estrela: {
    width: 10,
    height: 10,
    marginLeft: 5,
    marginTop: 15,
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
});

const Editar = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.logoTitulo}>
        <Image style={styles.logo} source={require('./assets/logo.webp')} />
        <Text style={styles.cidade}>Catedral</Text>
      </View>
      <Text style={styles.descricao}>
        A Catedeal Metropolitana Basílica Nossa Senhora da Glória é um templo
        católico do município de Maringá, onde se encontra a cátedra de
        Arquidiocese de Maringá.{' '}
      </Text>
      <Text style={styles.tituloMapa}>Zona 02, Av. tirandentes</Text>
      <Image style={styles.mapa} source={require('./assets/mapa.png')} />
      <Button mode="contained" style={styles.button}>
        Iniciar rota
      </Button>
      <View style={styles.view}>
        <Text style={styles.avaliar}>Avaliar</Text>
        <Image
          style={styles.estrela}
          source={require('./assets/estrelaPreta.png')}
        />
        <Image
          style={styles.estrela}
          source={require('./assets/estrelaPreta.png')}
        />
        <Image
          style={styles.estrela}
          source={require('./assets/estrelaPreta.png')}
        />
        <Image
          style={styles.estrela}
          source={require('./assets/estrelaPreta.png')}
        />
        <Image
          style={styles.estrela}
          source={require('./assets/estrelaPreta.png')}
        />
      </View>
    </ScrollView>
  );
};

export default Editar;
