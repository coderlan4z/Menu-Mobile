function gerarQRCodePIX() {
  // Dados para a solicitação
  const nome = "Kelly Jaqueline Siqueira";
  const cidade = "Sete Lagoas";
  const chavePix = "kellyjsborges@gmail.com";
  const valor = parseFloat(sessionStorage.getItem('total'));

  // URL da API
  const url = `https://gerarqrcodepix.com.br/api/v1?nome=${nome}&cidade=${cidade}&chave=${chavePix}&valor=${valor.toFixed(2)}&saida=qr`;

  console.log(url);
  // Faz a solicitação HTTP para a API usando o fetch
  fetch(url, {
    method: "GET",
    mode: "no-cors",
  })
    .then(response => {
      if (response.status === 0) {
        // Cria o elemento de imagem do QR Code
        const qrCodeImage = document.createElement("img");
        qrCodeImage.src = url;

        // Remove qualquer QR Code anterior
        const qrCodeDiv = document.getElementById("qrcode");
        qrCodeDiv.innerHTML = '';

        // Adiciona a imagem do QR Code na div com id "qrcode"
        qrCodeDiv.appendChild(qrCodeImage);
      } else {
        console.error("Erro ao gerar o QR Code:", response);
      }
    })
    .catch(error => {
      console.error("Erro ao gerar o QR Code:", error);
    });
}

function exibirConteudo() {
  const nome = "Kelly Jaqueline Siqueira";
  const cidade = "Sete Lagoas";
  const chavePix = "kellyjsborges@gmail.com";
  const valor = parseFloat(sessionStorage.getItem('total'));

  const url = `https://gerarqrcodepix.com.br/api/v1?nome=${nome}&cidade=${cidade}&chave=${chavePix}&valor=${valor.toFixed(2)}&saida=br`;

  // Faz a requisição HTTP usando fetch
  fetch(url, {
    method: "GET",
    mode: "no-cors",
  })
    .then(response => {
      // Exibe a URL original da resposta no console
      console.log("URL de resposta:", response.url);

      if (response.status === 0) {
        // Tentar exibir o conteúdo retornado na resposta
        response.text().then(data => {
          console.log("Conteúdo da resposta:", data);
        });
      } else {
        console.error("Erro ao gerar o QR Code:", response);
      }
    })
    .catch(error => {
      console.error("Erro ao gerar o QR Code:", error);
    });
}

// Chama a função para exibir o conteúdo quando a página carregar

// Adiciona um manipulador de eventos ao botão de id "gerar"
document.getElementById("gerar").addEventListener("click", function () {
  gerarQRCodePIX();
  exibirConteudo();
});
