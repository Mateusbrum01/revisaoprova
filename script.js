function pedirInformacoes() {
    alert("Bem-vindo ao site de revisão para a prova!");
    let nome = prompt("Por favor, informe seu nome:");
    let email = prompt("Agora, informe seu principal email:");
    if (nome && email) {
        alert(`Obrigado, ${nome}! Recebemos suas informações com sucesso. Bem-vindo!`);
    } else {
        alert("Você não preencheu todas as informações, tente novamente.");
    }
}

window.onload = pedirInformacoes;