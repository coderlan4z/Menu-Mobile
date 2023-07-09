document.addEventListener("DOMContentLoaded", function() {
        var productId = "1"; // Insira o ID do produto desejado aqui
        var produto = findProdutoById(productId);
    
        if (produto) {
            document.getElementById("title").textContent = produto.title;
            document.getElementById("description").textContent = produto.description;
            document.getElementById("price").textContent = "R$ " + produto.price.toFixed(2);
            document.getElementById("product-image").src = produto.image;
        } else {
            document.getElementById("title").textContent = "Produto não encontrado";
        }
    });
    
    function findProdutoById(id) {
        for (var i = 0; i < produtos.length; i++) {
            if (produtos[i].id === id) {
                return produtos[i];
            }
        }
        return null;
    }
    
    // Dados dos produtos
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
        // Adicione mais produtos conforme necessário
    ];
    