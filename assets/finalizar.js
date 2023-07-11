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
    exibirResumoPedido();
  });
  

  function criarMensagemWhatsApp() {
    var resumoPedido = sessionStorage.getItem("resumoPedido");
  
    if (resumoPedido) {
      var mensagem = resumoPedido.replace(/\n/g, "%0A");
      var urlWhatsApp = "https://wa.me/5531996128966?text=" + mensagem;
      window.open(urlWhatsApp, "_blank");
    }
  }
  
  
  