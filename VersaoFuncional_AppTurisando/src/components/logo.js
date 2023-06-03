import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Button } from "react-native-paper";

const Logo = () => {
  const navigation = useNavigation();
  return (
    <Button
      textColor="white"
      icon={"alpha-t-box-outline"}
      onPress={() => navigation.navigate("Home")}
    >
      Turistando
    </Button>
  );
};



export default Logo;
