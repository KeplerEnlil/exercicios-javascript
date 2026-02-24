function calcularAgua() {
    // Pega o valor que você digitou na caixa
    let peso = document.getElementById('meuPeso').value;
    
    // Conta matemática (35ml por kg)
    let totalAgua = peso * 50; 
    
    // Mostra o resultado na tela
    document.getElementById('resultado').innerText = "Beba " + totalAgua + "ml de água por dia.";
}