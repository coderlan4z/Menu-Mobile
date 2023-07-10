document.addEventListener("DOMContentLoaded", function() {
  var urlParams = new URLSearchParams(window.location.search);
  var productId = urlParams.get("id");
  var produto = encontrarProdutoPorId(productId);

  if (produto) {
    exibirDetalhesDoProduto(produto);
  } else {
    exibirMensagemDeErro();
  }
});

var quantidade = 1;

function incrementarQuantidade() {
  quantidade++;
  atualizarQuantidade();
  atualizarPreco();
}

function decrementarQuantidade() {
  if (quantidade > 1) {
    quantidade--;
    atualizarQuantidade();
    atualizarPreco();
  }
}

function atualizarPreco() {
  var quantidadeInput = document.getElementById("quantity");
  var quantidade = parseInt(quantidadeInput.textContent);
  var addToCartButton = document.getElementById("add-to-cart");
  var productId = new URLSearchParams(window.location.search).get("id");
  var produto = encontrarProdutoPorId(productId);

  if (produto) {
    var precoTotal = produto.price * quantidade;
    addToCartButton.textContent = "Adicionar - R$ " + precoTotal.toFixed(2);
  }
}

function atualizarQuantidade() {
  document.getElementById('quantity').textContent = quantidade;
}

function encontrarProdutoPorId(id) {
  for (var i = 0; i < produtos.length; i++) {
    if (produtos[i].id.toString() === id.toString()) {
      return produtos[i];
    }
  }
  return null;
}

function verificarItemExistente(produtos, novoProduto) {
  for (var i = 0; i < produtos.length; i++) {
    var produto = produtos[i];
    if (produto.title === novoProduto.title) {
      produto.quantidade++;
      return true;
    }
  }
  return false;
}

function adicionarAoCarrinho() {
  var productId = new URLSearchParams(window.location.search).get("id");
  var produto = encontrarProdutoPorId(productId);

  if (produto) {
    var quantidadeInput = document.getElementById("quantity");
    var quantidade = parseInt(quantidadeInput.textContent);

    if (isNaN(quantidade) || quantidade <= 0) {
      console.log("Quantidade inválida. Insira um valor numérico maior que zero.");
      return;
    }

    var carrinho = sessionStorage.getItem("carrinho");
    var produtos;

    if (carrinho) {
      produtos = JSON.parse(carrinho);
    } else {
      produtos = [];
    }

    var itemExistente = false;
    for (var i = 0; i < produtos.length; i++) {
      var item = produtos[i];
      if (item.id === produto.id) {
        item.quantidade += quantidade;
        itemExistente = true;
        break;
      }
    }

    if (!itemExistente) {
      var item = {
        id: produto.id,
        title: produto.title,
        price: produto.price,
        quantidade: quantidade,
        image: produto.image,
        description: produto.description // Incluindo a descrição do produto
      };
      produtos.push(item);
    }

    sessionStorage.setItem("carrinho", JSON.stringify(produtos));
    console.log("Item adicionado ao carrinho:", produto);
  } else {
    console.log("Erro ao adicionar item ao carrinho. Produto não encontrado.");
  }
}

function exibirDetalhesDoProduto(produto) {
  var imageElement = document.getElementById("product-image");
  var titleElement = document.getElementById("title");
  var descriptionElement = document.getElementById("description");
  var servesElement = document.getElementById("serves");
  var addToCartButton = document.getElementById("add-to-cart");

  imageElement.src = produto.image;
  titleElement.textContent = produto.title;
  descriptionElement.textContent = produto.description;
  servesElement.textContent = "Serve: " + produto.serves + " pessoas";
  addToCartButton.textContent = "Adicionar - R$ " + produto.price.toFixed(2);
}

function exibirMensagemDeErro() {
  var productsDiv = document.querySelector(".products");
  productsDiv.innerHTML = "";

  var noResultsMsg = document.createElement("p");
  noResultsMsg.textContent = "Nenhum produto encontrado.";
  productsDiv.appendChild(noResultsMsg);
}

function goToHome() {
  window.location.href = "index.html";
}
