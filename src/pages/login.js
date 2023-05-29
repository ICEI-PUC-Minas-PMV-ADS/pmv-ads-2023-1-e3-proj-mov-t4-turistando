import React, { useState } from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Container from '../components/container';
import Body from '../components/body';
import Input from '../components/input';
import Cabecalho from '../components/cabecalho';
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

      <Cabecalho title = { 'Login' }/>

      <View style = {styles.header}>
    
      </View>

      <Body>

        <Input
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          left = {<TextInput.Icon name = "account" color = "black"/>}
        />

        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={text => setPassoword(text)}
          left = {<TextInput.Icon name = "onepassword" color = "black"/>}
        />

          <Button 
            style = {styles.button}
            color="#cbf5c7"
            mode = "contained" 
            onPress = {handleLogin}>
            Login
          </Button>

          <Button 
            style = {styles.button}
            mode = "contained"
            color="#cbf5c7" 
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