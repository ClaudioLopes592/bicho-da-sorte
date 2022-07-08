import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Imagem from "../../components/Imagem";
import Header from "../../components/Header";

const DuqueDezena = () => {

    const [pdezena, setPDezena] = useState('');
    const [sdezena, setSDezena] = useState('');

    function gerarDezena(min, max) {
        min = Math.ceil(0);
        max = Math.floor(99);
        const pnum = Math.floor(Math.random() * (max - min)) + min;
        const snum = Math.floor(Math.random() * (max - min)) + min;
        setPDezena(pnum);
        setSDezena(snum);
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
            <Text style={styles.titulo}>DUQUE DE DEZENA</Text>
            <View style={styles.containerBotao} >
            <TouchableOpacity
                style={styles.dezena}
                onPress={() => gerarDezena()}
            >
                <Text style={styles.textoBotao} >CLICK</Text>
            </TouchableOpacity>
            </View>
            <View>
                {avestruz.includes(pdezena) ? 
                <Imagem 
                texto="AVESTRUZ"
                img={require("../../Img/avestruz.jpg")} />
                : aguia.includes(pdezena) ? 
                <Imagem 
                texto="ÁGUIA"
                img={require("../../Img/aguia.jpg")} />
                : burro.includes(pdezena) ? 
                <Imagem 
                texto="BURRO"
                img={require("../../Img/burro.jpg")} />
                : borboleta.includes(pdezena) ? 
                <Imagem 
                texto="BORBOLETA"
                img={require("../../Img/borboleta.jpg")} />
                : cachorro.includes(pdezena) ? 
                <Imagem 
                texto="CACHORRO"
                img={require("../../Img/cachorro.jpg")} />
                : cabra.includes(pdezena) ? 
                <Imagem 
                texto="CABRA"
                img={require("../../Img/cabra.jpg")} />
                : carneiro.includes(pdezena) ? 
                <Imagem 
                texto="CARNEIRO"
                img={require("../../Img/carneiro.jpg")} />
                : camelo.includes(pdezena) ? 
                <Imagem 
                texto="CAMELO"
                img={require("../../Img/camelo.jpg")} />
                : cobra.includes(pdezena) ? 
                <Imagem 
                texto="COBRA"
                img={require("../../Img/cobra.jpg")} />
                : coelho.includes(pdezena) ? 
                <Imagem 
                texto="COELHO"
                img={require("../../Img/coelho.jpg")} />
                : cavalo.includes(pdezena) ? 
                <Imagem 
                texto="CAVALO"
                img={require("../../Img/cavalo.jpg")} />
                : elefante.includes(pdezena) ? 
                <Imagem 
                texto="ELEFANTE"
                img={require("../../Img/elefante.jpg")} />
                : galo.includes(pdezena) ? 
                <Imagem 
                texto="GALO"
                img={require("../../Img/galo.jpg")} />
                : gato.includes(pdezena) ? 
                <Imagem 
                texto="GATO"
                img={require("../../Img/gato.jpg")} />
                : jacare.includes(pdezena) ? 
                <Imagem 
                texto="JACARÉ"
                img={require("../../Img/jacare.jpg")} />
                : leao.includes(pdezena) ? 
                <Imagem 
                texto="LEÃO"
                img={require("../../Img/leao.jpg")} />
                : macaco.includes(pdezena) ? 
                <Imagem 
                texto="MACACO"
                img={require("../../Img/macaco.jpg")} />
                : porco.includes(pdezena) ? 
                <Imagem 
                texto="PORCO"
                img={require("../../Img/porco.jpg")} />
                : pavao.includes(pdezena) ? 
                <Imagem 
                texto="PAVÃO"
                img={require("../../Img/pavao.jpg")} />
                : peru.includes(pdezena) ? 
                <Imagem 
                texto="PERU"
                img={require("../../Img/peru.jpg")} />
                : touro.includes(pdezena) ? 
                <Imagem 
                texto="TOURO"
                img={require("../../Img/touro.jpg")} />
                : tigre.includes(pdezena) ? 
                <Imagem 
                texto="TIGRE"
                img={require("../../Img/tigre.jpg")} />
                : urso.includes(pdezena) ? 
                <Imagem 
                texto="URSO"
                img={require("../../Img/urso.jpg")} />
                : veado.includes(pdezena) ? 
                <Imagem 
                texto="VEADO"
                img={require("../../Img/veado.jpg")} />
                : vaca.includes(pdezena) ? 
                <Imagem 
                texto="VACA"
                img={require("../../Img/vaca.jpg")} />
                : null }
                {
                    pdezena === "" ? <Text></Text> : 
                    pdezena <= 9 ?
                        <Text style={styles.dezenas} >{'0' + pdezena}</Text>
                        :
                        <Text style={styles.dezenas} >{pdezena}</Text>
                }
                {avestruz.includes(sdezena) ? 
                <Imagem 
                texto="AVESTRUZ"
                img={require("../../Img/avestruz.jpg")} />
                : aguia.includes(sdezena) ? 
                <Imagem 
                texto="ÁGUIA"
                img={require("../../Img/aguia.jpg")} />
                : burro.includes(sdezena) ? 
                <Imagem 
                texto="BURRO"
                img={require("../../Img/burro.jpg")} />
                : borboleta.includes(sdezena) ? 
                <Imagem 
                texto="BORBOLETA"
                img={require("../../Img/borboleta.jpg")} />
                : cachorro.includes(sdezena) ? 
                <Imagem 
                texto="CACHORRO"
                img={require("../../Img/cachorro.jpg")} />
                : cabra.includes(sdezena) ? 
                <Imagem 
                texto="CABRA"
                img={require("../../Img/cabra.jpg")} />
                : carneiro.includes(sdezena) ? 
                <Imagem 
                texto="CARNEIRO"
                img={require("../../Img/carneiro.jpg")} />
                : camelo.includes(sdezena) ? 
                <Imagem 
                texto="CAMELO"
                img={require("../../Img/camelo.jpg")} />
                : cobra.includes(sdezena) ? 
                <Imagem 
                texto="COBRA"
                img={require("../../Img/cobra.jpg")} />
                : coelho.includes(sdezena) ? 
                <Imagem 
                texto="COELHO"
                img={require("../../Img/coelho.jpg")} />
                : cavalo.includes(sdezena) ? 
                <Imagem 
                texto="CAVALO"
                img={require("../../Img/cavalo.jpg")} />
                : elefante.includes(sdezena) ? 
                <Imagem 
                texto="ELEFANTE"
                img={require("../../Img/elefante.jpg")} />
                : galo.includes(sdezena) ? 
                <Imagem 
                texto="GALO"
                img={require("../../Img/galo.jpg")} />
                : gato.includes(sdezena) ? 
                <Imagem 
                texto="GATO"
                img={require("../../Img/gato.jpg")} />
                : jacare.includes(sdezena) ? 
                <Imagem 
                texto="JACARÉ"
                img={require("../../Img/jacare.jpg")} />
                : leao.includes(sdezena) ? 
                <Imagem 
                texto="LEÃO"
                img={require("../../Img/leao.jpg")} />
                : macaco.includes(sdezena) ? 
                <Imagem 
                texto="MACACO"
                img={require("../../Img/macaco.jpg")} />
                : porco.includes(sdezena) ? 
                <Imagem 
                texto="PORCO"
                img={require("../../Img/porco.jpg")} />
                : pavao.includes(sdezena) ? 
                <Imagem 
                texto="PAVÃO"
                img={require("../../Img/pavao.jpg")} />
                : peru.includes(sdezena) ? 
                <Imagem 
                texto="PERU"
                img={require("../../Img/peru.jpg")} />
                : touro.includes(sdezena) ? 
                <Imagem 
                texto="TOURO"
                img={require("../../Img/touro.jpg")} />
                : tigre.includes(sdezena) ? 
                <Imagem 
                texto="TIGRE"
                img={require("../../Img/tigre.jpg")} />
                : urso.includes(sdezena) ? 
                <Imagem 
                texto="URSO"
                img={require("../../Img/urso.jpg")} />
                : veado.includes(sdezena) ? 
                <Imagem 
                texto="VEADO"
                img={require("../../Img/veado.jpg")} />
                : vaca.includes(sdezena) ? 
                <Imagem 
                texto="VACA"
                img={require("../../Img/vaca.jpg")} />
                : null }
                {
                    sdezena === "" ? <Text></Text> : 
                    sdezena <= 9 ?
                        <Text style={styles.dezenas} >{'0' + sdezena}</Text>
                        :
                        <Text style={styles.dezenas} >{sdezena}</Text>
                }
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
  dezenas: {
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

export default DuqueDezena;
