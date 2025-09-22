import { Conta } from './Conta';
import { Cliente } from './Cliente';

export class ContaCorrente extends Conta {
  public limite: number;

  constructor(numero: number, cliente: Cliente, limite: number = 500) {
    super(numero, cliente);
    this.limite = limite;
  }

  sacar(valor: number): void {
    if (valor <= 0) throw new Error("Saque inválido.");
    if (valor > this.saldo + this.limite) throw new Error("Saldo + limite insuficiente.");
    super.sacar(valor);
  }
}
