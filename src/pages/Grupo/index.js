import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Imagem from "../../components/Imagem";
import Header from "../../components/Header";

const Grupo = () => {

  const [grupo, setGrupo] = useState('');
  const [bicho, setBicho] = useState([]);

  function gerarNumero() {
    let num = Math.floor(Math.random() * 25)
    setGrupo(num)
    bichoGrupo();
  }

  function bichoGrupo() {
    setBicho([
      ['01 - ', '02 - ', '03 - ', '04'],
      ['05 - ', '06 - ', '07 - ', '08'],
      ['09 - ', '10 - ', '11 - ', '12'],
      ['13 - ', '14 - ', '15 - ', '16'],
      ['17 - ', '18 - ', '19 - ', '20'],
      ['21 - ', '22 - ', '23 - ', '24'],
      ['25 - ', '26 - ', '27 - ', '28'],
      ['29 - ', '30 - ', '31 - ', '32'],
      ['33 - ', '34 - ', '35 - ', '36'],
      ['37 - ', '38 - ', '39 - ', '40'],
      ['41 - ', '42 - ', '43 - ', '44'],
      ['45 - ', '46 - ', '47 - ', '48'],
      ['49 - ', '50 - ', '51 - ', '52'],
      ['53 - ', '54 - ', '55 - ', '56'],
      ['57 - ', '58 - ', '59 - ', '60'],
      ['61 - ', '62 - ', '63 - ', '64'],
      ['65 - ', '66 - ', '67 - ', '68'],
      ['69 - ', '70 - ', '71 - ', '72'],
      ['73 - ', '74 - ', '75 - ', '76'],
      ['77 - ', '78 - ', '79 - ', '80'],
      ['81 - ', '82 - ', '83 - ', '84'],
      ['85 - ', '86 - ', '87 - ', '88'],
      ['89 - ', '90 - ', '91 - ', '92'],
      ['93 - ', '94 - ', '95 - ', '96'],
      ['97 - ', '98 - ', '99 - ', '00'],
    ])
  }

  return (
    <>
    <Header />
    <View style={styles.container}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      >
      <Text style={styles.titulo}>GRUPO</Text>
      <View style={styles.containerBotao}>
      {grupo === '' ?
        <Text style={styles.subtitulo} >Clique no circulo para um palpite</Text> :
        <Text></Text>}
      <TouchableOpacity
        style={styles.grupo}
        onPress={() => gerarNumero()}>
        {grupo === '' ? <Text style={styles.textoGrupo} >{grupo}</Text>
          : <Text style={styles.textoGrupo}>{grupo + 1}</Text>}
      </TouchableOpacity>
      </View>
      {grupo + 1 === 1 ?
        <Imagem
          texto="AVESTRUZ"
          img={require("../../Img/avestruz.jpg")}
        /> :
        grupo + 1 === 2 ? 
        <Imagem
          texto="ÁGUIA"
          img={require("../../Img/aguia.jpg")}
        /> :
        grupo + 1 === 3 ? 
        <Imagem
          texto="BURRO"
          img={require("../../Img/burro.jpg")}
        /> :
        grupo + 1 === 4 ? 
        <Imagem
          texto="BORBOLETA"
          img={require("../../Img/borboleta.jpg")}
        /> :
        grupo + 1 === 5 ? 
        <Imagem
          texto="CACHORRO"
          img={require("../../Img/cachorro.jpg")}
        /> :
        grupo + 1 === 6 ? 
        <Imagem
          texto="CABRA"
          img={require("../../Img/cabra.jpg")}
        /> :
        grupo + 1 === 7 ? 
        <Imagem
          texto="CARNEIRO"
          img={require("../../Img/carneiro.jpg")}
        /> :
        grupo + 1 === 8 ? 
        <Imagem
          texto="CAMELO"
          img={require("../../Img/camelo.jpg")}
        /> :
        grupo + 1 === 9 ? 
        <Imagem
          texto="COBRA"
          img={require("../../Img/cobra.jpg")}
        /> :
        grupo + 1 === 10 ? 
        <Imagem
          texto="COELHO"
          img={require("../../Img/coelho.jpg")}
        /> :
        grupo + 1 === 11 ? 
        <Imagem
          texto="CAVALO"
          img={require("../../Img/cavalo.jpg")}
        /> :
        grupo + 1 === 12 ? 
        <Imagem
          texto="ELEFANTE"
          img={require("../../Img/elefante.jpg")}
        /> :
        grupo + 1 === 13 ? 
        <Imagem
          texto="GALO"
          img={require("../../Img/galo.jpg")}
        /> :
        grupo + 1 === 14 ? 
        <Imagem
          texto="GATO"
          img={require("../../Img/gato.jpg")}
        /> :
        grupo + 1 === 15 ? 
        <Imagem
          texto="JACARÉ"
          img={require("../../Img/jacare.jpg")}
        /> :
        grupo + 1 === 16 ? 
        <Imagem
          texto="LEÃO"
          img={require("../../Img/leao.jpg")}
        /> :
        grupo + 1 === 17 ? 
        <Imagem
          texto="MACACO"
          img={require("../../Img/macaco.jpg")}
        /> :
        grupo + 1 === 18 ? 
        <Imagem
          texto="PORCO"
          img={require("../../Img/porco.jpg")}
        /> :
        grupo + 1 === 19 ? 
        <Imagem
          texto="PAVÃO"
          img={require("../../Img/pavao.jpg")}
        /> :
        grupo + 1 === 20 ? 
        <Imagem
          texto="PERU"
          img={require("../../Img/peru.jpg")}
        /> :
        grupo + 1 === 21 ? 
        <Imagem
          texto="TOURO"
          img={require("../../Img/touro.jpg")}
        /> :
        grupo + 1 === 22 ? 
        <Imagem
          texto="TIGRE"
          img={require("../../Img/tigre.jpg")}
        /> :
        grupo + 1 === 23 ? 
        <Imagem
          texto="URSO"
          img={require("../../Img/urso.jpg")}
        /> :
        grupo + 1 === 24 ? 
        <Imagem
          texto="VEADO"
          img={require("../../Img/veado.jpg")}
        /> :
        grupo + 1 === 25 ? 
        <Imagem
          texto="VACA"
          img={require("../../Img/vaca.jpg")}
        /> :
        null
      }
      <View>
        <Text style={styles.textoGrupo} >{bicho[grupo]}</Text>
      </View>
      <View>
         <Text style={styles.msg}>BOA SORTE!</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#53585C",
    textAlign: "center"
  },
  containerBotao: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  subtitulo: {
    fontSize: 18,
    color: "#fff"
  },
  grupo: {
    width: 100,
    height: 100,
    backgroundColor: "#53585C",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  textoGrupo: {
    color: "#A8A897",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },
  msg: {
    fontSize: 30,
    textAlign: "center",
    margin: 30,
    color: "#5C5353",
    fontWeight: "bold"
  }
});

export default Grupo;
