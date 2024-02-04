# TYPE ANNOTATION E TYPE INFERENCE

## Annotation:

É quando definimos o tipo de um dado manualmente;

## Inference:

É quando o TS identifica e define o tipo de dado para nós;

# TSCONFIG.JSON

## tsc --init

O tsconfig.json é um arquivo de configuração que determinará quais
as regras que o typescript usará naquele projeto de acordo com o
que for implementado.

# TIPO ANY EM VARIÁVEIS

## Qualquer | Any

O tipo any deve ser evitado a todo custo, pois ele não determina
nenhum tipo para sua variável fazendo com que ela fique a merce de
receber qualquer tipo de dado e abrindo uma grande oportunidade para
muitos bugs e erros, além de que é contra os princípios do Typescript.
A somente dois casos em que podemos usar a variável any sem nos preo
cupar, sendo um deles na declaração de um array onde queremos receber
diversos tipos de dados e outro é onde sabemos que aquela variável pode
rá receber diversos tipos de dados sem ter problemas de comprometer o
desenvolvimento futuramente.

# VALIDAÇÃO DE PROPS - IF & ELSE

## Props opcionais ou não

Importante lembrar que caso você declare que uma propriedade de um objeto
vai ser opcional declarando uma interrogação antes de sua tipagem, geralmente
validamos essa props para que caso nenhum valor seja passado para ela, uma
verificação ( validação ) seja feita e a partir dessa validação algo aconteça
podenso ser geralmente feita com IF

# GENÉRICS

## Genérics in TypeScript

Genérics são tipos personalizados que podemos criar com um nome próprio e também
uma tipagem própria, sendo assim fazendo com que possamos criar qualquer regra
e estabelecer esta regra a uma variável por exemplo.
Isto é muito bom pois caso não quisermos usar os tipos padrões, podemos personalizar
algum diferente para que nosso projeto fique de acordo com as necessidades e para que
a manutebilidade do código fique mais fácil futuramente.
Existem muitos tipos diferentes de manipular um genérico, com interfaces, constraints,
genérics normais e etc...

# CLASSES

## Visibilidade em Classes

Visibilidade é um conceito muito importante no TypeScript pois define como será acessado
os métodos de alguma classe.

PUBLIC: Visibilidade default, pode ser acessado em qualquer lugar;

PROTECTED: Acessível apenas a subclasses da classe do método, para acessar uma propriedade
precisamos de um método;

PRIVATE: Apenas a classe que declarou o método pode utilizar;