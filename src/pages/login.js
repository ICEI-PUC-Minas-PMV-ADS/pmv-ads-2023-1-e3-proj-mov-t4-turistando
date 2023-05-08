import React, { useState } from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {TextInput, Button, Headline} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Container from '../components/container';
import Body from '../components/body';
import Input from '../components/input';
import Logo from '../components/logo';
import { useUser } from '../contexts/UserContext';
import { login } from '../services/auth.services';

const Login = () => {

  const navigation = useNavigation ();
  const {setSigned, setName} = useUser ();

  const [email, setEmail] = useState ('');
  const [password, setPassoword] = useState ('');

  const handleLogin = () => {

    login ({

      email: email,
      password: password

    }).then(res => {
      
      console.log(res);

      if (res && res.user) {

        setSigned (true);
        setName (res.user.name);

      } else {
        Alert.alert('Atenção', 'Usuário ou senha inválidos.');

      }
    })
  }

  return (
    <Container>

      <View style = {styles.header}>

      <Logo />
    
      </View>

      <Headline style = {styles.textHeader}> Turistando </Headline>

      <Body>

        <Input
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          left = {<TextInput.Icon name = "account" color = "#4a7b8c"/>}
        />

        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={text => setPassoword(text)}
          left = {<TextInput.Icon name = "onepassword" color = "#4a7b8c"/>}
        />

          <Button 
            style = {styles.button}
            color="#04334c"
            mode = "contained" 
            onPress = {handleLogin}>
            Login
          </Button>

          <Button 
            style = {styles.button}
            mode = "contained"
            color="#b7dae1" 
            onPress = {() => navigation.navigate ('Register')}>
            Registrar
          </Button>

      </Body>
    </Container>
  );
};

const styles = StyleSheet.create ({

  button:{
    marginBottom: 8,
    color: ''
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

export default Login;