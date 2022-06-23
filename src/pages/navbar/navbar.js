import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
     <View style={styles.usuario}>
      <View style={styles.bolota}>
        <Image style={styles.icone} source={require('../../../assets/person.png')}/>
      </View>
      <Text style={styles.nome}>Mariana de Barros</Text>
     </View>
     <View style={styles.logo}>
      <Image style={styles.imgLogo} source={require('../../../assets/logo.png')}/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight:200,
    backgroundColor: '#FABD34',
    alignItems: 'center',
    flexDirection: 'row'
  },

  usuario: {
    justifySelf: 'left',
    width: '50%',
    height: '100%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingLeft: 10
  },
  
  logo:{
    width: '50%',
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  nome: {
    fontSize: 25,
    fontWeight: '800',
  },

  bolota:{
    flex:1,
    width:'40%',
    maxHeight:'40%',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#000',
    borderRadius: 50
  },

  icone:{
  width:'40%',
  height:'40%'
  },

  imgLogo:{
    height:'70%',
    width: '70%'
  }

});
