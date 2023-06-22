import * as React from 'react';
import {ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Cabecalho from '../components/Cabecalho';
import BodyTermos from '../components/BodyEventos';




const Termos = () => {

  const navigation = useNavigation();
  
  return (

    <>
    <Cabecalho 
    title={'Termos de Uso'}
    goBack= {() => navigation.goBack()}
    /> 

<ScrollView>
    <BodyTermos
           foto={{ uri: "https://locusiuris.com.br/wp-content/uploads/2020/11/termos-uso.png", }}
           nome={"Termos de uso Turistando"}
           texto = {`Bem-vindo ao aplicativo Turistando! Antes de usar nosso serviço, pedimos que você leia atentamente estes Termos de Uso para garantir que você entenda e concorde com todas as condições. Ao utilizar o aplicativo Turistando, você concorda em cumprir estes termos e todas as leis e regulamentos aplicáveis. Se você não concordar com estes termos, não utilize nosso aplicativo.

1. Uso do Aplicativo:
1.1 O aplicativo Turistando é destinado apenas para fins de informação e planejamento de viagens. Você concorda em utilizar o aplicativo de acordo com todas as leis e regulamentos locais, nacionais e internacionais aplicáveis.
1.2 Você é responsável por garantir a segurança e a confidencialidade das suas credenciais de acesso ao aplicativo. Qualquer atividade realizada em sua conta é de sua inteira responsabilidade.

2. Propriedade Intelectual:
2.1 Todo o conteúdo presente no aplicativo Turistando, incluindo textos, imagens, gráficos, logotipos, vídeos e software, é de propriedade exclusiva da Turistando ou de seus parceiros e fornecedores. Você concorda em não copiar, modificar, reproduzir, distribuir ou explorar qualquer parte do conteúdo sem autorização prévia por escrito.

3. Responsabilidades do Usuário:
3.1 Você é responsável por todas as informações fornecidas ao utilizar o aplicativo Turistando. Certifique-se de que todas as informações fornecidas sejam precisas e atualizadas.
3.2 Você concorda em utilizar o aplicativo de forma ética e responsável, respeitando os direitos de terceiros e não realizando atividades ilegais ou prejudiciais.

4. Limitação de Responsabilidade:
4.1 O aplicativo Turistando é fornecido "no estado em que se encontra", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos a precisão, confiabilidade ou integridade das informações presentes no aplicativo.
4.2 A Turistando não se responsabiliza por danos diretos, indiretos, incidentais, especiais ou consequentes decorrentes do uso ou impossibilidade de uso do aplicativo.

5. Privacidade:
5.1 Ao utilizar o aplicativo Turistando, você concorda com nossa Política de Privacidade, que descreve como coletamos, usamos e compartilhamos seus dados pessoais.

6. Modificações nos Termos de Uso:
6.1 Reservamos o direito de modificar estes Termos de Uso a qualquer momento, sem aviso prévio. Recomendamos que você revise periodicamente os termos atualizados.
6.2 Ao continuar a utilizar o aplicativo Turistando após a modificação dos termos, você estará concordando com as alterações realizadas.

Se você tiver alguma dúvida ou preocupação em relação a estes Termos de Uso, entre em contato conosco através dos canais de suporte disponíveis. Obrigado por escolher o aplicativo Turistando e aproveite sua experiência de viagem!
`} 
    botao={"Li e aceito os termos de uso"}
            
    />

</ScrollView>
    
    </>
  );

};

export default Termos;

