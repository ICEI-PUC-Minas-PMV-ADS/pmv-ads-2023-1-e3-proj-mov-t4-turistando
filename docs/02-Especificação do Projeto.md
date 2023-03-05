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

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

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

![image](https://user-images.githubusercontent.com/102244252/222964432-5c1438ac-208b-4639-8c02-c7ac3f7c82e0.png)



# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

A gestão de orçamento é uma prática fundamental para a saúde financeira de qualquer pessoa, família ou empresa. Ela envolve a criação, monitoramento e controle de um plano financeiro que permita gerir adequadamente as receitas e despesas, visando alcançar objetivos financeiros específicos.

Uma boa gestão de orçamento é essencial para manter o equilíbrio financeiro, evitar o endividamento excessivo e garantir que os recursos financeiros sejam utilizados de forma eficiente e estratégica. Isso significa que é preciso ter um planejamento financeiro sólido, que leve em conta não apenas as despesas imediatas, mas também as metas de curto, médio e longo prazo.

Para isso, é necessário ter conhecimento sobre aspectos como controle de gastos, fluxo de caixa, investimentos, endividamento e equilíbrio entre receitas e despesas. Com uma gestão de orçamento bem-feita, é possível tomar decisões financeiras mais acertadas e alcançar uma maior estabilidade financeira ao longo do tempo.

Para o orçamento de Recursos Humanos foi adicionado um custo de salário de R$ 3.474,00 para um desenvolvedor mobile, totalizando R$ 20.844,00 para uma equipe de 6 desenvolvedores durante o período de 6 meses.

Para o orçamento de software foi adicionado o custo do software MS Project, visando planejar, gerenciar e controlar as tarefas da equipe para melhor desmepenho durante o projeto. O custo total para 6 meses é de R$ 2.111,40. Também foi adicionado o custo para o software Azure ferramenta utilizada para o desenvolvimento do código, totalizando R$ 5.031,06 durante 6 meses.

Para o orçamento de Hardware foi adicionado o custo para um notebook Samsung para a equipe de desenvolvimento, sendo 6 desenvolvedores, totalizando R$ 19.800,00.

Para o orçamento de serviços foi adicionado um custo geral para equipe como internet e infraestrutura (energia, alimentaçao, etc...), totalizando R$ 9.000,00.

O custo total do projeto para um período de 6 meses é de R$ 56.786,46.

|Recursos Necessários| R$ |
|--|-------------------------------------------------------|
|Recursos Humanos| 20.488,00 |
|Software| 7.142,46 |
|Hardware| 19.800,00 |
|Serviços| 9.000,00 |
|Total| 56.786,46 |
