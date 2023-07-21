document.getElementById("gerar").addEventListener("click", function() {
        const chavePix = "31987418717"; // Chave PIX pré-definida
        const nomeBeneficiario = "Kelly Jaqueline"; // Nome do beneficiário pré-definido
        const valorTotal = sessionStorage.getItem("total"); // Pegar o valor do sessionStorage
      
        // Concatenar os dados em um formato específico para o PIX
        const dadosPIX = `chave=${chavePix}&nome=${encodeURIComponent(nomeBeneficiario)}&valor=${valorTotal}`;
      
        // Gerar o QR Code usando a biblioteca "qrcode-generator"
        const qr = qrcode(4, "M");
        qr.addData(dadosPIX);
        qr.make();
        const qrCodeImagem = document.createElement("img");
        qrCodeImagem.src = qr.createDataURL(10);
        console.log(qrCodeImagem.src);
      
        // Limpar o conteúdo anterior do container e adicionar a nova imagem do QR Code
        const qrcodeContainer = document.getElementById("qrcodeContainer");
        qrcodeContainer.innerHTML = "";
        qrcodeContainer.appendChild(qrCodeImagem);
      });
      