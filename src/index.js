// Inicializando o carrinho
let carrinho = [];

// Função para adicionar produtos ao carrinho
function adicionarProdutoAoCarrinho() {
    let opcao = prompt("Escolha um produto: 1 - Camisa, 2 - Calça, 3 - Sapato, 4 - Boné");
    
    // Convertendo a escolha para um índice do array
    let produtoEscolhido = produtosDisponiveis[opcao - 1];

    if (produtoEscolhido) {
        let quantidade = parseInt(prompt(`Quantas unidades de ${produtoEscolhido.nome} você deseja adicionar?`));
        
        if (confirm(`Você deseja adicionar ${quantidade} ${produtoEscolhido.nome}(s) ao carrinho?`)) {
            let itemCarrinho = {
                nome: produtoEscolhido.nome,
                preco: produtoEscolhido.preco,
                quantidade: quantidade,
                subtotal: produtoEscolhido.preco * quantidade
            };
            
            carrinho.push(itemCarrinho);
            alert(`${produtoEscolhido.nome} adicionado ao carrinho!`);
        }
    } else {
        alert("Opção inválida! Tente novamente.");
    }
}

// Função para visualizar o carrinho
function visualizarCarrinho() {
    if (carrinho.length === 0) {
        alert("O carrinho está vazio.");
    } else {
        let mensagem = "Itens no seu carrinho:\n\n";
        let total = 0;

        carrinho.forEach(item => {
            mensagem += `${item.nome} - Preço: R$${item.preco}, Quantidade: ${item.quantidade}, Subtotal: R$${item.subtotal}\n`;
            total += item.subtotal;
        });

        mensagem += `\nTotal da compra: R$${total}`;
        alert(mensagem);
    }
}

// Função principal que inicia o sistema
function iniciarCompra() {
    let continuar = true;
    
    while (continuar) {
        let acao = prompt("O que você deseja fazer? 1 - Adicionar Produto, 2 - Visualizar Carrinho, 3 - Sair");
        
        if (acao === '1') {
            adicionarProdutoAoCarrinho();
        } else if (acao === '2') {
            visualizarCarrinho();
        } else if (acao === '3') {
            continuar = false;
            if (carrinho.length > 0) {
                // Calculando o total final ao sair
                let totalFinal = carrinho.reduce((total, item) => total + item.subtotal, 0);
                alert(`O valor total da sua compra é: R$${totalFinal}. Obrigado pela compra!`);
            } else {
                alert("Obrigado pela visita!");
            }
        } else {
            alert("Opção inválida!");
        }
    }
}
