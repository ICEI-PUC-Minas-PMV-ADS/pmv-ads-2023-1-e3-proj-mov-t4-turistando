# Especificações do Projeto


A base para a construção do presente projeto consiste na criação de um serviço de hospedagem e exposição de locais voltados para o turismo, que ofereça aos usuários a possibilidade de reservar hospedagens com o próprio locatário, além de serviços essenciais aos visitantes em seu local de destino. A partir das pesquisas e consolidação das ideias dos membros da equipe de desenvolvedores, foram criados personas e histórias de usuários a quem se destina a aplicação.  

 

## Personas

> `João Marcos` | Idade: 25 anos | Ocupação: Designer Gráfico | Gosta de viajar, conhecer novos lugares, usa o Instagram e Twitter para descobrir locais e pontos turísticos com o intuito de se aventurar por essas localidades e obter novas experiências e compartilhando essas suas experiências com seus amigos nas suas redes sociais. 

 > `Juarez da Cunha` | Idade: 72 anos | Ocupação: Proprietário de uma pousada | Tem o WhatsApp e o telefone fixo para agendar suas hospedagens. Não é muito integrado as redes sociais e sente uma certa dificuldade no uso dessas redes, se sentindo mais confortável com os agendamentos pelo telefone fixo e WhatsApp 

 > `Mariana Monteiro` | Idade: 31 anos | Ocupação: Digital Influencer | Usa as redes sociais para compartilhar suas viagens e experiências pessoais e assim atrai o interesse dos seus seguidores nos destinos que visitou. Compartilha fotos e vídeos de seus locais de viagem, dicas úteis, informações sobre os melhores pontos turísticos, hotéis e restaurantes, e todas as suas experiências, a fim de inspirar outras pessoas a também conhecer esses locais. Aproveita para promover esses destinos e incentivar outras pessoas a visitá-los. 

> `Ana Clara` | Idade: 22 anos | Ocupação: guia turística | Tem suas redes sociais como principal ferramenta para fazer a divulgação dos seus serviços, captar seus clientes e agendar seus passeios, compartilhando com todos o seu dia a dia. 


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João Marcos  | Saber sobre a história e cultura da região        | Desfrutar melhor a experiência da viagem              |
|  João Marcos   | Descobrir lugares novos onde já viajei antes            | Retornar a lugares que gosto mas sem a monotonia de revisitar pontos que já conheço  |
| Ana Clara | Experimentar a culinária local | Descobrir novos restaurantes |
| Ana Clara | Conhecer os pontos turísticos da região que moro | Conhecer melhor a cidade ou região | 
| Mariana Monteiro | Compartilhar minhas viagens com pessoas interessadas | Pessoas possam conhecer e experimentar os lugares que fui |
| Mariana Monteiro | Conhecer novos lugares para viajar | Poder conhecer lugares menos divulgados e conhecidos pela mídia de massa | 
| Juarez da Cunha | Dar visibilidade para a pousada | Aumentar o número de hóspedes |
| Juarez da Cunha | Aumentar o fluxo de clientes no restaurante, incrementando o lucro mensal | Aumentar o fluxo de clientes |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual
[próxima etapa]
### Descrição Geral da Proposta
[próxima etapa]
### Processo 1 – NOME DO PROCESSO
[próxima etapa]
### Processo 2 – NOME DO PROCESSO
[próxima etapa]
## Indicadores de Desempenho
[próxima etapa]

## Requisitos

Visando listar as funcionalidades para a elaboração da plataforma Turistando, foram explicitados os requisitos referentes ao desenvolvimento do software na tabela abaixo. 

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A plataforma deve possuir uma página de login com usuário e senha.  | ALTA | 
|RF-002| O app fornecerá a funcionalidade para autenticação do usuário.   | ALTA |
|RF-003| O app deverá fornecer informações sobre os pontos turísticos da cidade.  | ALTA |
|RF-004| O programa deve possibilitar o compartilhamento de localidades por redes sociais.   | MÉDIA |
|RF-005| O app deve apresentar, para cada anúncio, informações como um breve descritivo, título, imagem, dados de contato e valor (aproximadamente). | ALTA |
|RF-006|  A plataforma deve oferecer um campo nos anúncios para texto alternativo (alt texts) onde serão descritas as imagens dos anúncios e pontos turísticos com detalhes. (Recurso de acessibilidade). | ALTA |
|RF-007| Apresentar hospedagens próximas a cidade e/ou região desejada. | MÉDIA |
|RF-008| Ter a opção de selecionar como favorito lugares e hospedagens.  | BAIXA |
|RF-009| Opção de avaliar os pontos turísticos e hospedagens.  | BAIXA |
|RF-010| Apresentar uma aba de pesquisa onde o usuário poderá verificar os pontos turísticos da cidade e/ou região desejada.  | MÉDIA |

### Requisitos Não Funcionais
|ID     | Descrição do Requisito  | Prioridade |
|-------|-----------------------------------------|----|
|RNF-001| O aplicativo deverá ser compatível com os principais aparelhos do mercado (Android e iOS).  | MÉDIA |
|RNF-002| O aplicativo deverá ser responsivo permitindo a visualização em celular e tablet de forma adequada  | ALTA |
|RNF-003| O app deve ter bom nível de contraste entre os elementos da tela em conformidade.   | ALTA | 
|RNF-004| O aplicativo terá manutenções programadas em horários com baixo número de usuários ativos.   | ALTA | 
|RNF-005| O site deve ser publicado em um ambiente acessível publicamente na Internet via GitHub.   | ALTA | 
|RNF-006|O site deve ser intuituvo e não apresentar travamentos| ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deve estar finalizado e não extrapolar a data de 23/06/2023.  |
|02| A plataforma deve se restringir às tecnologias básicas utilizando ferramentas de desenvolvimento móvel. (JS e React Native).  |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.   |
|04| A plataforma se compromete em não compartilhar históricos de pesquisa, localização em tempo real e dados sensíveis dos usuários.   |


## Diagrama de Casos de Uso

A plataforma Turistando tem como intuito facilitar o planejamento de viagens, além de dar maior visibilidade aos pontos turísticos e estabelecimentos das cidades cadastradas no aplicativo, aumentando assim o percentual de novos visitantes e fomentando a economia local. O software deverá gerir e ordenar os estabelecimentos como pousadas, restaurantes e afins de acordo com o local escolhido por meio de uma pesquisa realizada na página inicial do programa. 

A inserção dos locais e estabelecimentos regionais será realizada, inicialmente, pela própria equipe administradora da plataforma. Quanto ao recurso de listagem de cidades turísticas, será possível realizar a consulta mesmo antes de realizar o login na plataforma, porém será necessário a autenticação na plataforma para registro de reservas aos estabelecimentos locais. 

No rodapé da página inicial constará um link direto para uma lista de cidades cadastradas, bem como as informações de privacidade e termos de uso que estarão disponíveis a todos os usuários e administradores da plataforma. 

![Captura de tela 2023-03-05 103536](https://user-images.githubusercontent.com/102244252/222964160-c832700f-e581-4c9a-b389-6e8f2c7f5877.png)


# Matriz de Rastreabilidade

Foram adicionados os seguintes stakeholders: Engenheiro de Software (focado no desenvolvimento atual, tecnológico e de qualidade), Arquiteto de Software (focado na estrutura do software), Desenvolvedor (com uma visão geral sobre a implementação), e Product Owner (que traz a visão do cliente e elicita os casos de uso)
A matriz de rastreabilidade abaixo mostra como as seguintes partes e artefatos estão relacionados entre si:
* PO: Product Owner
* BL-01 Documento atual tido como baseline 1 com as descrições dos requisitos
* CT: Caso de Teste (Colunas a serem inseridas)
* RF: Requisito Funcional
* RNF: Requisito não funcional

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-turistando/blob/a3f64062ef92decf08883a3feae0bc012b95723a/docs/img/matriz_rastreabilidade.png)



# Gerenciamento de Projeto

Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas são partes constituintes do Gerenciamento de projetos. Muito embora elas sejam separadas para estudo, essa é apenas uma forma didática, porque na realidade elas são codependentes e intrelaçadas de forma que se uma dessas áreas não é bem executada, todo o projeto é prejudicado. Se o escopo é alterado, por exemplo, os custos e prazos devem ser alterados.

## Gerenciamento de Tempo

O Gráfico de Gantt é umas das formas mais utilizadas de se estimar o tempo de um projeto. Se trata de uma ferramenta visual que informa:
* Duração de cada atividade
* Relacionamento entre elas (se são realizadas de forma paralela ou sequencial)
* Ordem de realização das atividades
* Demais informações que podem ser adquiridas da ferramenta visual como tempo total do projeto, data de início e término, atividades críticas (de maior duração, etc.
A imagem abaixo traz o gráfico de Gantt referente a essa etapa do projeto.

![Gráfico de Gantt](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-turistando/blob/9ad3897e78d39dc36eb9055108b2406483d0e873/docs/img/Grafico_de_Gantt.jpeg)

## Gerenciamento de Equipe

Gerenciar pessoas é um desafio que deve ser levado à sério porque recursos humanos é o recurso mais valioso de qualquer projeto. Para tanto, é construído um diagrama em que as atividades de cada equipe/pessoa envolvida no tempo fiquem bem claras.
A imagem abaixo traz as atividades a serem realizadas por cada agente do projeto nessa etapa.

![Simple Project Timeline](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-turistando/blob/7e6c0daf23ad5ed4a9b1da14a92fbdc80c8f1b0c/docs/img/Gerenciamento_equipe.jpeg)

Organograma da equipe de desenvolvimento

![image](https://user-images.githubusercontent.com/103782980/222983453-5be73417-12ca-4e91-ae0b-76e5c83e42a2.png)


## Gestão de Orçamento

A gestão de orçamento é uma prática fundamental para a saúde financeira de qualquer pessoa, família ou empresa. Ela envolve a criação, monitoramento e controle de um plano financeiro que permita gerir adequadamente as receitas e despesas, visando alcançar objetivos financeiros específicos.

Uma boa gestão de orçamento é essencial para manter o equilíbrio financeiro, evitar o endividamento excessivo e garantir que os recursos financeiros sejam utilizados de forma eficiente e estratégica. Isso significa que é preciso ter um planejamento financeiro sólido, que leve em conta não apenas as despesas imediatas, mas também as metas de curto, médio e longo prazo.

Para isso, é necessário ter conhecimento sobre aspectos como controle de gastos, fluxo de caixa, investimentos, endividamento e equilíbrio entre receitas e despesas. Com uma gestão de orçamento bem-feita, é possível tomar decisões financeiras mais acertadas e alcançar uma maior estabilidade financeira ao longo do tempo.

Ao orçamento de Recursos Humanos, foi adicionado um custo de salário de R$ 3.474,00 para um desenvolvedor mobile, totalizando R$ 20.844,00 para uma equipe de 6 desenvolvedores durante o período de 6 meses.

Em orçamento de software, foi adicionado o custo do software MS Project, visando planejar, gerenciar e controlar as tarefas da equipe para melhor desmepenho durante o projeto. O custo total para 6 meses é de R$ 2.111,40. Também foi adicionado o custo para o software Azure ferramenta utilizada para o desenvolvimento do código, totalizando R$ 5.031,06 durante 6 meses.

Quanto ao orçamento de Hardware foi adicionado o custo para um notebook Samsung para a equipe de desenvolvimento, sendo 6 desenvolvedores, totalizando R$ 19.800,00.

Para o orçamento de serviços foi adicionado um custo geral para equipe como internet e infraestrutura (energia, alimentaçao, etc...), totalizando R$ 9.000,00.

O custo total do projeto para um período de 6 meses é de R$ 56.786,46.

|Recursos Necessários| R$ |
|-|-|
|Recursos Humanos| 20.488,00 |
|Software| 7.142,46 |
|Hardware| 19.800,00 |
|Serviços| 9.000,00 |
|Total| 56.786,46 |

## Desempenho e metas para o negócio
Algumas métricas a serem atendidas pelo negócio são apresentadas a seguir.
Através das metas pré estipuladas pode-se direcionar a equipe de desenvolvimento e manutenção do sistema onde os esforços devem ser aplicados de forma a garantir que a empresa sempre entregue valor ao cliente e seja lucrativa.
A primeira métrica é a quantidade de anunciantes cadastrados. Esses cadastros podem ser feitos inclusive durante o desenvolvimento do software. A partir dos wireframes e modelo de negócio da empresa, os potenciais parceiros já podem ser contactados, oferecendo preços especiais para aqueles que se fidelizarem como anunciantes antes mesmo de o software estar pronto. Dessa forma, a empresa já começa a ter faturamento reduzindo o período de payback.
![anunciantes](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-turistando/blob/295438a183741df1b6f3dabcc84c91daf1334e7f/docs/img/Anunciantes%20cadastrados.png)
O período de payback esperado é 5 anos (10 semestres). Ou seja, no final desse período é esperado que os custos de criação do sistema já tenham sido pagos com os faturamentos que entram na empresa. 
![breakeven](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-turistando/blob/295438a183741df1b6f3dabcc84c91daf1334e7f/docs/img/Breakeven.png)
O faturamento já é esperado desde o primeiro semestre de funcionamento do software. Os rendimentos são provenientes dos anúncios que são colocados por prefeituras (eventos) e empresários (hospedagens, passeios, etc).
![faturamento](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-turistando/blob/295438a183741df1b6f3dabcc84c91daf1334e7f/docs/img/Faturamento.png)
A conversão em vendas é uma forma de medir quantas vendas são executadas por cliente que faz o login no aplicativo. Dessa forma é possível ver sazonalidades, quais tipos de hospedagens e eventos são mais procurados em cada época do ano, e com isso melhorar o algoritmo com o tempo. Fornecendo ao visitante aquelas atrações que tem maior conversão em vendas.
![conversão em vendas](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-turistando/blob/295438a183741df1b6f3dabcc84c91daf1334e7f/docs/img/Convers%C3%A3o%20em%20vendas.png)
O número de usuários cadastrados é uma métrica que auxilia a entender como está sendo o recebimento / adesão do aplicativo pelos usuários.
![usuários cadastrados](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-turistando/blob/295438a183741df1b6f3dabcc84c91daf1334e7f/docs/img/Usu%C3%A1rios%20cadastrados.png)
Por fim, uma métrica destinada a realização do projeto em si.
Essa métrica, tal como é exibida abaixo, segue uma metodologia de desenvolvimento bem linear. Aplicando metodologia ágil as porcentagens concluídas podem ser revistas ao final de cada sprint. É portanto, um gráfico mais dinâmico.
![Andamento do projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-turistando/blob/866b9e6da7634fb4c8d3a2fff9755ff3a0465795/docs/Andamento%20do%20projeto.png)
