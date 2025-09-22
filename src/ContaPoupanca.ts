import { Conta } from "./Conta.js";
import { Cliente } from "./Cliente.js";

export class ContaPoupanca extends Conta {
  public taxaJuros: number;

  constructor(numero: number, cliente: Cliente, taxaJuros: number = 0.01) {
    super(numero, cliente);
    this.taxaJuros = taxaJuros;
  }

  renderJuros(): void {
    const juros = this.saldo * this.taxaJuros;
    this.depositar(juros);
  }
}
