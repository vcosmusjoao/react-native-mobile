import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../Home/styles';
 
export default function Sinopse({ route }){
  return(
    <View style={styles.sinopse}>
      <Text style={styles.subTitle}> { route.params?.props.nome } </Text>
      <Text style={styles.text}> { route.params?.props.sinopse } </Text>
    </View>
  )
}