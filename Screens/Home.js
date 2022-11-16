import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import Card from './components/Card'

const styles = StyleSheet.create({
    main: {
      backgroundColor: '#97F4D9'
    },
    logo:{
      margin: 10,
      width: 100,
      height: 100,
    },
    logoTitulo:{
      display: 'flex',
      flexDirection: 'row'
    },
    cidade:{
      fontSize: 30,
      marginTop: 35,
      marginLeft: 8
    }
});

const estrela = require('./assets/estrela.png')
const parqueInga = require('./assets/ParqueInga.jpg')
const catedral = require('./assets/catedral.jpg')
const parqueAlfredo = require('./assets/parqueAlfredonyffeler.jpg')
const parqueJapao = require('./assets/japao.jfif')
const grevilhas = require('./assets/grevilhas.jfif')

const Home = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.logoTitulo}>
        <Image style={styles.logo} source={require('./assets/logo.webp')} />
        <Text style={styles.cidade}>Maringá - PR</Text>
      </View>

      <Card
        titulo="Parque do Ingá"
        lotacao="Lotação atual: 29%"
        imagem={parqueInga}
        avaliacao="Avaliação 4.3"
        estrela={estrela}
      />

      <Card
        titulo="Catedral"
        lotacao="Lotação atual: 30%"
        imagem={catedral}
        avaliacao="Avaliação 5.0"
        estrela={estrela}
      />

      <Card
        titulo="Buracão"
        lotacao="Lotação atual: 12%"
        imagem={parqueAlfredo}
        avaliacao="Avaliação 3.4"
        estrela={estrela}
      />

      <Card
        titulo="Parque do Japão"
        lotacao="Lotação atual: 41%"
        imagem={parqueJapao}
        avaliacao="Avaliação 4.1"
        estrela={estrela}
      />

      <Card
        titulo="Bosque"
        lotacao="Lotação atual: 50%"
        imagem={grevilhas}
        avaliacao="Avaliação 4.6"
        estrela={estrela}
      />
    </ScrollView>
  );
};

export default Home;
