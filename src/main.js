/*
Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await do Babel e o
babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios.
// Função delay aciona o .then após 1s

*/


// Funão delay aciona o .then após 1s


const delay = () => new Promise(resolve => setTimeout(resolve, 2000));



async function umPorSegundo() {

        await delay(console.log('1s')),
        await delay(console.log('2s')),
        await delay(console.log('3s'))

}
umPorSegundo();

//umPorSegundo();
