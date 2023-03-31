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

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

A aplicação será hospedada pelo GitHub.



## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)



<ul dir="auto">
<li>Adequação Funcional
<ul dir="auto">
<li>Completude funcional</li>
<li>Correção funcional</li>
</ul>
</li>
<li>Eficiência/Performance
<ul dir="auto">
<li>Utilização de recursos</li>
</ul>
</li>
<li>Usabilidade
<ul dir="auto">
<li>Operabilidade</li>
<li>Proteção contra erro do usuário</li>
<li>Estética de interface</li>
</ul>
</li>
<li>Confiabilidade
<ul dir="auto">
<li>Maturidade</li>
<li>Tolerância a falhas</li>
</ul>
</li>
<li>Segurança
<ul dir="auto">
<li>Confidencialidade</li>
<li>Integridade</li>
</ul>
</li>
<li>Manutenibilidade
<ul dir="auto">
<li>Modularidade</li>
<li>Reusabilidade</li>
<li>Modificabilidade</li>
</ul>
</li>
<li>Portabilidade
<ul dir="auto">
<li>Adaptabilidade</li>
</ul>
</li>
</ul>
