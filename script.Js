function tabuada(){
 let num = document.getElementById('txtn')
 let tab = document.getElementById('seltab')
 if (num.value.length == 0 ) { // verigica se algum número foi digitado
    window.alert('Por favor digite um número !')
 }else{
    let n = Number(num.value)//Number() transforma o texto que o usuário digitou em um número, porque o valor de um input é sempre uma string por padrão.Exemplo: se o usuário digitou "5", agora n será 5 como número.

    let c = 1 // onde a tabuada vai começar a contar

    tab.innerHTML = '' // limpa para mostra a outra tabuada
    while (c <= 10){
        let item = document.createElement('option') // cria o elemeto opção
        item.text = `${n} x ${c} = ${n * c}` //define o que aparece nessa linha (por exemplo “5 x 3 = 15”).
        item.value = `tab ${c}` // mostra qual item foi selecionado
        tab.appendChild(item) //Cada repetição do loop vai criar uma nova linha da tabuada no select.
        c++
    }
 }
}