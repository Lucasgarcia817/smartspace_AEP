import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    shadowRadius: 10
  },
  imagem: {
    width: 100,
    height: 100
  },
  texts: {
    marginLeft: 15,
  },
  titulo: {
    fontSize: 25,
    color: 'black'
  },
  lotacao: {
    color: 'black',
    marginTop: 10,
    fontSize: 12,
  },
  avaliacao:{
    marginTop: 10,
  },
  estrela:{
    width: 10,
    height: 10,
    marginLeft: 5
  },
});



const Menu = ({titulo, lotacao, imagem, avaliacao, estrela}, {navigation}) => {
  const irParaVisualizacao = () => {
    navigation.navigate('Visualizacao');
  };
  return(
  <TouchableOpacity style={styles.card} onPress={irParaVisualizacao} >
        <Image style={styles.imagem} source = {imagem}/>
        <View style={styles.texts}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.lotacao}>{lotacao}</Text>
          <Text style={styles.avaliacao}>{avaliacao}<Image style={styles.estrela} source = {estrela}/></Text>
        </View>
      </TouchableOpacity>
  )
  };

  export default Menu;