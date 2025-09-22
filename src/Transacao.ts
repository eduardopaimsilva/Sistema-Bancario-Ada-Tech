import { Conta } from './Conta';

export class Transacao {
  public tipo: string;
  public valor: number;
  public data: Date;

  constructor(tipo: string, valor: number, data: Date = new Date()) {
    this.tipo = tipo;
    this.valor = valor;
    this.data = data;
  }

  static criarTransferencia(valor: number, contaOrigem: Conta, contaDestino: Conta): void {
    const debito = new Transacao("TRANSFERENCIA_DEBITO", -valor);
    const credito = new Transacao("TRANSFERENCIA_CREDITO", valor);

    contaOrigem._registrarTransacao(debito);
    contaDestino._registrarTransacao(credito);
  }
}
