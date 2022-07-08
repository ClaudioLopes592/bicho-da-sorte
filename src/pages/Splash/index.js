import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';
import cavalo from "../../../assets/cavalo.json";
import { CommonActions, useNavigation } from "@react-navigation/native";


const Splash = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
     navigation.dispatch(CommonActions.reset({
       index: 0,
       routes: [{name: "Inicio"}]
     }))
    }, 4000)
  }, [])

  return (
    <View style={styles.container} >
      <LottieView 
      source={cavalo}
      autoPlay
      loop
      resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Splash;
