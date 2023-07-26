window.addEventListener('load', function() {
        // Mapeie as páginas reais com suas respectivas URLs
        const pages = {
            "pagina1": "index.html",
            "pagina2": "cart.html",
            "pagina3": "detais.html",
            "pagina4": "finalizar.html",
            // Adicione mais páginas conforme necessário
        };
    
        // Obtenha a parte do URL após o último '/' para determinar a página atual
        const currentPage = window.location.href.split('/').pop().split('.html')[0];
    
        // Verifique se a página atual existe na lista de páginas
        if (pages[currentPage]) {
            // Se a página estiver na lista, redirecione para a página real correspondente
            window.location.href = pages[currentPage];
        } else {
            // Caso contrário, redirecione para uma página padrão ou faça qualquer outra ação necessária
            window.location.href = "index.html"; // Substitua "pagina_padrao.html" pelo caminho da página padrão
        }
    });
    