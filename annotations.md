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