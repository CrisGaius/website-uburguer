let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmS = document.querySelector('#labelConfirmS')
let validConfirmS = false

let msg = document.querySelector('#msg-es')

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: #ffc400')
        labelNome.innerHTML = 'Nome | Insira pelo menos 3 caracteres'
        nome.setAttribute('style', 'border-color: #ffc400')
    }else{
        labelNome.setAttribute('style', 'color: white')
        labelNome.innerHTML = 'Nome &#x2714'
        nome.setAttribute('style', 'border-color: white')
        validNome = true
    }
})

email.addEventListener('keyup', ()=>{
     if(email.value.indexOf('@') == -1 ){
        labelEmail.setAttribute('style', 'color: #ffc400')
        labelEmail.innerHTML = 'E-mail | Insira um e-mail válido'
        email.setAttribute('style', 'border-color:#ffc400')
     }else{
        labelEmail.setAttribute('style', 'color: white')
        labelEmail.innerHTML = 'E-mail &#x2714'
        email.setAttribute('style', 'border-color: white')
        validEmail = true
     }
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length <=5){
        labelSenha.setAttribute('style', 'color: #ffc400')
        labelSenha.innerHTML = 'Senha | Insira pelo menos 6 caracteres'
        senha.setAttribute('style', 'border-color: #ffc400')
    }else{
        labelSenha.setAttribute('style', 'color: ')
        labelSenha.innerHTML = 'Senha &#x2714'
        senha.setAttribute('style', 'border-color: white')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', ()=>{
    if(senha.value != confirmSenha.value){
        labelConfirmS.setAttribute('style', 'color: #ffc400')
        labelConfirmS.innerHTML = 'Confirmar senha | As senhas não coincidem'
        confirmSenha.setAttribute('style', 'border-color: #ffc400')
    }else{
        labelConfirmS.setAttribute('style', 'color: white')
        labelConfirmS.innerHTML = 'Confirmar senha &#x2714'
        confirmSenha.setAttribute('style', 'border-color: white')
        validConfirmS = true
    }
})

function cadastrar(){
    if(validNome && validSenha && validEmail && validConfirmS){
        msg.setAttribute('style', 'color: white; background-color: green; display: block;');
        msg.innerHTML = 'Cadastrando usuário...'
    }else{
        msg.setAttribute('style', 'display: block')
        msg.innerHTML = 'Preencha os campos corretamente'
    }      
}
