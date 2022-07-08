import React from "react";
import { View, Text, StatusBar, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons"

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 12 : 36;

const Header = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container} >
      <View style={styles.conteudo} >
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate("Home")}
        >
          <FontAwesome name="chevron-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.texto} >Bicho da Sorte</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5C5353",
    marginTop: statusBarHeight
  },
  conteudo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20
  },
  texto: {
    fontSize: 18,
    color: "#fff"
  }
});

export default Header;
