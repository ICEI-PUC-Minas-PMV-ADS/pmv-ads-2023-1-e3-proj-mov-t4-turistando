import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar} from 'react-native-paper';

const Cabecalho = ({title, goBack,children}) => {

  return (

    <Appbar.Header style={styles.cabecalho}>

  {        goBack &&
        <Appbar.BackAction onPress={goBack} />
  }
{children}
    <Appbar.Content title= {title} />
    </Appbar.Header>

  ); 
};

const styles = StyleSheet.create({
  cabecalho: {
    justifyContent:'space-between',
  backgroundColor: '#9CF591',
  
  },

}); 

export default Cabecalho;