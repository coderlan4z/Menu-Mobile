document.addEventListener("DOMContentLoaded", function() {
  var carrinho = sessionStorage.getItem("carrinho");
  if (carrinho) {
    var produtos = JSON.parse(carrinho);
    renderizarProdutos(produtos);
  } else {
    exibirCarrinhoVazio();
  }
});



function renderizarProdutos(produtos) {
  var cartItems = document.getElementById("cart-items");
  var totalElement = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  totalElement.textContent = "";

  var total = 0;

  produtos.forEach(function(produto, index) {
    var divProduto = document.createElement("div");
    divProduto.classList.add("product");

    var divImagem = document.createElement("div");
    divImagem.classList.add("product-image");

    var img = document.createElement("img");
    img.src = produto.image;
    img.alt = "Imagem do Produto";
    divImagem.appendChild(img);
    divProduto.appendChild(divImagem);

    var divDetalhes = document.createElement("div");
    divDetalhes.classList.add("product-details");

    var divTitulo = document.createElement("div");
    divTitulo.classList.add("product-title");

    var title = document.createElement("h1");
    var truncatedTitle = produto.title.length > 20 ? produto.title.slice(0, 20) + '' : produto.title;
    title.textContent = truncatedTitle;
    divTitulo.appendChild(title);
    divDetalhes.appendChild(divTitulo);

    var divDescricao = document.createElement("div");
    divDescricao.classList.add("product-description");

    var description = document.createElement("h3");
    description.textContent = cortarTexto(produto.description, 28);
    divDescricao.appendChild(description);
    divDetalhes.appendChild(divDescricao);

    var price = document.createElement("h4");
    price.textContent = "R$ " + produto.price.toFixed(2);
    divDetalhes.appendChild(price);

    var divQuantidade = document.createElement("div");
    divQuantidade.classList.add("quantidade");

    var decrementButton = document.createElement("button");
    if (produto.quantidade > 1) {
      decrementButton.innerHTML = '<i class="fas fa-minus"></i>';
    } else {
      decrementButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    }
    decrementButton.addEventListener("click", function() {
      diminuirQuantidade(index);
    });
    divQuantidade.appendChild(decrementButton);

    var quantidadeText = document.createElement("span");
    quantidadeText.textContent = produto.quantidade;
    divQuantidade.appendChild(quantidadeText);

    var incrementButton = document.createElement("button");
    incrementButton.innerHTML= '<i class="fas fa-plus"></i>';
    incrementButton.addEventListener("click", function() {
      aumentarQuantidade(index);
    });
    divQuantidade.appendChild(incrementButton);

    divDetalhes.appendChild(divQuantidade);

    divProduto.appendChild(divDetalhes);

    cartItems.appendChild(divProduto);

    total += produto.price * produto.quantidade;
  });

  var totalText = document.createElement("h3");
  totalText.textContent = "Total R$" + total.toFixed(2);
  totalElement.appendChild(totalText);

  var finalizarCompraButton = document.createElement("button");
  finalizarCompraButton.textContent = "Finalizar Compra";
  finalizarCompraButton.addEventListener("click", finalizarCompra);
  totalElement.appendChild(finalizarCompraButton);

  if (produtos.length === 0) {
    exibirCarrinhoVazio();
  }
}

function cortarTexto(texto, limite) {
  if (texto.length <= limite) {
    return texto;
  } else {
    var textoCortado = texto.slice(0, limite);
    return textoCortado.trim() + "...";
  }
}

function atualizarBotaoDiminuir(index, decrementButton) {
  var carrinho = sessionStorage.getItem("carrinho");
  var produtos;

  if (carrinho) {
    produtos = JSON.parse(carrinho);

    if (index >= 0 && index < produtos.length) {
      if (produtos[index].quantidade === 1) {
        decrementButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
      } else {
        decrementButton.innerHTML = '<i class="fas fa-minus"></i>';
      }
    }
  }
}

function exibirCarrinhoVazio() {
  var cartItems = document.getElementById("cart-items");
  var totalElement = document.getElementById("cart-total");
  cartItems.innerHTML = "Sua sacola está vazia.";
  totalElement.textContent = "";
}

function adicionarAoCarrinho(id, nome, preco, imagem, descricao) {
  var carrinho = sessionStorage.getItem("carrinho");
  var produtos;

  if (carrinho) {
    produtos = JSON.parse(carrinho);
  } else {
    produtos = [];
  }

  var item = {
    id: id,
    title: nome,
    price: preco,
    quantidade: 1,
    image: imagem,
    description: descricao
  };
  produtos.push(item);

  sessionStorage.setItem("carrinho", JSON.stringify(produtos));

  renderizarProdutos(produtos);
}

function removerDoCarrinho(index) {
  var carrinho = sessionStorage.getItem("carrinho");
  var produtos;

  if (carrinho) {
    produtos = JSON.parse(carrinho);

    if (index >= 0 && index < produtos.length) {
      produtos.splice(index, 1);
      sessionStorage.setItem("carrinho", JSON.stringify(produtos));
      renderizarProdutos(produtos);
    }
  }
}

function aumentarQuantidade(index) {
  var carrinho = sessionStorage.getItem("carrinho");
  var produtos;

  if (carrinho) {
    produtos = JSON.parse(carrinho);

    if (index >= 0 && index < produtos.length) {
      produtos[index].quantidade++;
      sessionStorage.setItem("carrinho", JSON.stringify(produtos));
      renderizarProdutos(produtos);
    }
  }
}

function diminuirQuantidade(index) {
  var carrinho = sessionStorage.getItem("carrinho");
  var produtos;

  if (carrinho) {
    produtos = JSON.parse(carrinho);

   if (index >= 0 && index < produtos.length) {
      if (produtos[index].quantidade > 1) {
        produtos[index].quantidade--;
        sessionStorage.setItem("carrinho", JSON.stringify(produtos));
        renderizarProdutos(produtos);
      } else {
        produtos.splice(index, 1);
        sessionStorage.setItem("carrinho", JSON.stringify(produtos));
        renderizarProdutos(produtos);
      }
    }
  }
}

function goToHome(){
  window.location.href = "index.html";
}

function finalizarCompra() {
  // Implemente a lógica para finalizar a compra aqui
  console.log("Compra finalizada");
}
