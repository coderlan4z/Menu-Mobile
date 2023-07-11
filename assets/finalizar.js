document.addEventListener("DOMContentLoaded", function() {
    // Recupera o resumo do pedido do sessionStorage
    var resumoPedido = sessionStorage.getItem("resumoPedido");
  
    // Exibe o resumo do pedido no elemento com o ID "detalhes-pedido"
    var detalhesPedido = document.getElementById("detalhes-pedido");
    detalhesPedido.textContent = resumoPedido;
  
    // Limpa o resumo do pedido do sessionStorage
    sessionStorage.removeItem("resumoPedido");
  });

  function goToCart () {
    window.location.href = "cart.html";
}
document.addEventListener("DOMContentLoaded", function() {
    
  });
  

function criarMensagemWhatsApp() {
  var nome = document.getElementById("nome").value;
  var endereco = document.getElementById("endereco").value;
  var resumoPedido = sessionStorage.getItem("resumoPedido");

  var mensagemErro = document.getElementById("mensagem-erro");

  if (nome === "" || endereco === "") {
    // Exibe a mensagem de erro para inserir os dados
    mensagemErro.textContent = "Por favor, preencha todos os campos de texto.";
    return; // Retorna e interrompe a execução da função
  }

  mensagemErro.textContent = ""; // Limpa a mensagem de erro

  if (resumoPedido) {
    // Adiciona as informações de nome e endereço ao resumo do pedido
    var enderecoFormatado = endereco.replace(/(\d+)\s*(.*)/, "$1\n$2\n---------------------------------------\n");
    var pedidoComInfo = "Nome: " + nome + "\nEndereço: " + enderecoFormatado + resumoPedido;

    // Armazena o resumo do pedido atualizado no sessionStorage
    sessionStorage.setItem("resumoPedido", pedidoComInfo);

    // Cria a mensagem para enviar pelo WhatsApp
    var mensagem = pedidoComInfo.replace(/\n/g, "%0A");

    // Abre o WhatsApp com a mensagem preenchida
    var urlWhatsApp = "https://wa.me/5531996128966?text=" + mensagem;
    window.open(urlWhatsApp, "_blank");
  }
}

  
  
  
  
  
  
  
  
  
  