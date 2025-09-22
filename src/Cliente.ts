import { Conta } from "./Conta";

export class Cliente {
  public nome: string;
  public cpf: string;
  public contas: Conta[] = [];
  public chavesPix: Record<string, Conta> = {};

  constructor(nome: string, cpf: string) {
    this.nome = nome;
    this.cpf = cpf;
  }

  adicionarConta(conta: Conta): void {
    this.contas.push(conta);
  }

  registrarChavePix(tipo: string, chave: string, conta: Conta): void {
    this.chavesPix[chave] = conta;
  }

  getContaPorChavePix(chave: string): Conta | undefined {
    return this.chavesPix[chave];
  }

  toJSON() {
    return {
      nome: this.nome,
      contas: this.contas.map(c => c.toJSON()),
      chavesPix: Object.keys(this.chavesPix)
    };
  }
}
