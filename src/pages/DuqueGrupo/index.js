import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Imagem from "../../components/Imagem";
import Header from "../../components/Header";

const DuqueGrupo = () => {

  const [pgrupo, setPGrupo] = useState('');
  const [sgrupo, setSGrupo] = useState('');

  function gerarGrupo() {
    let pnum = Math.floor(Math.random() * 25);
    let snum = Math.floor(Math.random() * 25)
    setPGrupo(pnum);
    setSGrupo(snum);
  }

  return (
    <>
    <Header />
    <View style={styles.container} >
      <ScrollView 
      showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titulo}>DUQUE DE GRUPO</Text>
        <View style={styles.containerBotao} >
          <TouchableOpacity
            style={styles.dezena}
            onPress={() => gerarGrupo()}
          >
            <Text style={styles.textoBotao} >CLICK</Text>
          </TouchableOpacity>
          <View>
            {pgrupo === 0 ?
              <Imagem 
              texto="AVESTRUZ"
              img={require("../../Img/avestruz.jpg")}
              />
              :
              pgrupo === 1 ?
              <Imagem 
              texto="ÁGUIA"
              img={require("../../Img/aguia.jpg")}
              />
              :
              pgrupo === 2 ?
              <Imagem 
              texto="BURRO"
              img={require("../../Img/burro.jpg")}
              />
              :
              pgrupo === 3 ?
              <Imagem 
              texto="BORBOLETA"
              img={require("../../Img/borboleta.jpg")}
              />
              :
              pgrupo === 4 ?
              <Imagem 
              texto="CACHORRO"
              img={require("../../Img/cachorro.jpg")}
              />
              :
              pgrupo === 5 ?
              <Imagem 
              texto="CABRA"
              img={require("../../Img/cabra.jpg")}
              />
              :
              pgrupo === 6 ?
              <Imagem 
              texto="CARNEIRO"
              img={require("../../Img/carneiro.jpg")}
              />
              :
              pgrupo === 7 ?
              <Imagem 
              texto="CAMELO"
              img={require("../../Img/camelo.jpg")}
              />
              :
              pgrupo === 8 ?
              <Imagem 
              texto="COBRA"
              img={require("../../Img/cobra.jpg")}
              />
              :
              pgrupo === 9 ?
              <Imagem 
              texto="COELHO"
              img={require("../../Img/coelho.jpg")}
              />
              :
              pgrupo === 10 ?
              <Imagem 
              texto="CAVALO"
              img={require("../../Img/cavalo.jpg")}
              />
              :
              pgrupo === 11 ?
              <Imagem 
              texto="ELEFANTE"
              img={require("../../Img/elefante.jpg")}
              />
              :
              pgrupo === 12 ?
              <Imagem 
              texto="GALO"
              img={require("../../Img/galo.jpg")}
              />
              :
              pgrupo === 13 ?
              <Imagem 
              texto="GATO"
              img={require("../../Img/gato.jpg")}
              />
              :
              pgrupo === 14 ?
              <Imagem 
              texto="JACARÉ"
              img={require("../../Img/jacare.jpg")}
              />
              :
              pgrupo === 15 ?
              <Imagem 
              texto="LEÃO"
              img={require("../../Img/leao.jpg")}
              />
              :
              pgrupo === 16 ?
              <Imagem 
              texto="MACACO"
              img={require("../../Img/macaco.jpg")}
              />
              :
              pgrupo === 17 ?
              <Imagem 
              texto="PORCO"
              img={require("../../Img/porco.jpg")}
              />
              :
              pgrupo === 18 ?
              <Imagem 
              texto="PAVÃO"
              img={require("../../Img/pavao.jpg")}
              />
              :
              pgrupo === 19 ?
              <Imagem 
              texto="PERU"
              img={require("../../Img/peru.jpg")}
              />
              :
              pgrupo === 20 ?
              <Imagem 
              texto="TOURO"
              img={require("../../Img/touro.jpg")}
              />
              :
              pgrupo === 21 ?
              <Imagem 
              texto="TIGRE"
              img={require("../../Img/tigre.jpg")}
              />
              :
              pgrupo === 22 ?
              <Imagem 
              texto="URSO"
              img={require("../../Img/urso.jpg")}
              />
              :
              pgrupo === 23 ?
              <Imagem 
              texto="VEADO"
              img={require("../../Img/veado.jpg")}
              />
              :
              pgrupo === 24 ?
              <Imagem 
              texto="VACA"
              img={require("../../Img/vaca.jpg")}
              />
              :
              null
            }
            <View>
            {pgrupo === "" ? <Text></Text> : <Text style={styles.dezenas} >{pgrupo + 1}</Text>}
            </View>
            {sgrupo === 0 ?
              <Imagem 
              texto="AVESTRUZ"
              img={require("../../Img/avestruz.jpg")}
              />
              :
              sgrupo === 1 ?
              <Imagem 
              texto="ÁGUIA"
              img={require("../../Img/aguia.jpg")}
              />
              :
              sgrupo === 2 ?
              <Imagem 
              texto="BURRO"
              img={require("../../Img/burro.jpg")}
              />
              :
              sgrupo === 3 ?
              <Imagem 
              texto="BORBOLETA"
              img={require("../../Img/borboleta.jpg")}
              />
              :
              sgrupo === 4 ?
              <Imagem 
              texto="CACHORRO"
              img={require("../../Img/cachorro.jpg")}
              />
              :
              sgrupo === 5 ?
              <Imagem 
              texto="CABRA"
              img={require("../../Img/cabra.jpg")}
              />
              :
              sgrupo === 6 ?
              <Imagem 
              texto="CARNEIRO"
              img={require("../../Img/carneiro.jpg")}
              />
              :
              sgrupo === 7 ?
              <Imagem 
              texto="CAMELO"
              img={require("../../Img/camelo.jpg")}
              />
              :
              sgrupo === 8 ?
              <Imagem 
              texto="COBRA"
              img={require("../../Img/cobra.jpg")}
              />
              :
              sgrupo === 9 ?
              <Imagem 
              texto="COELHO"
              img={require("../../Img/coelho.jpg")}
              />
              :
              sgrupo === 10 ?
              <Imagem 
              texto="CAVALO"
              img={require("../../Img/cavalo.jpg")}
              />
              :
              sgrupo === 11 ?
              <Imagem 
              texto="ELEFANTE"
              img={require("../../Img/elefante.jpg")}
              />
              :
              sgrupo === 12 ?
              <Imagem 
              texto="GALO"
              img={require("../../Img/galo.jpg")}
              />
              :
              sgrupo === 13 ?
              <Imagem 
              texto="GATO"
              img={require("../../Img/gato.jpg")}
              />
              :
              sgrupo === 14 ?
              <Imagem 
              texto="JACARÉ"
              img={require("../../Img/jacare.jpg")}
              />
              :
              sgrupo === 15 ?
              <Imagem 
              texto="LEÃO"
              img={require("../../Img/leao.jpg")}
              />
              :
              sgrupo === 16 ?
              <Imagem 
              texto="MACACO"
              img={require("../../Img/macaco.jpg")}
              />
              :
              sgrupo === 17 ?
              <Imagem 
              texto="PORCO"
              img={require("../../Img/porco.jpg")}
              />
              :
              sgrupo === 18 ?
              <Imagem 
              texto="PAVÃO"
              img={require("../../Img/pavao.jpg")}
              />
              :
              sgrupo === 19 ?
              <Imagem 
              texto="PERU"
              img={require("../../Img/peru.jpg")}
              />
              :
              sgrupo === 20 ?
              <Imagem 
              texto="TOURO"
              img={require("../../Img/touro.jpg")}
              />
              :
              sgrupo === 21 ?
              <Imagem 
              texto="TIGRE"
              img={require("../../Img/tigre.jpg")}
              />
              :
              sgrupo === 22 ?
              <Imagem 
              texto="URSO"
              img={require("../../Img/urso.jpg")}
              />
              :
              sgrupo === 23 ?
              <Imagem 
              texto="VEADO"
              img={require("../../Img/veado.jpg")}
              />
              :
              sgrupo === 24 ?
              <Imagem 
              texto="VACA"
              img={require("../../Img/vaca.jpg")}
              />
              :
              null
            }
          </View>
          <View>
          {sgrupo === "" ? <Text></Text> : <Text style={styles.dezenas} >{sgrupo + 1}</Text>}
          </View>
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

export default DuqueGrupo;
