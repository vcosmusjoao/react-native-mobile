import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import axios from 'axios';

import { styles } from './styles'
import LeiaMais from '../../components/LeiaMais';
 
class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      errorMessage: '',
      filmes: []
    };
     0
  }

  async componentDidMount(){
    try {
      const response = await axios.get('https://sujeitoprogramador.com/r-api/?api=filmes');
      this.setState({
        loading: false,
        filmes: response.data
      });
    }catch(error) {
      console.error("Erro ao carregar os filmes: ", error)
      this.setState({ loading: false, errorMessage: error.message ? error.message : error })
    }
  }

  render(){

    return(
      <View style={styles.container}>
        {
          this.state.loading && <Text style={styles.loading}> Carregando filmes... </Text>
        }
        {
          (!this.state.loading && !this.state.errorMessage) &&
          <ScrollView>
            {
              this.state.filmes.map(({ nome, foto, id, sinopse }) => {
                return (
                  <View style={styles.card} key={`filme-${id}`}>
                    <View style={styles.foto}>
                      <Image 
                        source={{ uri: foto }}
                        style={{ width: 372, height: 230 }}
                      />
                    </View>
                    <Text style={styles.subtitulo}>{`${nome}`}</Text>
                    <Text style={styles.textCard}>{`${sinopse.substr(0, 75)}...`}</Text>
                    <LeiaMais props={{ nome, sinopse }} />
                  </View>
                )
              })
            }
          </ScrollView>
        }
        {
          this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>
        }
      </View>
    );
  }
}
 
export default Home;