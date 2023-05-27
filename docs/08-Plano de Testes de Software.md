# Plano de Testes de Software

|Caso de Teste|CT-001|
|-|-|
|Requisitos que motivaram o teste: |**RNF-001:**  A plataforma deve possuir uma página de login com usuário e senha.
|Objetivo do teste:| Averiguar funcionamento do cadastro ao popular banco de dados.|
|Condição para aprovado: | Login e senha cadastrados no banco de dados a partir da página de login.|
|Resultado:||
|Observação: ||	

|Caso de Teste|CT-002|
|-|-|
|Requisitos que motivaram o teste:| **RNF-002:** O app fornecerá a funcionalidade para autenticação do usuário.|
|Objetivo do teste:| Averiguar que pessoas autorizadas tenham acesso ao sistema.|
|Condição para aprovado:|Inseridos usuário e senha, o login deve ser feito.|
|Resultado:| Bloqueio/liberação do sistema após inserção de credenciais de acesso.|
|Observação: ||	

|Caso de Teste|CT-003|
|-|-|
|Requisitos que motivaram o teste:|**RNF-002:** O app fornecerá a funcionalidade para autenticação do usuário|
|Objetivo do teste: | Averiguar que somente pessoas autorizadas tenham acesso ao sistema|
|Condição para aprovado:| Inseridos usuário e senha errados, o usuário não deve acessar o sistema|
|Resultado:| Bloqueio de credenciais não cadastrados.|
|Observação: ||	

|Caso de Teste|CT-004|
|-|-|
|Requisitos que motivaram o teste:|**RNF-003:** O app deverá fornecer informações sobre os pontos turísticos da cidade. **RNF-005:** O app deve apresentar, para cada anúncio, informações como um breve descritivo, título, imagem, dados de contato e valor (aproximadamente). |
|Objetivo do teste: | Averiguar que as informações sobre os pontos turísticos definidas como básicas no backlog do produto sejam requisitos mínimos para que um ponto seja cadastrado no sistema.|
|Condição para aprovado:| Todos os pontos turísticos só podem ser cadastrados caso possuam nome, localização, descrição, avaliação dos usuários (ou um campo em branco informando que o local ainda não foi avaliado). |
|Resultado:|Inserção de nome, localização, descrição e avaliação dos usuários de cada ponto turístico no banco de dados.|
|Observação: ||	

|Caso de Teste|CT-005|
|-|-|
|Requisitos que motivaram o teste:|**RNF-003:** O app deverá fornecer informações sobre os pontos turísticos da cidade. **RNF-005:** O app deve apresentar, para cada anúncio, informações como um breve descritivo, título, imagem, dados de contato e valor (aproximadamente).|
|Objetivo do teste: |Averiguar que as informações sobre os pontos turísticos definidas como básicas no backlog do produto estejam disponíveis.|
|Condição para aprovado:| Ao menos 3 usuários testem o sistema e consigam visualizar todas as informações básicas. |
|Resultado:|No layout do aplicativo estar disponível o nome, localização, descrição e avaliação dos usuários de cada ponto turístico no banco de dados.|
|Observação: ||	

|Caso de Teste|CT-006|
|-|-|
|Requisitos que motivaram o teste:|**RNF-004:** O programa deve possibilitar o compartilhamento de localidades por redes sociais.|
|Objetivo do teste: | Averiguar se o compartilhamento em redes sociais funciona.|
|Condição para aprovado:| Ao menos três usuários escolherão três pontos turísticos diferentes e farão as postagens em suas redes sociais: Facebook e Instagram. |
|Resultado:|Compartilhamento da funcionalidade do aplicativo nas redes sociais|
|Observação: ||	

|Caso de Teste|CT-007|
|-|-|
|Requisitos que motivaram o teste:|**RNF-006:** : A plataforma deve oferecer um campo nos anúncios para texto alternativo (alt texts) onde serão descritas as imagens dos anúncios e pontos turísticos com detalhes. (Recurso de acessibilidade).|
|Objetivo do teste: |Averiguar que o aplicativo é acessível a pessoas com necessidades especiais.|
|Condição para aprovado:| Usar uma amostra de 3 imagens e ativar o recurso de acessibilidade (alt texts). Certificar-se que está funcionando.|
|Resultado:|Funcionamento adequado da descrição dos elementos visuais da imagem no app.|
|Observação: ||	

|Caso de Teste|CT-008|
|-|-|
|Requisitos que motivaram o teste:|**RNF-007:** Apresentar hospedagens próximas a cidade e/ou região desejada.|
|Objetivo do teste: | Averiguar se ao selecionar a localidade, todas as hospedagens cadastradas naquela cidade aparecem para o usuário.|
|Condição para aprovado:| Testar 3 localidades em cidades diferentes e todas as hospedagens daquela cidade devem aparecer para o usuário ao realizar a busca.|
|Resultado:|Visualização da infraestrutura local referente a busca inserida no campo de pesquisa.
|Observação: ||	

|Caso de Teste|CT-009|
|-|-|
|Requisitos que motivaram o teste:|**RNF-008:** Ter a opção de selecionar como favorito lugares e hospedagens.|
|Objetivo do teste:|Certificar-se que ao selecionar um lugar como favorito, essa informação fique salva para o usuário.|
|Condição para aprovado:|3 usuários devem favoritar 3 pontos turísticos diferentes, sair do aplicativo, e ao realizar o login novamente esses pontos permanecem favoritados.|
|Resultado:|Disponibilizar a opção de favoritar um local visitado.|
|Observação: ||	

|Caso de Teste|CT-010|
|-|-|
|Requisitos que motivaram o teste:|**RNF-009:** Ter a opção de avaliar os pontos turísticos e hospedagens.|
|Objetivo do teste:|Certificar-se de que um usuário possa avaliar o ponto turístico e que a sua nota conte para a nota global daquele ponto turístico.|
|Condição para aprovado:|3 usuários devem fornecer notas para 3 pontos turísticos distintos, e as suas notas contam para a média de nota de cada um deles.|
|Resultado:|Avaliação de uma localidade pela média de notas dos usuários.|
|Observação: ||	

|Caso de Teste|CT-011|
|-|-|
|Requisitos que motivaram o teste:|**RNF-010:** Apresentar uma aba de pesquisa onde o usuário poderá verificar os pontos turísticos da cidade e/ou região desejada.|
|Objetivo do teste:| Averiguar se ao selecionar a localidade, todos os pontos turísticos naquela cidade aparecem para o usuário.|
|Condição para aprovado:|Testar 3 localidades em cidades diferentes e todos os pontos turísticos daquela cidade devem aparecer para o usuário ao realizar a busca.|
|Resultado:| Visualização dos pontos turísticos após selecionar uma cidade qualquer.|
|Observação: ||	

|Caso de Teste|CT-012|
|-|-|
|Requisitos que motivaram o teste:|**RNF-010:** Apresentar uma aba de pesquisa onde o usuário poderá verificar os pontos turísticos da cidade e/ou região desejada.|
|Objetivo do teste:|Averiguar se ao selecionar a localidade, todos os pontos turísticos naquela cidade aparecem para o usuário.|
|Condição para aprovado:|Testar 3 localidades em cidades diferentes e todos os pontos turísticos daquela cidade devem aparecer para o usuário ao realizar a busca.|
|Resultado:|Visualização dos pontos turísticos após selecionar uma cidade qualquer.|
|Observação: ||

|Caso de Teste|CT-013|
|-|-|
|Requisitos que motivaram o teste:|**RNF-003:** O aplicativo deve ter bom nível de contraste entre os elementos da tela em conformidade. |
|Objetivo do teste:|Certificar que todos os textos e imagens do aplicativo são legíveis.|
|Condição para aprovado:|Realizar pesquisa com uma amostra de 5 usuários e pedir que classifiquem a visibilidade do aplicativo entre 0 e 5, sendo 0 pouco legível / visível e 5 muito legível / visível. O aplicativo é aprovado com uma média igual ou maior que 4.|
|Resultado:|Aplicação capaz de ajustar o tamanho do texto conforme a tela do dispositivo físico do usuário.|
|Observação: ||

|Caso de Teste|CT-014|
|-|-|
|Requisitos que motivaram o teste:|**RNF-005:** O site deve ser publicado em um ambiente acessível publicamente na Internet via GitHub. |
|Objetivo do teste:|Certificar que qualquer usuário do GitHub consiga acessar a documentação e código do projeto.|
|Condição para aprovado:|Ao menos 3 usuários do GitHub conseguem fazer uma cópia dos artefatos do projeto em seus computadores pessoais.|
|Resultado:|Disponibilidade de acesso ao conteúdo no site GitHub.|
|Observação: ||

|Caso de Teste|CT-015|
|-|-|
|Requisitos que motivaram o teste:|**RNF-005:** O site deve ser publicado em um ambiente acessível publicamente na Internet via GitHub. |
|Objetivo do teste:|Certificar que o aplicativo tem boa usabilidade do ponto de vista do usuário final.|
|Condição para aprovado:|5 usuários usarão o aplicativo por 10 minutos cada e registrarão a quantidade de vezes que:
a.	Houve travamento;
b.	Ele sentiu dificuldade de realizar uma tarefa.
E dará uma nota de 0 a 5 para o quanto ele achou intuitivo o uso do mesmo, sendo 0 – nada intuitivo, 1 – muito pouco intuitivo, 2 – pouco intuitivo, 3 – intuitivo o suficiente, 4 – fácil de ser usado, 5 – muito fácil de ser usado.
O aplicativo será aprovado caso tenha ocorrido 0 ou 1 travamento, 0 0 1 ocorrência de dificuldade ao realizar uma tarefa, e a média da nota atribuída à intuitividade seja igual ou maior que 4.|
|Resultado:|Aplicação com funcionamento fluído sem travamentos ou bugs durante a utilização.|
|Observação: ||

|Caso de Teste|CT-016|
|-|-|
|Requisitos que motivaram o teste:|**RF-002:** O app fornecerá a funcionalidade para autenticação do usuário. |
|Objetivo do teste:| Certificar que a autenticação do usuário poderá ser mudada caso ele queira.|
|Condição para aprovado:| Um usuário cadastrado conseguirá alterar seu e-mail, senha, telefone, e demais dados pessoais para login.|
|Resultado:| Alteração feita e login com novos dados realizados.|
|Observação: ||	

# MÉTRICAS DE DESEMPENHO (APP TURISTANDO)

As métricas que norteiam a viabilidade da implementação do aplicativo em um ambiente de negócio, estão detalhadas a seguir através do painel gráfico a seguir. 

1.	Número de usuários cadastrados 
2.	Número de anunciantes cadastrados
3.	Conversão em vendas
4.	Faturamento
5.	Breakeven

![image](https://user-images.githubusercontent.com/102244252/229382268-8d45aac6-8518-4945-a0d4-c73d40ce9234.png)

