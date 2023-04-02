# Plano de Testes de Usabilidade

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

