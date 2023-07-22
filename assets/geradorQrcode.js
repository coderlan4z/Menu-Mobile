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
      if(response.status === 0) {
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
// Adiciona um manipulador de eventos ao botão de id "gerar"
document.getElementById("gerar").addEventListener("click", function() {
  gerarQRCodePIX();
});
