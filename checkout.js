// ===== SEÇÃO 1: CARRINHO (laços de repetição) =====

function calcularSubtotal(itens) {
  let subtotal = 0;
  for (const item of itens){
    subtotal += item.preco*item.quantidade;
  }
  return subtotal;
}

function contarItens(itens) {
  let total = 0;
  for (const item of itens){
    total += item.quantidade;
  }

  return total;
}


// ===== SEÇÃO 2: CUPOM (estruturas condicionais) =====

function aplicarCupom(subtotal, codigo) {
  let desconto = 0;

  if(codigo === "DESC10"){
    desconto = subtotal*0.10;

  }else if(codigo === "DESC20" && subtotal >= 200){
    desconto === subtotal*0.20;

  }else if (codigo === "FRETEGRATIS"){
    DESCONTO = 15;
  }else{
    //CUPOM INVÁLIDO OU NÃO LEGIVEL.
    desconto = 0;
  }
  //impede que o desconto ultrapasse o subtotal.
  return desconto = Math.min(desconto, Math.max(0,subtotal));
}


// ===== SEÇÃO 3: CHECKOUT (integração) =====

function finalizarCompra(itens, codigoCupom) {
  let subtotal = calcularSubtotal(itens);
  let desconto = aplicarCupom(subtotal, codigoCupom);
  return { subtotal: subtotal, desconto: desconto, total: subtotal - desconto }; // TODO: integrar carrinho e cupom
}


// ===== SEÇÃO 4: TESTES =====

const itens = [
  { nome: "Camiseta", preco: 50, quantidade: 2 },
  { nome: "Tênis", preco: 150, quantidade: 1 }
];
console.log(finalizarCompra(itens, "DESC10"));