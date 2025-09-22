import { Cliente } from './Cliente';
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

// Criar clientes
const cliente1 = new Cliente("Maria", "123.456.789-00");
const cliente2 = new Cliente("João", "987.654.321-00");

// Criar contas
const conta1 = new ContaCorrente(1, cliente1, 1000);
const conta2 = new ContaPoupanca(2, cliente2);

// Vincular contas aos clientes
cliente1.adicionarConta(conta1);
cliente2.adicionarConta(conta2);

// Registrar PIX
cliente1.registrarChavePix("email", "maria@email.com", conta1);
cliente2.registrarChavePix("cpf", "987.654.321-00", conta2);

// Operações
conta1.depositar(2000);
conta1.transferir(500, conta2);
conta2.renderJuros();

// Mostrar resultados
console.log(JSON.stringify(cliente1, null, 2));
console.log(JSON.stringify(cliente2, null, 2));
