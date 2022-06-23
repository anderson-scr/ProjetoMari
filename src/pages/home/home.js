import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function Cervejas(){
  return(
    <View style={{flex: 1, justifyContent: 'space-between'}}>

      <View>
        <Image
          source={require('../../../assets/cervejaHome.png')}
          style={{width:'100%', marginTop:20}}
          resizeMode="contain"
        />
      </View>

      <View style={{flex:1, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly'}}>

        <View>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.texto}>Cervejas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.texto}>Destilas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.texto}>Lojinha</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.texto}>Sem Alcool</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.texto}>Comidinhas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.texto}>Sinuca</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View>
        <Image
         source={require('../../../assets/codigoQR.png')}
         style={{width:'100%', marginBottom: 15}}
         resizeMode="contain"
        />
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  buttonStyle: {
    color: '#000',
    borderWidth: 2,
    borderColor: "#FABD34",
    borderRadius: 5,
    minWidth: '45%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 8
  },
  texto: {
    fontSize: 25,
    textAlign: 'center'
  }
});