import { Transacao } from './Transacao';
import { Cliente } from './Cliente';

export abstract class Conta {
  #saldo: number = 0;
  public numero: number;
  public cliente: Cliente;
  public transacoes: Transacao[] = [];

  constructor(numero: number, cliente: Cliente) {
    if (new.target === Conta) {
      throw new Error("Conta é abstrata e não pode ser instanciada diretamente.");
    }
    this.numero = numero;
    this.cliente = cliente;
  }

  get saldo(): number {
    return this.#saldo;
  }

  depositar(valor: number): void {
    if (valor <= 0) throw new Error("Depósito inválido.");
    this.#saldo += valor;
    this._registrarTransacao(new Transacao("DEPOSITO", valor));
  }

  sacar(valor: number): void {
    if (valor <= 0) throw new Error("Saque inválido.");
    if (valor > this.#saldo) throw new Error("Saldo insuficiente.");
    this.#saldo -= valor;
    this._registrarTransacao(new Transacao("SAQUE", -valor));
  }

  transferir(valor: number, contaDestino: Conta): void {
    this.sacar(valor);
    contaDestino.depositar(valor);
    Transacao.criarTransferencia(valor, this, contaDestino);
  }

  _registrarTransacao(transacao: Transacao): void {
    this.transacoes.push(transacao);
  }

  toJSON() {
    return {
      numero: this.numero,
      cliente: this.cliente.nome,
      saldo: this.#saldo,
      transacoes: this.transacoes
    };
  }
}
