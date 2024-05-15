/*
alunos[0][0] = "Ana"
alunos[0][1] = "10"

alunos[1][0] = "Marcos"
alunos[1][1] = "12"

for(let i = 0; i<alunos.length; i++){
    for(let j = 0; j < alunos[i].length;++j){
        console.log(alunos[i][j])
    }
}


let alunos = new Array(3)
for(let i = 0; i < alunos.length; i++ ){
    alunos[i] = new Array(3)
}


for(let i = 0; i < alunos.length; i++){
    for(let j = 0; j < alunos[i])
    alunos  [elementos] = prompt('Digite o nome do aluno')
}

alert(alunos)

*/

let botao, jogada = 1
let tabuleiro = new Array(3)

for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(3)
}

    
for(let i = 0; i < tabuleiro.length; i++){
    for(let j = 0; j < tabuleiro[i].length;j++){
        botao = document.createElement('button');
        botao.setAttribute('type','button')
        botao.setAttribute('id', "bt" + i + "" + j)
        botao.setAttribute('class', 'btjogo', i)
        botao.setAttribute('onclick','marca' +i+ "" + j + "()")
        botao.append(document.createTextNode(""))
        document.querySelector(".jogoTabuleiro").append(botao)
    }
}

function marca00(){
    marcarCasa("bt00")
}
function marca01(){
    marcarCasa("bt01")
}
function marca02(){
    marcarCasa("bt02")
}
function marca10(){
    marcarCasa("bt10")
}
function marca11(){
    marcarCasa("bt11")
}
function marca12(){
    marcarCasa("bt12")
}
function marca20(){
    marcarCasa("bt20")
}
function marca21(){
    marcarCasa("bt21")
}
function marca22(){
    marcarCasa("bt22")
}






function marcarCasa(nomeBotao){
      
       let a = document.getElementById(nomeBotao)

    if(jogada % 2 == 0){
       a.innerText = "O"
       a.classList.add('O')
    }else{
       a.innerText = "X" 
       a.classList.add('X')

    }
    jogada++
     a.disabled = true
}