import { View } from 'react-native';
import { Card } from 'react-native-paper';

const Banner = () => {
  return (
    <View
      style={{
        backgroundColor: '#D3C4D1',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius:1,
      }}>
      <Card.Cover source={{ uri: 'https://picsum.photos/700/200' }} />
      
    </View>
  );
};

export default Banner;