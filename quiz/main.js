import entradaDados from 'readline-sync'; 
import { questoesSelecionadas } from './perguntas.js'; 

let nomeUsuario = entradaDados.question('Digite seu nome: '); 

console.log(`\n ## Seja bem-vindo ${nomeUsuario} ##\n`);

 questoesSelecionadas();

