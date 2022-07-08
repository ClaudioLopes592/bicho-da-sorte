import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Imagem from "../../components/Imagem";

const Inicio = ({ navigation }) => {
  return (
    <>
      <View style={styles.container} >
      <ScrollView 
      showsVerticalScrollIndicator={false} 
      >
        <Text style={styles.titulo} >
          OBRIGADO POR BAIXAR O APP BICHO DA SORTE
        </Text>
        <Imagem
          texto="ÁGUIA"
          img={require("../../Img/aguia_1.jpg")}
        />
        <View>
          <Text style={styles.titulo} >ATENÇÃO</Text>
          <Text style={styles.subtitulo}>
            Este Alicativo não realiza apostas, apenas fornece palpites para seu jogo
          </Text>
          <Text style={styles.titulo} >BOA SORTE!</Text>
        </View>
        <Text style={styles.subtitulo}>
          As imagens utilizadas neste App são de uso livre foram baixadas do site Pixabay
        </Text>
        <View  style={styles.containerBotao} >
        <TouchableOpacity 
        style={styles.botaoIniciar} 
        onPress={() => navigation.navigate("Home") }
        >
          <Text style={styles.textoBotao} >INICIAR</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a9a9a9"
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: "#53585C"
  },
  subtitulo: {
    fontSize: 16,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20
  },
  containerBotao: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  botaoIniciar: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#53585C",
  },
  textoBotao: {
    color: "#A8A897",
    fontWeight: "bold",
    fontSize: 16
  }
});

export default Inicio;
