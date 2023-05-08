import React, { useState } from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {TextInput, Button, Headline} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

import Container from '../components/container';
import Body from '../components/body';
import Input from '../components/input';
import Logo from '../components/logo';
import { register } from '../services/auth.services';

const Register = () => {

  const navigation = useNavigation ();
  
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassoword] = useState ('');
  const [phone, setPhone] = useState ('');

  const handleRegister = () => {

    register ({

      name: name,
      email: email,
      password: password,
      phone: phone

    }).then(res => {
      
      console.log(res);
    

      if(res){

        Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!',[
          { text: "OK", onPress: () => navigation.goBack() }
        ]);

      }else{

         Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde');
      }

    });
  }

  return (
    <Container>

      <View style = {styles.header}>

      <Logo />
    
      </View>

      <Headline style = {styles.textHeader}> Turistando </Headline>

      <Body>

        <Input
          label="Nome"
          value={name}
          onChangeText={text => setName(text)}
          left = {<TextInput.Icon name = "account" color = "#4a7b8c"/>}
        />

        <Input
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          left = {<TextInput.Icon name = "email" color = "#4a7b8c"/>}
        />

        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={text => setPassoword(text)}
          left = {<TextInput.Icon name = "onepassword" color = "#4a7b8c"/>}
        />

        <Input
          label="Número Telefone"
          value={phone}
          onChangeText={text => setPhone(text)}
          left = {<TextInput.Icon name = "card-account-phone" color = "#4a7b8c"/>}
        />

          <Button 
            style = {styles.button}
            mode = "contained"
            color="#04334c" 
            onPress = {handleRegister}>
            Registrar
          </Button>

          <Button 
            style = {styles.button}
            mode = "contained"
            color="#b7dae1"  
            onPress = {() => navigation.goBack ()}>
            Cancelar
          </Button>

      </Body>
    </Container>
  );
};

const styles = StyleSheet.create ({
  button:{
    marginBottom: 8,
  },

  textHeader:{
    textAlign:'center'
  },

  header:{
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12
  }

});

export default Register;