import React, { Component } from 'react';
import { View, StyleSheet, Image, TextInput, Pressable, Text } from 'react-native';
import * as Axios from 'axios';

class App extends Component {

  constructor(props) {
    
    super(props);
    this.state = {
      user: '',
      item: [],
      
    };
  }
  
  buscarUser = () => {
    Axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(response => {
        this.setState({ item: response.data })
        console.log(response.data)
      })
      .catch(error => {
        return console.log(error);
      })
  }

  render() {
    let img = '';
    if  (this.state.item.avatar_url == undefined){
       img = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
    }else{
       img = this.state.item.avatar_url;
    }

    return (
      <View style={styles.container}>
        
       <Image
        source={{ uri: img }}
        style={{ width: 300, height: 300}}
      />

        <Text>Digite seu Usuario</Text>
        <View style={styles.horizontal}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu usuario do Github"
            onChangeText={(user) => this.setState({ user })}
            value={this.state.user}
          />
          <View>
            <Pressable style={styles.button} onPress={this.buscarUser}>
              <Text>OK</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.titulo}>Id: {this.state.item.id}</Text>
        <Text style={styles.descricao}>Nome: {this.state.item.name}</Text>
        <Text style={styles.descricao}>Repositórios: {this.state.item.public_repos}</Text>
        <Text style={styles.descricao}>Criado em: {this.state.item.created_at}</Text>
        <Text style={styles.descricao}>Seguidores: {this.state.item.followers}</Text>
        <Text style={styles.descricao}>Seguindo: {this.state.item.following}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    width: 320
  },
  button: {
    backgroundColor: '#f2f',
    padding: 10,
    marginTop: 13
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }

});

export default App;

