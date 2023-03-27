# Plano de Testes de Software

Os casos de teste são planejados para testar se os requisitos funcionais e não funcionais são atendidos, garantindo assim a qualidade do software e satisfação dos clientes e stakeholders no geral.
Os testes somente são realizados à medida que a implementação é feita, ou ao final das mesmas. Portanto, apenas o planejamento é apresentado nessa etapa do processo de desenvolvimento do software.

|Caso de Teste|CT-001|
|-|-|
|Requisitos que motivaram o teste:|**RF-002:** O app fornecerá a funcionalidade para autenticação do usuário|
|Objetivo do teste:|Averiguar que pessoas autorizadas tenham acesso ao sistema.|
|Condição para aprovado:|Inseridos usuário e senha, o login deve ser feito.|
|Resultado:||
|Observação: ||	

|Caso de Teste|CT-002|
|-|-|
|Requisitos que motivaram o teste:| **RF-002:** O app fornecerá a funcionalidade para autenticação do usuário |
|Objetivo do teste:| Averiguar que somente pessoas autorizadas tenham acesso ao sistema.|
|Condição para aprovado:| Inseridos usuário e senha errados, o usuário não deve acessar o sistema.|
|Resultado:||
|Observação: ||	

|Caso de Teste|CT-003|
|-|-|
|Requisitos que motivaram o teste:| **RF-003:** O app deverá fornecer informações sobre os pontos turísticos da cidade. **RF-005:** O app deve apresentar, para cada anúncio, informações como um breve descritivo, título, imagem, dados de contato e valor (aproximadamente).|
|Objetivo do teste:| Averiguar que as informações sobre os pontos turísticos definidas como básicas no backlog do produto sejam requisitos mínimos para que um ponto seja cadastrado no sistema.|
|Condição para aprovado:| Todos os pontos turísticos só podem ser cadastrados caso possuam nome, localização, descrição, avaliação dos usuários (ou um campo em branco informando que o local ainda não foi avaliado)|
|Resultado:||
|Observação: ||	


|Caso de Teste|CT-004|
|-|-|
|Requisitos que motivaram o teste:| **RF-003:** O app deverá fornecer informações sobre os pontos turísticos da cidade. **RF-005:** O app deve apresentar, para cada anúncio, informações como um breve descritivo, título, imagem, dados de contato e valor (aproximadamente).|
|Objetivo do teste:| Averiguar que as informações sobre os pontos turísticos definidas como básicas no backlog do produto estejam disponíveis.|
|Condição para aprovado:| Ao menos 3 usuários testem o sistema e consigam visualizar todas as informações básicas.|
|Resultado:||
|Observação: ||	

|Caso de Teste|CT-005|
|-|-|
|Requisitos que motivaram o teste:| **RF-004:** O programa deve possibilitar o compartilhamento de localidades por redes sociais.|
|Objetivo do teste:|Averiguar se o compartilhamento em redes sociais funciona.|
|Condição para aprovado:| Ao menos três usuários escolherão três pontos turísticos diferentes e farão as postagens em suas redes sociais: Facebook e Instagram.|
|Resultado:||
|Observação: ||	

|Caso de Teste|CT-006|
|-|-|
|Requisitos que motivaram o teste:| *RF-006:* A plataforma deve oferecer um campo nos anúncios para texto alternativo (alt texts) onde serão descritas as imagens dos anúncios e pontos turísticos com detalhes. (Recurso de acessibilidade).|
|Objetivo do teste:| Averiguar que o aplicativo é acessível a pessoas com necessidades especiais. |
|Condição para aprovado:| Usar uma amostra de 3 imagens e ativar o recurso de acessibilidade (alt texts). Certificar-se que está funcionando..|
|Resultado:||
|Observação: ||	

|Caso de Teste|CT-007|
|-|-|
|Requisitos que motivaram o teste:| **RF-007:** Apresentar hospedagens próximas a cidade e/ou região desejada.|
|Objetivo do teste:| Averiguar se ao selecionar a localidade, todas as hospedagens cadastradas naquela cidade aparecem para o usuário.|
|Condição para aprovado:| Testar 3 localidades em cidades diferentes e todas as hospedagens daquela cidade devem aparecer para o usuário ao realizar a busca.|
|Resultado:||
|Observação: ||	

|Caso de Teste|CT-008|
|-|-|
|Requisitos que motivaram o teste|**RF-008:** Ter a opção de selecionar como favorito lugares e hospedagens|
|Objetivo do teste:|Certificar-se que ao selecionar um lugar como favorito, essa informação fique salva para o usuário.|
|Condição para aprovado:|3 usuários devem favoritar 3 pontos turísticos diferentes, sair do aplicativo, e ao realizar o login novamente esses pontos permanecem favoritados.|
|Resultado:||
|Observação: ||	

|Caso de Teste|CT-009|
|-|-|
|Requisitos que motivaram o teste: |**RF-009:** Ter a opção de avaliar os pontos turísticos e hospedagens.|
|Objetivo do teste:| Certificar-se de que um usuário possa avaliar o ponto turístico e que a sua nota conte para a nota global daquele ponto turístico.|
|Condição para aprovado:| 3 usuários devem fornecer notas para 3 pontos turísticos distintos, e as suas notas contam para a média de nota de cada um deles.|
|Resultado:||
|Observação: ||	

|Caso de Teste|CT-010|
|-|-|
|Requisitos que motivaram o teste: |**RF-010:** Apresentar uma aba de pesquisa onde o usuário poderá verificar os pontos turísticos da cidade e/ou região desejada|
|Objetivo do teste:| Averiguar se ao selecionar a localidade, todos os pontos turísticos naquela cidade aparecem para o usuário.|
|Condição para aprovado: | Testar 3 localidades em cidades diferentes e todos os pontos turísticos daquela cidade devem aparecer para o usuário ao realizar a busca.|
|Resultado:||
|Observação: ||	

|Caso de Teste|CT-013|
|-|-|
|Requisitos que motivaram o teste:|**RNF-005:** O site deve ser publicado em um ambiente acessível publicamente na Internet via GitHub.|
|Objetivo do teste:| Certificar que qualquer usuário do GitHub consiga acessar a documentação e código do projeto.|
|Condição para aprovado:| Ao menos 3 usuários do GitHub conseguem fazer uma cópia dos artefatos do projeto em seus computadores pessoais.|
|Resultado:||
|Observação: ||	
