/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const Estilos = {
  estiloTexto: {
    padding: 20
  }
}

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();

  numero_aleatorio = Math.floor(numero_aleatorio * 10);

  alert(numero_aleatorio);
}

export default class App extends Component<{}> {
  render() {
    return (
     <View>
       <Text style={Estilos.estiloTexto}>Gerador de números randômicos!!!</Text>
       <Button title="Gerar número randômico" onPress={geraNumeroAleatorio} />
     </View>
    );
  }
}
