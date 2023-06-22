import * as React from 'react';
import {ScrollView } from 'react-native';

import Cabecalho from '../components/Cabecalho';
import BodyPolitica from '../components/BodyEventos';

import {useNavigation} from '@react-navigation/native';


const Politica = () => {

  const navigation = useNavigation();
  
  return (

    <>
    <Cabecalho 
    title={'Política de Privacidade'}
    goBack= {() => navigation.goBack()}
    /> 
    

<ScrollView>
    <BodyPolitica
           foto={{ uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/826b31b9a3f597a0f6a1f3560bade74a", }}
           nome={"Politica de Privacidade Turistando"}
           texto = 
           {` A privacidade dos nossos usuários é extremamente importante para nós. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e compartilhamos as informações pessoais dos usuários que utilizam o aplicativo Turistando. Ao utilizar nosso aplicativo, você concorda com as práticas descritas nesta política.

1. Informações coletadas:
1.1 Coletamos as informações fornecidas pelos usuários no momento do cadastro, como nome, endereço de e-mail e informações de contato.
1.2 Também podemos coletar informações sobre as atividades realizadas no aplicativo, como pesquisas de destinos, itinerários criados e avaliações de locais visitados.
1.3 Utilizamos cookies e tecnologias similares para coletar informações sobre a utilização do aplicativo e melhorar a experiência do usuário.

2. Uso das informações:
2.1 Utilizamos as informações coletadas para personalizar a experiência do usuário, fornecer serviços solicitados e enviar informações relevantes sobre destinos, ofertas especiais e atualizações do aplicativo.
2.2 As informações também são utilizadas para melhorar o funcionamento do aplicativo, realizar análises de dados e fornecer suporte ao usuário.
2.3 Não compartilhamos informações pessoais dos usuários com terceiros, exceto quando necessário para fornecer serviços solicitados ou quando exigido por lei.

3. Segurança das informações:
3.1 Implementamos medidas de segurança adequadas para proteger as informações pessoais dos usuários contra acesso não autorizado, alteração, divulgação ou destruição.
3.2 As informações são armazenadas em servidores seguros e acessíveis apenas por funcionários autorizados, sujeitos a obrigações de confidencialidade.

4. Acesso e atualização das informações:
4.1 Os usuários podem acessar e atualizar suas informações pessoais no aplicativo. Também é possível solicitar a exclusão das informações, sujeito a requisitos legais e contratuais.
4.2 Mantemos as informações dos usuários pelo tempo necessário para cumprir as finalidades descritas nesta Política de Privacidade, a menos que seja exigido ou permitido por lei o seu armazenamento por período mais longo.

5. Links para sites de terceiros:
5.1 O aplicativo Turistando pode conter links para sites de terceiros. Esta Política de Privacidade não se aplica a esses sites. Recomendamos que os usuários consultem as políticas de privacidade dos sites de terceiros antes de fornecerem suas informações pessoais.

6. Consentimento:
6.1 Ao utilizar o aplicativo Turistando, você consente com a coleta, uso, armazenamento e compartilhamento das informações pessoais de acordo com esta Política de Privacidade.

7. Alterações na Política de Privacidade:
7.1 Reservamos o direito de modificar esta Política de Privacidade a qualquer momento, sem aviso prévio. Recomendamos que você revise periodicamente as alterações realizadas.

Se você tiver alguma dúvida ou preocupação em relação a esta Política de Privacidade, entre em contato conosco através dos canais de suporte disponíveis. Agradecemos por confiar no aplicativo Turistando e estamos comprometidos em proteger sua privacidade durante sua experiência de viagem.
`} 
    botao={"Li e concordo com os termos de privacidade"}
            
    />

</ScrollView>
    
    </>
  );

};

export default Politica;

