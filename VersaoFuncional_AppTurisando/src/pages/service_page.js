import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Button, Headline } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

import Container from "../components/container";
import Body from "../components/body";
import Logo from "../components/logo";
import Cabecalho from "../components/Cabecalho";
import { useNavigation } from "@react-navigation/native";

const Servicos = () => {
    const navigation = useNavigation();
  function onPressHospital() {
    if (city == 1) {
      return Alert.alert("Escolha uma cidade");
    }
    if (city == 2) {
      return Alert.alert(
        "Hospital de Amor Macapá / R. Carlos Daniel, 456 / (96) 3312-6600"
      );
    }
    if (city == 3) {
      return Alert.alert(
        "Hospital e Pronto Socorro 28 de Agosto / Av. Mário Ypiranga, 1581 / (92) 3643-7100"
      );
    }
    if (city == 4) {
      return Alert.alert(
        "Emergencia Do Hospital Beneficente Potuguesa De Belém / R. Boaventura da Silva, 934-944 - Umarizal, Belém - PA, 66040-367 / (91) 3215-4444"
      );
    }
    if (city == 5) {
      return Alert.alert(
        "Hospital Santa Juliana / R. Alvorada, 806 / (68) 3212-4725"
      );
    }
    if (city == 6) {
      return Alert.alert(
        "Hospital Santa Marcelina / BR-364, Km 17 313 Zona Rural / (69) 3218-2200"
      );
    }
    if (city == 7) {
      return Alert.alert(
        "Medical Palmas / Sul Avenida LO11 Conj 02, Lote 02 2º andar Edifício Palmas Medical Center, 77015-558 / (63) 3236-1800"
      );
    }
    if (city == 8) {
      return Alert.alert(
        "Hospital São Luiz / Av. dos Sambaquis / (66) 99935-8719"
      );
    }
    if (city == 9) {
      return Alert.alert(
        "Hospital Monte Castelo / R. Antônio Cavour de Miranda, 357 - Monte Castelo, Teresina - PI, 64017-310 / (86) 3215-9124"
      );
    }
    if (city == 10) {
      return Alert.alert(
        "Hospital Universitário Walter Cantídio Bloco de Ambulatórios (Ilhas) / Rua Coronel Nunes de Melo, 1142 / (85) 3366-8376"
      );
    }
    if (city == 11) {
      return Alert.alert(
        "Hospital Universitário Onofre Lopes - HUOL/UFRN / Av. Nilo Peçanha, 620 / (84) 3342-5000"
      );
    }
    if (city == 12) {
      return Alert.alert(
        "Hospital Universitário Lauro Wanderley / R. Tabeliao Estanislau Eloy, 585 / (83) 3206-0600"
      );
    }
    if (city == 13) {
      return Alert.alert(
        "Hospital Geral de Recife / R. do Hospício, 563 / (81) 2123-4845"
      );
    }
    if (city == 14) {
      return Alert.alert(
        "Hospital Metropolitano de Alagoas / Av. Menino Marcelo, s/n / (82) 3373-9601"
      );
    }
    if (city == 15) {
      return Alert.alert(
        "Hospital Municipal Zona Norte Doutor Nestor Piva / Av. Maranhão, s/n / (79) 3236-2266"
      );
    }
    if (city == 16) {
      return Alert.alert(
        "Hospital Municipal de Madre de Deus / R. Dr. José Peroba, 275 / (71) 4105-1335"
      );
    }
    if (city == 17) {
      return Alert.alert(
        "Hospital e Pronto Socorro Municipal de Cuiabá / Av. Gen. Valle, 192 / (65) 3617-7801"
      );
    }
    if (city == 18) {
      return Alert.alert(
        "Hospital Regional Asa Norte / SMHN Q 2 - Asa Norte, Brasília - DF, 70710-100 / (61)2017-1900"
      );
    }
    if (city == 19) {
      return Alert.alert(
        "Hospital Memorial Batista do Centenário / R. T-42, 42 - St. Bueno, Goiânia - GO, 74210-350 / (62)3923-6100"
      );
    }
    if (city == 20) {
      return Alert.alert(
        "Hospital Regional de Mato Grosso do Sul / Av. Eng. Lutero Lopes, 36 / (67) 3378-2500"
      );
    }
    if (city == 21) {
      return Alert.alert(
        "Hospital Municipal Odilon Behrens / R. Formiga, 50 / (31) 3277-6199 --- Hospital Belo Horizonte / Av. Pres. Antônio Carlos, 1694 / (31) 3449-7000 "
      );
    }
    if (city == 22) {
      return Alert.alert(
        "Hospital Estadual de Urgência Emergência – HEUE / Av, R. Des. José Vicente, 1533 / (27) 3194-0101"
      );
    }
    if (city == 23) {
      return Alert.alert(
        "Hospital Municipal Rocha Maia / R. Gen. Severiano, 91 / (21) 2543-1608"
      );
    }
    if (city == 24) {
      return Alert.alert(
        "Autarquia Hospitalar Municipal Regional Central / R. Vitorino Carmilo, 717 / (11) 3667-2248"
      );
    }
    if (city == 25) {
      return Alert.alert(
        "Hospital de Clínicas / R. Gen. Carneiro, 181 / (41) 3360-1800"
      );
    }
    if (city == 26) {
      return Alert.alert(
        "Hospital Florianópolis / R. Santa Rita de Cássia, 1665 / (48) 3281-7800"
      );
    }
    if (city == 27) {
      return Alert.alert(
        "Hospital de Pronto Socorro de Porto Alegre / Largo Teodoro Herzl, s/nº / (51) 3289-7999"
      );
    }
    if (city == 28) {
      return Alert.alert(
        "Hospital Geral de Roraima – HGR / Av. Brg. Eduardo Gomes, 1364 / (95) 2121-0620"
      );
    }
  }

  const onPressPolice = () => {
    if (city == 1) {
      return alert("Escolha uma cidade");
    }
    if (city == 2) {
      return alert(
        "1ª Delegacia de Polícia Civil da Capital / R. Mateus Valente do Couto, 806 - Nova Esperança, Macapá - AP, 68900-640 . (96) 2101-2251"
      );
    }
    if (city == 3) {
      return alert(
        "1º DIP - Distrito Integrado de Polícia / Av. Duque de Caxias, 1928 - Praça 14 de Janeiro, Manaus - AM, 69020-140 . Telefone: (92) 3635-6373"
      );
    }
    if (city == 4) {
      return alert(
        "Polícia Civil do Est do Pará / Endereço: R. Avertano Rocha, 417 - Campina, Belém - PA, 66023-220 . (91) 3212-2022"
      );
    }
    if (city == 5) {
      return alert(
        "Delegacia de Polícia Civil da 2ª Regional / R. Vinte e Quatro de Janeiro, 185 - 6 de Agosto, Rio Branco - AC, 69901-150 . (68) 3224-2930"
      );
    }
    if (city == 6) {
      return alert(
        "Delegacia de Polícia Interestadual / Av. Gov. Jorge Teixeira - Nova Porto Velho, Porto Velho - RO, 76804-436 . (69) 3216-5598"
      );
    }
    if (city == 7) {
      return alert(
        "1°DP Policia Civil - Central De Flagrantes / Q. 201 Sul Avenida Joaquim Teotônio Segurado, 42-154 - Plano Diretor Sul, Palmas – TO . Telefone: (63) 3218-6873"
      );
    }
    if (city == 8) {
      return alert(
        "4° Distrito Policial da Polícia Civil / Av. 3, 65071-020 - Vinhais, São Luís - MA, 65071-020 . (98) 3218-6315"
      );
    }
    if (city == 9) {
      return alert(
        "Delegacia do 1° Distrito Policial / Rua Treze de Maio, 232 - Centro (Sul), Teresina - PI, 64001-150 . (86) 3216-5206"
      );
    }
    if (city == 10) {
      return alert(
        "Delegacia Geral da Polícia Civil / Rua do Rosário, 199 - Centro, Fortaleza - CE, 60055-090 .  (85) 3101-7300"
      );
    }
    if (city == 11) {
      return alert(
        "Primeiro Distrito Policial / Praça Sen. Guerra, 16 - Cidade Alta, Natal – RN . (84) 3232-2524"
      );
    }
    if (city == 12) {
      return alert(
        "Delegacia da Polícia Civil / Av. Hílton Souto Maior, S/N - Mangabeira, João Pessoa - PB, 58033-455 . (83) 3213-9017"
      );
    }
    if (city == 13) {
      return alert(
        "Delegacia de Polícia Civil do Espinheiro / R. Prof. Othon Paraíso, 343 - Torreão, Recife - PE, 52030-250 . (81) 3184-3376"
      );
    }
    if (city == 14) {
      return alert(
        "Delegacia do 1° Distrito da Capital / R. do Comércio, 620 - Centro, Maceió - AL, 57020-000 . (82) 3315-1272"
      );
    }
    if (city == 15) {
      return alert(
        "Delegacia de polícia em Aracaju, Sergipe / Endereço: R. Oscár Valois Galvão, 299 - Grageru, Aracaju - SE, 49027-220 . (79) 3194-3000"
      );
    }
    if (city == 16) {
      return alert(
        "Polícia Civil - 16ª DP / Endereço: Av. Prof. Magalhães Neto, 20 - Pituba, Salvador - BA, 41810-012 . (71) 3116-3118"
      );
    }
    if (city == 17) {
      return alert(
        "1° Delegacia de Polícia / Endereço: Av. Tenente Coronel Duarte, 1044 - Centro Sul, Cuiabá - MT, 78020-450 . (65) 3901-4839"
      );
    }
    if (city == 18) {
      return alert(
        "1ª Delegacia de Polícia Civil – PCDF / Endereço: Setor Policial, Sul, s/n - Asa Sul, Brasília - DF, 70297-400 .  (61) 3207-6332"
      );
    }
    if (city == 19) {
      return alert(
        "1° Delegacia Distrital de Polícia / Endereço: R. 66, 12 - St. Central, Goiânia - GO, 74055-070 . (62) 3201-2760"
      );
    }
    if (city == 20) {
      return alert(
        "01ª Delegacia de Polícia Civil / R. Padre João Crippa, 1581 - Centro, Campo Grande - MS, 79002-390. (67) 3312-5703"
      );
    }
    if (city == 21) {
      return alert(
        "Delegacia Polícia Civil / R. Outono, 239 - Carmo, Belo Horizonte - MG, 30310-020 . (31) 3284-5608"
      );
    }
    if (city == 22) {
      return alert(
        "Polícia Civil - 1ª Delegacia Regional de Vitória / R. Construtor Camilo Gianordoli, 553 - Horto, Vitória - ES, 29045-180 . (27) 3137-9025"
      );
    }
    if (city == 23) {
      return alert(
        "12ª Delegacia Policial – Copacabana / Rua Hilário de Gouvêia, 102 - Copacabana, Rio de Janeiro - RJ, 22040-020 . (21) 2332-7914"
      );
    }
    if (city == 24) {
      return alert(
        "Delegacia Geral de Polícia / Av. Thomas Edison - Barra Funda, São Paulo - SP, 01140-001 . (11) 3667-0405"
      );
    }
    if (city == 25) {
      return alert(
        "1° Distrito Policial / R. André de Barros, 671 - Centro, Curitiba - PR, 80010-080 . (41) 3326-3400"
      );
    }
    if (city == 26) {
      return alert(
        "1ª Delegacia de Policia Civil da Capital / Av. Pref. Osmar Cunha, 263 - Centro, Florianópolis - SC, 88015-100 . (48) 3251-5200"
      );
    }
    if (city == 27) {
      return alert(
        "1ª Delegacia de Polícia Civil / R. Riachuelo, 613 - Centro Histórico, Porto Alegre - RS, 90010-270 . (51) 3286-8456"
      );
    }
    if (city == 28) {
      return alert(
        "Polícia Civil do Estado de Roraima - Delegacia Geral / Cidade da Polícia Civil - Avenida Getúlio Vargas, 3859 (antigo 2098 - Canarinho, Boa Vista - RR, 69306-545 . (95) 4009-4462"
      );
    }
  };

  const onPressBank = () => {
    if (city == 1) {
      return alert("Escolha uma cidade");
    }
    if (city == 2) {
      return alert("Caixa / R São José, 2296 Letra A · (96) 3312-2301");
    }
    if (city == 3) {
      return alert(
        "Caixa Econômica Federal Ag Vitória-Régia / R. Barroso, 101 · (92) 3621-4614"
      );
    }
    if (city == 4) {
      return alert(
        "Caixa Econômica Federal / Av. Pres. Vargas, NUM 121 · (91) 3213-7300"
      );
    }
    if (city == 5) {
      return alert(
        "Caixa Econômica Federal / Av. Nações Unidas, NUM 2908 - Estação Experimental, Rio Branco – AC. (68) 2106-3250"
      );
    }
    if (city == 6) {
      return alert(
        "Caixa Econômica Federal / R. Alm. Barroso, Num 600 · (69) 2182-1350"
      );
    }
    if (city == 7) {
      return alert(
        "Caixa Econômica Federal / Q. 302 Norte Alameda 2, Lote 1 · (63) 2111-7100"
      );
    }
    if (city == 8) {
      return alert(
        "Caixa Econômica Federal / R do Sol, Praça Deodoro, 440 · (98) 3133-3100"
      );
    }
    if (city == 9) {
      return alert(
        "Caixa Econômica Federal / Av. Dom Severino, 2225 · (86) 3194-1500"
      );
    }
    if (city == 10) {
      return alert(
        "Caixa Econômica Federal / Rua Desembargador Leite Albuquerque, 1077 – Aldeota / 4004-0104"
      );
    }
    if (city == 11) {
      return alert(
        "Caixa Econômica Federal / Av. Ayrton Senna, 3501 · (84) 3004-1105"
      );
    }
    if (city == 12) {
      return alert(
        "Caixa Econômica Federal - Agência 0548 / Ed. da Justiça Federal - R. Orestes Lisboa, 480 · (83) 3214-1550"
      );
    }
    if (city == 13) {
      return alert(
        "Caixa Econômica Federal / Av. Conselheiro Rosa e Silva, 1492 · (81) 3194-4650"
      );
    }
    if (city == 14) {
      return alert(
        "Caixa Econômica Federal / Av. Durval de Góes Monteiro, 131 · (82) 3311-6000"
      );
    }
    if (city == 15) {
      return alert(
        "Caixa Econômica Federal / Av. Barão de Maruim, NUM 344 · (79) 3216-2050"
      );
    }
    if (city == 16) {
      return alert(
        "Caixa Econômica Federal / Av. Tancredo Neves, 2227 - Lj 16 · (71) 3480-5300"
      );
    }
    if (city == 17) {
      return alert(
        "Caixa Econômica Federal / TRT - Av. Historiador Rubens de Mendonça, 3355 · (65) 3362-4800"
      );
    }
    if (city == 18) {
      return alert(
        "Caixa Econômica Federal / SBS - Quadra 4 - Lotes 3/4 - Térreo · (61) 3212-9350"
      );
    }
    if (city == 19) {
      return alert(
        "Caixa Econômica Federal / Av. Perimetral Norte, 11226-11300 · (62) 3608-2450"
      );
    }
    if (city == 20) {
      return alert(
        "Caixa Econômica Federal / R. Treze de Maio, 2837 · (67) 2106-7600"
      );
    }
    if (city == 21) {
      return alert(
        "Caixa Econômica Federal / 22,9 km · Av. Pres. Antônio Carlos, 7636 · (31) 3448-3200"
      );
    }
    if (city == 22) {
      return alert(
        "Caixa Econômica Federal / Av. Mal. Campos, 1355 · (27) 3334-3300"
      );
    }
    if (city == 23) {
      return alert(
        "Caixa Econômica Federal / Suplementar Pela - R Das Marrecas, R. do Passeio, 20 - 9 Andar C Entrada · (21) 3980-3919"
      );
    }
    if (city == 24) {
      return alert(
        "Caixa Econômica Federal / Praça da Sé, 111 · (11) 3117-8100"
      );
    }
    if (city == 25) {
      return alert(
        "Caixa Econômica Federal / Praça Gen. Osório, NUM 319 · (41) 2112-7200"
      );
    }
    if (city == 26) {
      return alert(
        "Caixa Econômica Federal / R Felipe Schmidt, 249 ARS · (48) 2108-0400"
      );
    }
    if (city == 27) {
      return alert(
        "Caixa Econômica Federal - Agência Central / R. dos Andradas, 1000 · (51) 3205-6000"
      );
    }
    if (city == 28) {
      return alert(
        "Caixa Econômica Federal / Av. Amazonas, Nº 146 · (95) 3621-8200"
      );
    }
  };

  const onPressDrugstore = () => {
    if (city == 1) {
      return alert("Escolha uma cidade");
    }
    if (city == 2) {
      return alert(
        "Rede Farmácia Popular- Laguinho / Av. Ernestino Borges, 526 / (96) 3222-3301"
      );
    }
    if (city == 3) {
      return alert("Farmácia Popular / R. Topázio, 382-472  / (92) 99476-7388");
    }
    if (city == 4) {
      return alert(
        "Farmácia Popular / Avenida Dalva, 372, Marambaia - CEP 66615-850 / (91) 3224-9861."
      );
    }
    if (city == 5) {
      return alert("Drogaria Popular II / R. Sergipe, 188 / (68) 3213-5000");
    }
    if (city == 6) {
      return alert(
        "Drogaria Ultra Popular / Av. Jatuarana, 4521 / (69) 99321-2979"
      );
    }
    if (city == 7) {
      return alert(
        "Farmacia Dos Trabalhadores Popular De Palmas / Q. 307 Norte Alameda 19 / (63) 3224-5294"
      );
    }
    if (city == 8) {
      return alert(
        "Farmácia Popular / Av. Jailson Sousa Viana, 11 / (98) 3257-8732"
      );
    }
    if (city == 9) {
      return alert(
        "Farmácia Popular Teresina / Av. Barao De Castelo Branco, 1.616 – Cristo Rei – Teresina/PI – CEP:64016-850 / (86) 3234-1001"
      );
    }
    if (city == 10) {
      return alert(
        "Farmácia Popular / Av. Professor José Arthur de Carvalho, 1671 / (85) 98581-5759"
      );
    }
    if (city == 11) {
      return alert(
        "Farmácia Popular do Alecrim / Av. Pres. Bandeira, 648 / (84) 99679-0003"
      );
    }
    if (city == 12) {
      return alert(
        "Farmácia Popular do Brasil – Centro / Av. Dom Pedro II, 231 / (83) 3218-5058"
      );
    }
    if (city == 13) {
      return alert("Farmácia Popular / Av. Beberibe, 2031 / (81) 3444-8151");
    }
    if (city == 14) {
      return alert(
        "Farmácia Popular de Alagoas / R. Demócrito Gracindo, 368 / (82) 98183-5151"
      );
    }
    if (city == 15) {
      return alert(
        "Farmácia do Trabalhador do Bairro / Av. Hermes Fontes, 1707 / (79) 99962-1457"
      );
    }
    if (city == 16) {
      return alert(
        "Farmácia Popular / R. Sérgio de Carvalho, 24 / (11) 3283-3737"
      );
    }
    if (city == 17) {
      return alert(
        "Drogaria Ultra Popular – Cuiabá / Av. Fernando Corrêa da Costa, 1330 / (65) 3057-1080"
      );
    }
    if (city == 18) {
      return alert(
        "Drogaria Popular / SHCE Quadra 307, Bloco C Loja 23, SHCES / (61) 3233-0190"
      );
    }
    if (city == 19) {
      return alert("Drogaria Popular / R. Sen. Jaime / (62) 3932-1444");
    }
    if (city == 20) {
      return alert(
        "Farmácia Popular / R. Ana Luísa de Souza, 302 / (67) 3388-7082"
      );
    }
    if (city == 21) {
      return alert("Farmácia Popular / Av. Capim Branco, 36 / (31) 3386-4050");
    }
    if (city == 22) {
      return alert(
        "Farmacia Popular Capixaba ES / Av. Paulino Muller, 744 / (27) 99719-3517"
      );
    }
    if (city == 23) {
      return alert(
        "Farmácia Popular de Brás de Pina / Av. Arapogi, 320 / (21) 2260-6105"
      );
    }
    if (city == 24) {
      return alert("Farmacia Popular / Av. Vila Ema, 582 / (11) 2965-9735");
    }
    if (city == 25) {
      return alert(
        "Farmácia Preço Popular / R. Izaac Ferreira da Cruz, 3281 / (41) 3057-6058"
      );
    }
    if (city == 26) {
      return alert(
        "Farmácia Preço Popular / R. Felipe Schmidt, 652 / (48) 3225-8629"
      );
    }
    if (city == 27) {
      return alert(
        "Farmácia Preço Popular / Av. Borges de Medeiros, 539 / (51) 3225-0008"
      );
    }
    if (city == 28) {
      return alert(
        "Farmácia Popular Boa Vista / Avenida Sao Sebastiao, 1047 / (95) 3626-1374."
      );
    }
  };

  const onPressPhones = () => {
    alert(
      "Polícia militar (190) / SAMU (192) / Bombeiros (193) / Defesa civil (199), Atendimento à mulher (180), Denunciar violações dos direitos humanos (100)"
    );
  };
  const [city, setCity] = useState(1);
  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const Separator = () => <View style={styles.separator} />;
  return (
    <Container>
      <View style={styles.header}>
        <Cabecalho title={"Serviços"} goBack={() => navigation.goBack()} />
      </View>

      <Headline style={styles.textHeader}> Turistando </Headline>

      <Body>
        <Text style={styles.Body}>"Necessito de serviços publicos em..." </Text>
        <Picker
          ref={pickerRef}
          selectedValue={city}
          style={styles.Container}
          onValueChange={(itemValue) => setCity(itemValue)}
        >
          <Picker.Item label="Selecione a cidade" value="1" />
          <Picker.Item label="Macapá, AP" value="2" />
          <Picker.Item label="Manaus, AM" value="3" />
          <Picker.Item label="Belém, PA" value="4" />
          <Picker.Item label="Rio Branco, AC" value="5" />
          <Picker.Item label="Porto Velho, RO" value="6" />
          <Picker.Item label="Palmas, TO" value="7" />
          <Picker.Item label="São Luís, MA" value="8" />
          <Picker.Item label="Teresina, PI" value="9" />
          <Picker.Item label="Forlateza, CE" value="10" />
          <Picker.Item label="Natal, RN" value="11" />
          <Picker.Item label="João Pessoa, PB" value="12" />
          <Picker.Item label="Recife, PE" value="13" />
          <Picker.Item label="Maceió, AL" value="14" />
          <Picker.Item label="Aracajú, SE" value="15" />
          <Picker.Item label="Salvador, BA" value="16" />
          <Picker.Item label="Cuiabá, MT" value="17" />
          <Picker.Item label="Brasília, DF" value="18" />
          <Picker.Item label="Goiânia, GO" value="19" />
          <Picker.Item label="Campo Grande, MS" value="20" />
          <Picker.Item label="Belo Horizonte, MG" value="21" />
          <Picker.Item label="Vitória, ES" value="22" />
          <Picker.Item label="Rio de Janeiro, RJ" value="23" />
          <Picker.Item label="São Paulo, SP" value="24" />
          <Picker.Item label="Curitiba, PR" value="25" />
          <Picker.Item label="Florianópolis, SC" value="26" />
          <Picker.Item label="Porto Alegre, RS" value="27" />
          <Picker.Item label="Boa Vista, RR" value="28" />
        </Picker>
        <View style={styles.centeredView}>
          <Separator />
          <Button
            style={styles.button}
            textColor="white"
            mode="contained"
            buttonColor="purple"
            onPress={onPressHospital}
            accessibilityLabel="Clique para ver o endereço dos hospitais locais"
          >
            Hospital
          </Button>
          <Separator />
          <Button
            style={styles.button}
            textColor="white"
            mode="contained"
            buttonColor="purple"
            onPress={onPressPolice}
            accessibilityLabel="Clique para ver o endereço das delegacias locais"
          >
            Delegacia
          </Button>
          <Separator />
          <Button
            style={styles.button}
            textColor="white"
            mode="contained"
            buttonColor="purple"
            onPress={onPressBank}
            accessibilityLabel="Clique para acesso a agências bancárias"
          >
            Agência Bancária
          </Button>
          <Separator />
          <Button
            style={styles.button}
            textColor="white"
            mode="contained"
            buttonColor="purple"
            onPress={onPressPhones}
            accessibilityLabel="Clique para acesso a telefones úteis"
          >
            Telefones úteis
          </Button>
          <Separator />
          <Button
            style={styles.button}
            textColor="white"
            mode="contained"
            onPress={onPressDrugstore}
            accessibilityLabel="Clique para ver o endereço das farmácias e drogarias locais"
          >
            Farmácias
          </Button>
        </View>
      </Body>
    </Container>
  );
};
const styles = StyleSheet.create({
  centeredView: { justifyContent: "flex-start", alignItems: "center" },
  button: {
    backgroundColor: "purple",
    width: 200,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textHeader: { textAlign: "center" },
  header: {},
  separator: { margin: 10 },
});
export default Servicos;
