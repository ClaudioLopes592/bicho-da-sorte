import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const Imagem = ({ texto, img }) => {
  return (
    <View style={styles.container} >
        <Image style={styles.imagem} source={img} />
      <Text style={styles.texto} >{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    imagem: {
        width: width - 40,
        height: width / (16/9),
        alignSelf: 'center',
        borderRadius: 20
    },
    texto: {
        position: 'absolute',
        color: 'white',
        fontSize: 25,
        padding: 20,
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10
    }
});

export default Imagem;
