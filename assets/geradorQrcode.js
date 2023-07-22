function gerarQRCodePIX() {
  // Dados para a solicitação
  const nome = "Kelly Jaqueline Siqueira";
  const cidade = "Sete Lagoas";
  const chavePix = "kellyjsborges@gmail.com";
  const valor = parseFloat(sessionStorage.getItem('total'));

  // URL da API
  const url = `https://gerarqrcodepix.com.br/api/v1?nome=${nome}&cidade=${cidade}&chave=${chavePix}&valor=${valor.toFixed(2)}&saida=qr`;
  const url2 = `https://gerarqrcodepix.com.br/api/v1?nome=${nome}&cidade=${cidade}&chave=${chavePix}&valor=${valor.toFixed(2)}&saida=br`;

  console.log(url);
  console.log(url2);

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

  // Faz a segunda solicitação HTTP para obter o "brcode"
  fetch(url2, {
    method: "GET",
    mode: "no-cors",
  })
  .then(response => {
    console.log(response);
    return response.json(); // Converte a resposta para JSON
  })
  .then(data => {
    const jsonString = JSON.stringify(data); // Converte o JSON em texto

    console.log(jsonString); // Exibe a string JSON no console ou faça qualquer outra manipulação necessária

    const brcode = data.brcode;

    const textoDiv = document.getElementById("texto");
    textoDiv.innerHTML = '';

    const textoParagrafo = document.createElement("p");
    textoParagrafo.textContent = brcode;

    textoDiv.appendChild(textoParagrafo);

    console.log(brcode);
  })
      // Obtém o valor do campo "brcode" da resposta JSON
 // Exibe o valor do "brcode" no console ou faça qualquer outra manipulação necessária
}

// Adiciona um manipulador de eventos ao botão de id "gerar"
document.getElementById("gerar").addEventListener("click", function () {
  gerarQRCodePIX();
});
