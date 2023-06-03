import React, { useState } from "react";

import { StyleSheet, View, Alert, ImageBackground } from "react-native";

import { TextInput, Button } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import Body from "../components/body";
import Logo from "../components/logo";

import Input from "../components/input";

import { useUser } from "../context/UserContext";

import { login } from "../services/auth.services";
import Cabecalho from "../components/Cabecalho";

const Login = () => {
  const navigation = useNavigation();

  const { setSigned, setName } = useUser();

  const [email, setEmail] = useState("");

  const [password, setPassoword] = useState("");

  const handleLogin = () => {
    login({
      email: email,

      password: password,
    }).then((res) => {
      console.log(res);

      if (res && res.user) {
        setSigned(true);

        setName(res.user.name);
      } else {
        Alert.alert("Atenção", "Usuário ou senha inválidos.");
      }
    });
  };

  return (
    <>
      <Cabecalho
        style={styles.header}
        title={"Fazer Login"}
        goBack={() => navigation.goBack()}
      ></Cabecalho>

      <ImageBackground source={require('../assets/Turistando.png')} style={styles.view}/>
      <Body>
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="account" color="black" />}
        />

        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassoword(text)}
          left={<TextInput.Icon name="onepassword" color="black" />}
        />

        <Button
          style={styles.button}
          buttonColor="purple"
          mode="contained"
          onPress={handleLogin}
        >
          Login
        </Button>

        <Button
          style={styles.button}
          mode="contained"
          buttonColor="purple"
          onPress={() => navigation.navigate("Cadastro")}
        >
          Registrar
        </Button>
      </Body>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,

    color: "",
  },

  textHeader: {
    textAlign: "center",
  },

  header: {
    alignItems: "center",

    marginTop: 30,

    marginBottom: 12,
  },
  view: {
    
    alignItems:'center',
    width: 410,
    height: 230,
  },
});

export default Login;
