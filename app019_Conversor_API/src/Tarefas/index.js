import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
 
class Tarefas extends Component{
  render(){
    const ask = this.props.data;
    return(
      <View>
        
        <View>
          <Text style={styles.titulo}>Hello</Text>
          <Text style={styles.titulo}>{ask}</Text>
          
        </View>
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  titulo:{
    fontSize: 18,
    padding: 15,
  },
  descricao:{
    fontSize: 10,
    padding: 15,
  },
});
 
export default Tarefas;
