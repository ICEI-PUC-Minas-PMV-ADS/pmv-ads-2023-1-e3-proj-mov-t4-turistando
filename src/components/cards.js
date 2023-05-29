import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';


const Cards = () => (

<Card>
      <Card.Cover style={styles.img} source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/fbc0ce297522e2de5ad04cddbd3f9f7a' }}/>
</Card>

);



const styles = StyleSheet.create({
  img: {
    width: 400,
    heigth: 300,
  },

});


export default Cards;