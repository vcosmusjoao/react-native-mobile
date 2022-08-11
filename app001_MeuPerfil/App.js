import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
  
export default function App() {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Meu Primeiro App</Text>
      <Image
          source={{ uri: 'https://pps.whatsapp.net/v/t61.24694-24/296577996_776082766854788_7687623985805889502_n.jpg?ccb=11-4&oh=01_AVxbckw25gBdJkXM8m1hUoTYv-UkfwRTJip9mPira_c0Og&oe=6304B691'}}
          style={{ width: 300, height: 300}}
        />
      <Text style={styles.subtitle}>Dados Pessoais:</Text>
      <Text> João Victor</Text>
      <Text style={styles.subtitle}>Formação:</Text>
      <Text> Sistemas para Internet</Text>
      <Text style={styles.subtitle}>Experiência:</Text>
      <Text> SINQIA- Estagiário de Desenvolvimento</Text>
      <Text style={styles.subtitle}>Projetos:</Text>
      <Text> Case BlueBenx- Challenge FIAP</Text>

    </View>
  );
}
  
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc2c2",
  },
  title: {
    fontSize: 18,
    marginVertical: 2
  },
  subtitle: {
    fontSize: 14,
    margin:5,
    color: "#fff",
    fontWeight:"bold"
  },
});

