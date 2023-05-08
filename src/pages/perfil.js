import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {TextInput, Button, Headline} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

import Container from '../components/container';
import Body from '../components/body';
import Input from '../components/input';
import Logo from '../components/logo';
import { getUser, updateUser, deleteUser } from '../services/user.account.services';

const Perfil = ({ route }) => {

  const navigation = useNavigation ();
  
  const [user, setUser] = useState ([]);
  const [name, setName] = useState (null);
  const [email, setEmail] = useState (null);
  const [password, setPassword] = useState (null);
  const [phone, setPhone] = useState (null);
  const [newPassword, setNewPassword] = useState (null);

  useEffect (() => {

    if (item) {
        setName(item.name);
        setEmail(item.email);
        setPassword(item.password);
        setPhone (item.phone);
      }
    }, [item]);

    const { item } = route.params ? route.params : {};

  const handleUpdate = () => {

    updateUser ({

      name: name,
      email: email,
      password: item.password,
      phone: phone,
      id: item.id

    }).then(res => {
      
        navigation.navigate('Painel');
    

      if(res){

        Alert.alert('Atenção', 'Usuário atualizado com sucesso!',[
          { text: "OK", onPress: () => navigation.navigate('Perfil') }
        ]);

      }else{

         Alert.alert('Atenção', 'Usuário não atualizado! Tente novamente mais tarde');
      }

    });
  }

  const handleDelete = () => {

    deleteUser ({

      id: item.id,

    }).then(res => {
      
      console.log(res);
    

      if(res){

        Alert.alert('Atenção', 'Usuário excluído com sucesso!',[
          { text: "OK", onPress: () => navigation.goBack() }
        ]);

      }else{

         Alert.alert('Atenção', 'Usuário não excluído! Tente novamente mais tarde');
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
          value={null}
          secureTextEntry
          onChangeText={text => setPassword(text)}
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
            onPress = {() => {handleUpdate();
                navigation.navigate('Painel');
            }}>
            Salvar
          </Button>

          <Button 
            style = {styles.button}
            mode = "contained"
            color="#b7dae1"  
            onPress = {handleDelete}>
            Excluir
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

export default Perfil;