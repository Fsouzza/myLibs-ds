//Objeto Carta que contem um valor, um naipe.
class Carta{
    constructor(valor, naipe){
      this.valor = valor;
      this.naipe = naipe;    
    }
    
    //Pega o valor e o naipe e cria um ID de 1 a 52
    pegarID(){
      return (this.naipe - 1) * 13 + this.valor;
    }
    
    //Usa o valor em número para dar um nome por extenso à carta quando necessário e o retorna.
    valorToString(){
      switch(this.valor){
        case 1:
          return "Ás";
        case 11:
          return "Valete";
        case 12:
          return "Dama";
        case 13:
          return "Rei";
        default:
          return this.valor.toString();
      }
    }
      
    //Usa o naipe em número para retornar o nome dele em texto.
    naipeToString(){
      switch(this.naipe){
        case 1:
          return "Paus";        
        case 2:
          return "Copas";        
        case 3:
          return "Espadas";        
        case 4:
          return "Ouros";        
        default:
          return "Naipe Inválido";
      }
    }
    
    //Usa um id externo e o compara com o interno para saber se a carta é igual. Retorna verdadeiro ou falso.
    ehIgual(id){
      return id === this.pegarID();
    }
    
    //Usa duas das funções internas acima para retornar o nome da carta por extenso.
    pegarNome(){
      return this.valorToString() + " de " + this.naipeToString();
    }
  }
  
  //Guarda valor verdadeiro ou falso para o programa saber se o jogo já terminou.
  var finalizado = false;
  
  var tentativas;
  
  var cartaAleatoria = gerarCartaAleatoria();
  
  var elementoTentativas = document.getElementById("texto-tentativas");
  var elementoEscolhida = document.getElementById("texto-escolhida");
  var elementoResultado = document.getElementById("texto-resultado");
  
  reiniciar();
  
  //Função que usa o id da carta selecionada como parâmetro, decide se o chute é correto ou não e comunica ao usuário.
  function chutar(idChute){
    //Se o jogo já foi finalizado, interrompe a função.
    if(finalizado) return;
    
    let cartaChute = criarCartaComID(idChute);
    elementoEscolhida.innerHTML = "Você escolheu " + cartaChute.pegarNome();
    
    //Condição para saber se o chute está correto. Se sim, comunica a vitória ao usuário, guarda o valor verdadeiro em finalizado e interrompe a continuidade da função.
    if(cartaAleatoria.ehIgual(idChute)){
      elementoResultado.innerHTML = "A carta aleatória é "+ cartaAleatoria.pegarNome() +". Parabéns, você acertou!"    
      finalizado = true;
      return;
    }
    
    let textoResultado;
    
    //Estruturas de condição que escrevem a mensagem do resultado com base no chute e na carta aleatória já criada.
    if(cartaChute.valor === cartaAleatoria.valor){
      textoResultado = "O valor está correto";
    }else if(cartaChute.valor < cartaAleatoria.valor){
      textoResultado = "O valor da carta aleatória é maior";
    }else{
      textoResultado = "O valor da carta aleatória é menor";
    }
    
    if(cartaChute.naipe === cartaAleatoria.naipe){
      textoResultado += textoResultado === "O valor está correto"? " e o Naipe também." : ", mas o Naipe está correto.";
    }else{
      textoResultado += textoResultado === "O valor está correto"? ", mas o Naipe está errado.":" e o Naipe está errado.";
    }
    
    elementoResultado.innerHTML = textoResultado;  
    
    atualizarTentativas();
  }
  
  //Função que usa matemática para criar um objeto carta com base em um id e a retorna.
  //Este cálculo funciona somente se a ordem das cartas for a mesma apresentada nesse jogo.
  function criarCartaComID(id){
    let naipe = Math.ceil(id/13);
    let valor = id - ((naipe - 1) * 13);
    
    return new Carta(valor, naipe);
  }
  
  //Função que reinicia o jogo resetando o valor finalizado para falso, o número de tentativas para o inicial, os textos para as condições iniciais e também gera uma nova carta aleatória.
  function reiniciar(){
    finalizado = false;
    tentativas = 7;
    
    elementoTentativas.innerHTML= "Tentativas: " + tentativas;
    elementoEscolhida.innerHTML= "";
    elementoResultado.innerHTML= "";
    
    cartaAleatoria = gerarCartaAleatoria();
  }
  
  //Gera um valor aleatório de 1 a 13 (Ás ao Rei) e um naipe de 1 a 4. Depois os utiliza para criar e retornar um novo objeto Carta.
  function gerarCartaAleatoria(){
    let valorAleatorio = parseInt(Math.random() * 13) + 1;
    let naipeAleatorio = parseInt(Math.random() * 4) + 1;
    return new Carta(valorAleatorio, naipeAleatorio);
  }
  
  //Subtrai uma tentativa a cada carta clicada. Caso as tentativas cheguem a zero, comunica a perda ao usuário e guarda o valor verdadeiro na variável finalizado.
  function atualizarTentativas(){
    tentativas--;
    
    elementoTentativas.innerHTML = "Tentativas: " + tentativas;
    
    if(tentativas <= 0){
      elementoResultado.innerHTML = "Você esgotou suas tentativas. A carta aleatória era "+ cartaAleatoria.pegarNome() + ".";
      
      finalizado = true;
    }
  }