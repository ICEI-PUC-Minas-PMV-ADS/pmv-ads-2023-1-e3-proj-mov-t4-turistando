import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const Cabecalho = ({title}) => (
  
    <Appbar.Header style={styles.cabecalho}>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title = {title} />
    </Appbar.Header>

);  

const styles = StyleSheet.create({

  cabecalho: {
    backgroundColor: '#cbf5c7',
  },

});


export default Cabecalho;