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
    
                var title = document.createElement("h2");
                title.textContent = produto.title;
                productContainer.appendChild(title);
    
                var description = document.createElement("h3");
                description.textContent = produto.description;
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
    
                if (description.textContent.length > 24) {
                    description.textContent = description.textContent.slice(0, 24) + '...';
                }
    
                productContainer.addEventListener("click", function() {
                    window.location.href = "detail.html?id=" + produto.id;
                });
    
                productsDiv.appendChild(productContainer);
            });
        }
    }
    
    function redirecionarParaDetalhes(id) {
        window.location.href = "detail.html?id=" + id;
        console.log(id);
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
    
            var title = document.createElement("h2");
            title.textContent = produto.title;
            productContainer.appendChild(title);
    
            var description = document.createElement("h3");
            description.textContent = produto.description;
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
    
            if (description.textContent.length > 24) {
                description.textContent = description.textContent.slice(0, 24) + '...';
            }
    
            if (produto.category === "Pratos Principais") {
                principalDiv.appendChild(productContainer);
            } else if (produto.category === "Acompanhamentos") {
                acompanhamentosDiv.appendChild(productContainer);
            } else if (produto.category === "Bebidas") {
                bebidasDiv.appendChild(productContainer);
            }
        });
    }
    
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
    
    var produtos = [
        {
            id: "1",
            category: "Pratos Principais",
            title: "Costelinha Barbecue",
            description: "aaaaaaaaaaaaaa do Costelinha Barbecue",
            serves: 2,
            price: 10.99,
            image: "img-products/costelinha.jpg"
        },
        {
            id: "2",
            category: "Pratos Principais",
            title: "Costelinha",
            description: "aaaaaaaaaaaaaa da Coxinha",
            serves: 3,
            price: 5.99,
            image: "img-products/costelinha.jpg"
        },
        {
            id: "3",
            category: "Acompanhamentos",
            title: "Batata Frita",
            description: "aaaaaaaaaaaaaa da Batata Frita",
            serves: 1,
            price: 7.99,
            image: "img-products/costelinha.jpg"
        },
        {
            id: "4",
            category: "Bebidas",
            title: "Refrigerante",
            description: "aaaaaaaaaaaaaa do Refrigerante",
            serves: 4,
            price: 3.99,
            image: "img-products/costelinha.jpg"
        }
    ];
    
    exibirProdutos();
    