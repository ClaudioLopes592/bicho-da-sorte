import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Imagem from "../../components/Imagem";
import Header from "../../components/Header";

const Dezena = () => {

  const [dezena, setDezena] = useState('');

  function gerarDezena(min, max) {
    min = Math.ceil(0);
    max = Math.floor(99);
    const num = Math.floor(Math.random() * (max - min)) + min;
    setDezena(num);
  }

  const avestruz = [
    1, 2, 3, 4
  ]

  const aguia = [
    5, 6, 7, 8
  ]

  const burro = [
    9, 10, 11, 12
  ]

  const borboleta = [
    13, 14, 15, 16
  ]

  const cachorro = [
    17, 18, 19, 20
  ]

  const cabra = [
    21, 22, 23, 24
  ]

  const carneiro = [
    25, 26, 27, 28
  ]

  const camelo = [
    29, 30, 31, 32
  ]

  const cobra = [
    33, 34, 35, 36
  ]

  const coelho = [
    37, 38, 39, 40
  ]

  const cavalo = [
    41, 42, 43, 44
  ]

  const elefante = [
    45, 46, 47, 48
  ]

  const galo = [
    49, 50, 51, 52
  ]

  const gato = [
    53, 54, 55, 56
  ]

  const jacare = [
    57, 58, 59, 60
  ]

  const leao = [
    61, 62, 63, 64
  ]

  const macaco = [
    65, 66, 67, 68
  ]

  const porco = [
    69, 70, 71, 72
  ]

  const pavao = [
    73, 74, 75, 76
  ]

  const peru = [
    77, 78, 79, 80
  ]

  const touro = [
    81, 82, 83, 84
  ]

  const tigre = [
    85, 86, 87, 88
  ]

  const urso = [
    89, 90, 91, 92
  ]

  const veado = [
    93, 94, 95, 96
  ]

  const vaca = [
    97, 98, 99, 0
  ]

  return (
    <>
    <Header />
    <View style={styles.container} >
      <ScrollView 
      showsVerticalScrollIndicator={false}
      >
      <Text style={styles.titulo}>DEZENA</Text>
      <View style={styles.containerBotao} >
        <TouchableOpacity
          style={styles.dezena}
          onPress={() => gerarDezena()}
        >
          <Text style={styles.textoBotao} >CLICK</Text>
        </TouchableOpacity>
      </View>
      <View>
        {avestruz.includes(dezena) ? 
        <Imagem
        texto="AVESTRUZ"
        img={require("../../Img/avestruz.jpg")}
      />
      :
      aguia.includes(dezena) ? 
        <Imagem
        texto="ÁGUIA"
        img={require("../../Img/aguia.jpg")}
      />
      :
      burro.includes(dezena) ? 
        <Imagem
        texto="BURRO"
        img={require("../../Img/burro.jpg")}
      />
      :
      borboleta.includes(dezena) ? 
        <Imagem
        texto="BORBOLETA"
        img={require("../../Img/borboleta.jpg")}
      />
      :
      cachorro.includes(dezena) ? 
        <Imagem
        texto="CACHORRO"
        img={require("../../Img/cachorro.jpg")}
      />
      :
      cabra.includes(dezena) ? 
        <Imagem
        texto="CABRA"
        img={require("../../Img/cabra.jpg")}
      />
      :
      carneiro.includes(dezena) ? 
        <Imagem
        texto="CARNEIRO"
        img={require("../../Img/carneiro.jpg")}
      />
      :
      camelo.includes(dezena) ? 
        <Imagem
        texto="CAMELO"
        img={require("../../Img/camelo.jpg")}
      />
      :
      cobra.includes(dezena) ? 
        <Imagem
        texto="COBRA"
        img={require("../../Img/cobra.jpg")}
      />
      :
      coelho.includes(dezena) ? 
        <Imagem
        texto="COELHO"
        img={require("../../Img/coelho.jpg")}
      />
      :
      cavalo.includes(dezena) ? 
        <Imagem
        texto="CAVALO"
        img={require("../../Img/cavalo.jpg")}
      />
      :
      elefante.includes(dezena) ? 
        <Imagem
        texto="ELEFANTE"
        img={require("../../Img/elefante.jpg")}
      />
      :
      galo.includes(dezena) ? 
        <Imagem
        texto="GALO"
        img={require("../../Img/galo.jpg")}
      />
      :
      gato.includes(dezena) ? 
        <Imagem
        texto="COELHO"
        img={require("../../Img/gato.jpg")}
      />
      :
      jacare.includes(dezena) ? 
        <Imagem
        texto="JACARÉ"
        img={require("../../Img/jacare.jpg")}
      />
      :
      leao.includes(dezena) ? 
        <Imagem
        texto="LEÃO"
        img={require("../../Img/leao.jpg")}
      />
      :
      macaco.includes(dezena) ? 
        <Imagem
        texto="MACACO"
        img={require("../../Img/macaco.jpg")}
      />
      :
      porco.includes(dezena) ? 
        <Imagem
        texto="PORCO"
        img={require("../../Img/porco.jpg")}
      />
      :
      pavao.includes(dezena) ? 
        <Imagem
        texto="PAVÃO"
        img={require("../../Img/pavao.jpg")}
      />
      :
      peru.includes(dezena) ? 
        <Imagem
        texto="PERU"
        img={require("../../Img/peru.jpg")}
      />
      :
      touro.includes(dezena) ? 
        <Imagem
        texto="TOURO"
        img={require("../../Img/touro.jpg")}
      />
      :
      tigre.includes(dezena) ? 
        <Imagem
        texto="TIGRE"
        img={require("../../Img/tigre.jpg")}
      />
      :
      urso.includes(dezena) ? 
        <Imagem
        texto="URSO"
        img={require("../../Img/urso.jpg")}
      />
      :
      veado.includes(dezena) ? 
        <Imagem
        texto="VEADO"
        img={require("../../Img/veado.jpg")}
      />
      :
      vaca.includes(dezena) ? 
        <Imagem
        texto="VACA"
        img={require("../../Img/vaca.jpg")}
      />
      :
      null
      }
      </View>
      {
        dezena === "" ? <Text></Text> : 
        dezena <= 9 ? <Text style={styles.textoDezena} >{'0' + dezena}</Text>
          : <Text style={styles.textoDezena}>{dezena}</Text>
      }
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
    textAlign: "center",
    marginBottom: 20
  },
  containerBotao: {
    justifyContent: "center",
    alignItems: "center"
  },
  dezena: {
    width: 100,
    height: 100,
    backgroundColor: "#53585C",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 30
  },
  textoBotao: {
    color: "#A8A897",
    fontSize: 25,
    fontWeight: "bold"
  },
  textoDezena: {
    color: "#5C5353",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20
  },
  msg: {
    fontSize: 30,
    textAlign: "center",
    margin: 30,
    color: "#5C5353",
    fontWeight: "bold"
  }
});

export default Dezena;
