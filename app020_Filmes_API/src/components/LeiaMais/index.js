import React from 'react';
import { Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles'
 
export default function LeiaMais(props){
  const navigation = useNavigation();
 
  const infos = () => {
    navigation.navigate('Sinopse', { ...props });
  }
 
  return(
    <Pressable 
      onPress={() => infos()} 
      style={[styles.button, styles.buttonBlue]}
    >
      <Text style={styles.buttonText}> Ler mais </Text>
    </Pressable>
  )
}