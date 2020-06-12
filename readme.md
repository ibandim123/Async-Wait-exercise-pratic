  Para Entender o conceito de Async/Await é necessário ter um conhecimento prévio do uso das Promises.
  
  Promises => Ela faz uma chamada e retorna se ela dê certo ou não. no site "https://web.dev/promises/" fala que as Promises simplifica as computações assíncronas. Pois antes do ES6+, o JavaScript lia os códigos de forma síncrona e agora ele pode ler de forma simultânea os códigos. 
  segundo o site > "
  
  JavaScript é de thread único, o que significa que dois bits de script não podem ser executados ao mesmo tempo; eles têm que correr um após o outro. Nos navegadores, o JavaScript compartilha um encadeamento com uma carga de outras coisas que diferem de navegador para navegador. Mas normalmente o JavaScript está na mesma fila que pintura, atualização de estilos e manipulação de ações do usuário (como destacar texto e interagir com controles de formulário). A atividade em uma dessas coisas atrasa as outras.

Como ser humano, você é multithread. Você pode digitar com vários dedos, pode dirigir e manter uma conversa ao mesmo tempo. A única função de bloqueio com a qual precisamos lidar é o espirro, onde toda a atividade atual deve ser suspensa durante o período do espirro. "

As Promises tem 4 estados:
* Cumprida - Ação bem-sucedida!
* Rejeitada - Ação Falha!
* Espera/Pendente - Ainda não cumpriu 
* liquidado - Já entregou uma resposta.
   
   Sintaxe => new promisse ((resolve, reject) =>{});
              (váriavel).then(()=>{});
              (váriavel).catch(()=>{});
              
Exemplos:
//Uso antigo:

function sumNumber(){
    let sum = 1 + 1;

    if(sum == 2){
        console.log('Yeah!!')
    }else{
        console.log('Oh noo T_T')
    }
}

sumNumber()

// Uso da Promise com os mesmo próposito: 

let a = new Promise((resolve,reject) =>{

    let sum = 1 + 1;

    if(sum == 2){
        resolve()
    }else{
        reject()
    }
});

a.then((mens) =>{console.log('Goord Work!')});
a.catch((mens)=>{console.log('Try Again')})

=========================================================================

