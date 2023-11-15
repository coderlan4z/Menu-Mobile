function criarMensagemWhatsApp() {
  var nome = document.getElementById('nome').value;
  var contato = document.getElementById('phone').value;
  var rua = document.getElementById('rua').value;
  var numero = document.getElementById('numero').value;
  var bairro = document.getElementById('bairro').value;
  var complemento = document.getElementById('complemento').value;
  var resumoPedido = sessionStorage.getItem("resumoPedido");
  var endereco = "Rua " + rua + ', ' + numero + "\n" + "Bairro " + bairro + "\n" + complemento;
  var mensagemErro = document.getElementById("mensagem-erro");

  if (nome === "" || endereco === "" || contato === "") {
    // Exibe a mensagem de erro para inserir os dados
    mensagemErro.textContent = "Por favor, preencha todos os campos de texto.";
    return; // Retorna e interrompe a execução da função
  }

  mensagemErro.textContent = ""; // Limpa a mensagem de erro

  if (resumoPedido) {
    var meuPedido = "--------------Meu pedido--------------\n\n";
    var contatoPedido = "Contato: " + contato + "\n";
    var enderecoFormatado = endereco + "\n--------------------------------------\n\n";
    var pedidoComInfo = meuPedido + "Nome: " + nome + "\n" + contatoPedido + "Endereço: " + enderecoFormatado + resumoPedido;

    // Envia os itens do pedido para o servidor
    enviarPedidoParaServidor(nome, contato, endereco, resumoPedido);

    // Cria a mensagem para enviar pelo WhatsApp
    var mensagem = pedidoComInfo.replace(/\n/g, "%0A");

    // Abre o WhatsApp com a mensagem preenchida
    var urlWhatsApp = "https://wa.me/5531996128966?text=" + mensagem;
    window.open(urlWhatsApp, "_blank");
  }
}

function enviarPedidoParaServidor(nome, contato, endereco, resumoPedido) {
  // Faz uma requisição POST para o servidor
  fetch('http://localhost:3000/salvar-pedido', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome: nome,
      contato: contato,
      endereco: endereco,
      resumoPedido: resumoPedido,
    }),
  })
    .then(response => response.json())
    .then(data => console.log('Pedido enviado para o servidor:', data))
    .catch(error => console.error('Erro ao enviar pedido para o servidor:', error));
}
