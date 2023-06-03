import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { register } from "../services/auth.services";

import Container from "../components/container";
import Body from "../components/body";
import Input from "../components/input";
import Cabecalho from "../components/Cabecalho";

const Cadastro = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = () => {
    register({
      name: name,

      email: email,

      password: password,

      phone: phone,
    }).then((res) => {
      console.log(res);

      if (res) {
        Alert.alert("Atenção", "Usuário Cadastrado com sucesso!", [
          { text: "OK", onPress: () => navigation.goBack() },
        ]);
      } else {
        Alert.alert(
          "Atenção",
          "Usuário não cadastrado! Tente novamente mais tarde"
        );
      }
    });
  };

  return (
    <Container>
      <Cabecalho
        style={styles.header}
        title={"Fazer Login"}
        goBack={() => navigation.goBack()}
      ></Cabecalho>
      <View style={styles.header}></View>

      <Body>
        <Input
          label="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
          left={<TextInput.Icon name="account" color="black" />}
        />

        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="email" color="black" />}
        />

        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassoword(text)}
          left={<TextInput.Icon name="onepassword" color="black" />}
        />

        <Input
          label="Número Telefone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          left={<TextInput.Icon name="card-account-phone" color="black" />}
        />

        <Button
          style={styles.button}
          mode="contained"
          buttonColor="purple"
          onPress={handleRegister}
        >
          Registrar
        </Button>

        <Button
          style={styles.button}
          mode="contained"
          buttonColor="purple"
          onPress={() => navigation.goBack()}
        >
          Cancelar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
  },

  textHeader: {
    textAlign: "center",
  },

  header: {
    alignItems: "center",

    marginTop: 30,

    marginBottom: 12,
  },
});

export default Cadastro;
