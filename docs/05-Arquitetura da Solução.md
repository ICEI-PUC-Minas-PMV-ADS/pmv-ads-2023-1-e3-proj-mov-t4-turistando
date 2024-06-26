# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes nos mostra os atributos de cada classe e como as classes se relacionam, trazendo clareza para a implementação do projeto, com o intuito de facilitar a sua execução e reduzir possíveis dificuldades. 

![Diagrama de classes](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-turistando/blob/main/docs/img/Diagrama%20de%20classe.jpg)



## Modelo ER

O modelo ER nos mostra como será o relacionamento entre todas as tabelas do banco de dados e sua relação de dependência entre elas, explicitando como deve funcionar esses relacionamentos e como eles devem conversar entre sí. 

![Diagrama ER.jpg](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-turistando/blob/main/docs/img/diagrama%20er.jpeg)


## Esquema Relacional

O Esquema Relacional corresponde á todas as tabelas que serão criadas no banco de dados e quais são as suas chaves primarias e suas chaves estrangeiras.


![Esquema relacional.jpg](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t4-turistando/blob/main/docs/img/Diagrama%20ER%20de%20banco%20de%20dados%20(p%C3%A9%20de%20galinha).jpeg)

## Modelo Físico
Create table usuarios 

( 

Id int AUTO_INCREMENT PRIMARY key, 

Nome varchar(40), 

Login varchar(40), 

DataCriacao date, 

Senha varchar(32), 

Tipo char (1) 

); 

Create table administrador 

( 

Id int AUTO_INCREMENT PRIMARY key, 

Nome varchar(40), 

Login varchar(40), 

DataCriacao date, 

Senha varchar(32), 

Tipo char (1) 

); 

Create table anunciantes 

( 

Id int AUTO_INCREMENT PRIMARY key, 

Nome varchar(40), 

Login varchar(40), 

DataCriacao date, 

Senha varchar(32), 

Tipo char (1) 

); 

Create table cidades 

( 

IdCidade int  AUTO_INCREMENT PRIMARY key, 

Nome varchar(40), 

Localizacao varchar(40), 

Descricao varchar(40) 

); 

Create table Pontos_turisticos 

( 

Nome varchar(40) PRIMARY key, 

Localizacao varchar(40), 

Descricao varchar(40), 

Informacoes varchar(40), 

Fk_id_cidade int, 

FOREIGN key(fk_id_cidade) REFERENCIES cidades(id) 

); 

Create table anuncio 

( 

Nome varchar(40) PRIMARY key, 

localizacao varchar(40), 

Descricao varchar(40), 

valor varchar(40), 

Fk_id_cidade int, 

FOREIGN key(fk_id_cidade) REFERENCIES cidades(id), 

Fk_id_anunciante int, 

FOREIGN key(fk_id_anunciante) REFERENCIES anunciantes(id) 
); 

## Tecnologias Utilizadas

Para a para solução do problema serão utilizados o React Native para o desenvolvimento do aplicativo. Sera utilizado javascript, e como framework utilizaremos a NodeJs. Utilizaremos o Visual Code como IDE de desenvolvimento, e como Sistema Gerenciador de Banco de Dados (SGBD) utilizaremos o MySQL. Durante o desenvolvimento serão priorizadas o uso de ferramentas alternativas gratuitas de tecnologia, dentre elas: Trello, Mysql, Visual Code e Figma, como especificado anteriormente na metodologia.

## Hospedagem

A aplicação será hospedada pelo GitHub.



## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.


1- **Funcionalidade**  
 - *Adequação* : Avalia se o software propõe-se a fazer o que é apropriado. Essa métrica será avaliada através da entrega dos requisitos funcionais propostos.
 - *Segurança de acesso* : Avalia se é possível o acesso não autorizado a dados. Essa métrica será avaliada através da implementação da autenticação.

2- **Confiabilidade**  
 - *Tolerância a falhas*: Avalia qual a reação decorrente de falhas. Essa métrica será avaliada através dos testes de usabilidade.  
 - *Recuperabilidade*: Avalia se é possível recuperar dados após uma falha. Essa métrica será avaliada através de monitoramento de uso do app.  

3- **Usabilidade**  
 - *Apreensibilidade*: Avalia se é fácil aprender a usar. Essa métrica será avaliada através de testes de usabilidade.  
 - *Operacionalidade*: Avalia se é fácil de operar e controlar a operação. Essa métrica será avaliada através de testes de usabilidade. 

4- **Eficiência**  
- *Comportamento em relação ao tempo*: Avalia o tempo de resposta e de processamento. Essa métrica será avaliada através de testes de usabilidade. 
- *Comportamento em relação aos recursos*: Avalia quanto recurso utiliza. Essa métrica será avaliada através de testes de usabilidade. 
    
5- **Manutenibilidade**  
- *Modificabilidade*: Avalia se fácil modificar e remover defeitos. Essa métrica será avaliada através da implementação de novas funcionalidades no decorrer do projeto.
- *Testabilidade*: Avalia se fácil testar quando se faz alterações. Essa métrica será avaliada durante o desenvolvimento através de testes das novas implementações.

6- **Portabilidade**  
- *Capacidade para ser instalado*: Avalia se é fácil instalar em outros ambientes. Essa métrica será avaliada após hospedagem em lojas para apps.
- *Capacidade para substituir*: Avalia se está de acordo com padrões ou convenções de portabilidade. Essa métrica será avaliada após investigação de outros apps que possuam funcionalidades semelhantes.
