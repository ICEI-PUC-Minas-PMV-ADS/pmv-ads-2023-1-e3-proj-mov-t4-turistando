import Cabecalho from '../components/Cabecalho';
import Contatos from '../components/Contatos';

import {useNavigation} from '@react-navigation/native';

const App = () => {

  const navigation = useNavigation();
  
  return (
    <>
     <Cabecalho 
    title={'Contatos para agendamento'}
    goBack= {() => navigation.goBack()}
    /> 
     <Contatos 
    titulo = {'(XX) 00000-0000'}
    subtitulo = {'Telefone'}
    icone = {'phone-classic'}
    />
    <Contatos 
    titulo = {'(XX) 00000-0000'}
    subtitulo = {'WhatsApp'} 
    icone = {'whatsapp'}
    />
    <Contatos 
    titulo = {'@ PerfilEstabelecimento'}
    subtitulo = {'Facebook'}
    icone = {'facebook'}
    />
    <Contatos 
    titulo = {'@ PerfilEstabelecimento'}
    subtitulo = {'Twitter'}
    icone = {'twitter'}
    />
    <Contatos 
    titulo = {'@ PerfilEstabelecimento'}
    subtitulo = {'Instagram'}
    icone = {'instagram'}
    />
    </>

  );

};



export default App;