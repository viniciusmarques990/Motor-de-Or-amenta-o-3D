class Asset3D {
  constructor(nome, horasEstimadas) {
    this.nome = nome;
    this.horasEstimadas = horasEstimadas;
  }
}

function calcularCustoAsset(horas, custoHora) {
  return horas * custoHora;
}

class CalculadoraOrcamento {
  constructor(custoDaHora) {
    this.custoDaHora = custoDaHora;
    this.assets = [];
  }

  inserirAsset(asset) {
    if (asset.horasEstimadas <= 0) {
      return;
    }

    this.assets.push(asset);
  }

  gerarRelatorioFinanceiro() {
    let custoTotal = 0;

    for (let i = 0; i < this.assets.length; i++) {
      custoTotal += calcularCustoAsset(
        this.assets[i].horasEstimadas,
        this.custoDaHora
      );
    }

    if (custoTotal > 0) {
      return `Orçamento total aprovado: R$ ${custoTotal}`;
    }

    return "Orçamento zerado";
  }
}

const calc = new CalculadoraOrcamento(50);

calc.inserirAsset(
  new Asset3D("Cenário Floresta", 20)
);

console.log(calc.gerarRelatorioFinanceiro());