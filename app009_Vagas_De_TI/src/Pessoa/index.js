import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from './styles'
 
class Pessoa extends Component{
    render(){
      return(
        <View style={styles.areaPessoa}>
          <Text style={styles.textoPessoa}> Nome: {this.props.data.nome} </Text>
          <Text style={styles.textoPessoa}> Salario: {this.props.data.salario} </Text>
          <Text style={styles.textoPessoa}> Descricao: {this.props.data.descricao} </Text>
          <Text style={styles.textoPessoa}> Contato: {this.props.data.email} </Text>
        </View>
      );
    }
  }
 
export default Pessoa;