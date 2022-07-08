import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const Home = ({ navigation }) => {

  return (
    <View style={styles.container} >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titulo} >SELECIONE UMA OPÇÃO</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Grupo")}
        >
          <Text style={styles.textoBotao} >GRUPO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Milhar")}
        >
          <Text style={styles.textoBotao}>MILHAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Centena")}
        >
          <Text style={styles.textoBotao}>CENTENA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Dezena")}
        >
          <Text style={styles.textoBotao}>DEZENA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("DuqueDezena")}
        >
          <Text style={styles.textoBotao}>DUQUE DE DEZENA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("TernoDezena")}
        >
          <Text style={styles.textoBotao}>TERNO DE DEZENA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("DuqueGrupo")}
        >
          <Text style={styles.textoBotao}>DUQUE DE GRUPO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("TernoGrupo")}
        >
          <Text style={styles.textoBotao}>TERNO DE GRUPO</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a9a9a9",
    justifyContent: "center",
    alignItems: "center"
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#53585C",
    marginTop: 40,
    textAlign: "center"
  },
  botao: {
    width: 300,
    height: 50,
    backgroundColor: "#53585C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 20
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#A8A897"
  }
});

export default Home;
