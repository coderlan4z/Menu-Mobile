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
  }
  
  function decrementarQuantidade() {
    if (quantidade > 1) {
      quantidade--;
      atualizarQuantidade();
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
  
  function adicionarAoCarrinho() {
    var productId = new URLSearchParams(window.location.search).get("id");
    var produto = encontrarProdutoPorId(productId);
  
    if (produto) {
      var item = {
        id: produto.id,
        title: produto.title,
        price: produto.price,
        quantidade: quantidade,
        image: produto.image,
        description: produto.description // Incluindo a descrição do produto
      };
  
      var carrinho = sessionStorage.getItem("carrinho");
      var produtos;
  
      if (carrinho) {
        produtos = JSON.parse(carrinho);
      } else {
        produtos = [];
      }
  
      produtos.push(item);
      sessionStorage.setItem("carrinho", JSON.stringify(produtos));
  
      console.log("Item adicionado ao carrinho:", item);
    } else {
      console.log("Erro ao adicionar item ao carrinho. Produto não encontrado.");
    }
  }
  
  function exibirDetalhesDoProduto(produto) {
    var imageElement = document.getElementById("product-image");
    var titleElement = document.getElementById("title");
    var descriptionElement = document.getElementById("description");
    var priceElement = document.getElementById("price");
  
    imageElement.src = produto.image;
    titleElement.textContent = produto.title;
    descriptionElement.textContent = produto.description;
    priceElement.textContent = "R$ " + produto.price.toFixed(2);
  }
  
  function exibirMensagemDeErro() {
    var titleElement = document.getElementById("title");
    titleElement.textContent = "Produto não encontrado";
  }
  