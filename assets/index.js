document.addEventListener("DOMContentLoaded", function() {
    var searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", function() {
      this.classList.add("clicked");
      setTimeout(function() {
        searchButton.classList.remove("clicked");
      }, 50);
  
      pesquisar();
    });
  
    var siteSearch = document.getElementById("site-search");
    siteSearch.addEventListener("input", function() {
      if (this.value.trim() === "") {
        exibirProdutos();
      }
    });
  
    exibirProdutos();
  
    // Adiciona ouvintes de eventos aos contêineres de produtos
    var productContainers = document.querySelectorAll(".product-principal");
    productContainers.forEach(function(container) {
      container.addEventListener("click", function() {
        var productId = this.dataset.productId;
        redirecionarParaDetalhes(productId);
      });
    });
  });
  
  var searchButton = document.getElementById("cart-button");
  searchButton.addEventListener("click", function() {
    this.classList.add("clicked");
    setTimeout(function() {
      searchButton.classList.remove("clicked");
    }, 50);
  });
  
  function pesquisar() {
    var searchTerm = document.getElementById("site-search").value.toLowerCase();
    if (searchTerm.trim() === "") {
      return;
    }
  
    var productsDiv = document.querySelector(".products");
    productsDiv.innerHTML = "";
  
    var filteredProdutos = produtos.filter(function(produto) {
      var title = produto.title.toLowerCase();
      var description = produto.description.toLowerCase();
  
      return title.includes(searchTerm) || description.includes(searchTerm);
    });
  
    if (filteredProdutos.length === 0) {
      var noResultsMsg = document.createElement("p");
      noResultsMsg.textContent = "Nenhum produto encontrado.";
      productsDiv.appendChild(noResultsMsg);
    } else {
      filteredProdutos.forEach(function(produto) {
        var productContainer = document.createElement("div");
        productContainer.classList.add("product-principal");
        productContainer.dataset.productId = produto.id;
  
        var title = document.createElement("h2");
        var truncatedTitle = produto.title.length > 20 ? produto.title.slice(0, 20) + '...' : produto.title;
        title.textContent = truncatedTitle;
        productContainer.appendChild(title);
  
        var description = document.createElement("h3");
        var truncatedDescription = produto.description.length > 24 ? produto.description.slice(0, 24) + '...' : produto.description;
        description.textContent = truncatedDescription;
        productContainer.appendChild(description);
  
        var serves = document.createElement("h5");
        serves.textContent = "Serve: " + produto.serves + " pessoas";
        productContainer.appendChild(serves);
  
        var price = document.createElement("h4");
        price.textContent = "R$ " + produto.price.toFixed(2);
        productContainer.appendChild(price);
  
        var image = document.createElement("img");
        image.src = produto.image;
        image.alt = "Imagem do Produto";
        productContainer.appendChild(image);
  
        productsDiv.appendChild(productContainer);
      });
    }
  }
  
  function redirecionarParaDetalhes(id) {
    var url = "detail.html?id=" + id;
    window.location.href = url;
  }
  
  function exibirProdutos() {
    var productsDiv = document.querySelector(".products");
    productsDiv.innerHTML = "";
  
    var principalDiv = document.createElement("div");
    principalDiv.classList.add("principal");
  
    var principalTitle = document.createElement("h1");
    principalTitle.textContent = "Pratos Principais";
    principalDiv.appendChild(principalTitle);
  
    productsDiv.appendChild(principalDiv);
  
    var acompanhamentosDiv = document.createElement("div");
    acompanhamentosDiv.classList.add("principal");
  
    var acompanhamentosTitle = document.createElement("h1");
    acompanhamentosTitle.textContent = "Acompanhamentos";
    acompanhamentosDiv.appendChild(acompanhamentosTitle);
  
    productsDiv.appendChild(acompanhamentosDiv);
  
    var bebidasDiv = document.createElement("div");
    bebidasDiv.classList.add("principal");
  
    var bebidasTitle = document.createElement("h1");
    bebidasTitle.textContent = "Bebidas";
    bebidasDiv.appendChild(bebidasTitle);
  
    productsDiv.appendChild(bebidasDiv);
  
    produtos.forEach(function(produto) {
      var productContainer = document.createElement("div");
      productContainer.classList.add("product-principal");
      productContainer.dataset.productId = produto.id;
  
      var title = document.createElement("h2");
      var truncatedTitle = produto.title.length > 20 ? produto.title.slice(0, 20) + '' : produto.title;
      title.textContent = truncatedTitle;
      productContainer.appendChild(title);
  
      var description = document.createElement("h3");
      var truncatedDescription = produto.description.length > 22 ? produto.description.slice(0, 22) + '...' : produto.description;
      description.textContent = truncatedDescription;
      productContainer.appendChild(description);
  
      var serves = document.createElement("h5");
      serves.textContent = "Serve " + produto.serves + " pessoas";
      productContainer.appendChild(serves);
  
      var price = document.createElement("h4");
      price.textContent = "R$ " + produto.price.toFixed(2);
      productContainer.appendChild(price);
  
      var image = document.createElement("img");
      image.src = produto.image;
      image.alt = "Imagem do Produto";
      productContainer.appendChild(image);
  
      if (produto.category === "Pratos Principais") {
        principalDiv.appendChild(productContainer);
      } else if (produto.category === "Acompanhamentos") {
        acompanhamentosDiv.appendChild(productContainer);
      } else if (produto.category === "Bebidas") {
        bebidasDiv.appendChild(productContainer);
      }
    });
  }
  
  exibirProdutos();
  