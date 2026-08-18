// 1. Selecionar os elementos importantes (botao, mensagem)
// 2. Verificar se o app pode ser instalado
// 3. Adicionar o evento de instalação no botão
// 4. Verificar se a instalação deu certo

// 1.
const botaoInstalar = document.getElementById("install-button");
const msgInstalar = document.getElementById("install-message");

let eventoInstalacao = null;

// 2.
// O navegador dispara um evento automaticamente, se detectar que o app é instalável
// Para verificar se isso aconteceu:

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    //guardar o evento de instalação para usar depois
    eventoInstalacao = event;
    //fazer o botão de instalação reaparecer
    botaoInstalar.hidden = false;
    //mudar a mensagem: 
    msgInstalar.textContent = "Essa aplicação pode ser instalada.";
});

// 3.
// Fazer o botão de instalar, instalar:
botaoInstalar.addEventListener("click", () => {
    if(!eventoInstalacao){
        //se não existe evento de instalar, não instala
        return;
    }
    //o comando de aparecer para instalar é:
    eventoInstalacao.prompt();

    //depois de instalar, faz o botçao sumir novamente
    botaoInstalar.hidden = true;

});

// 4.
// Se funcionou a instalação o navegador dispara o evento appinstalled

window.addEventListener("appinstalled", () => {
    msgInstalar.textContent = "O app foi instalado com sucesso. Você já pode abrir o aplicativo.";

    botaoInstalar.hidden = true;
    eventoInstalacao = null;
});