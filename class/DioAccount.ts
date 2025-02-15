export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit(amount: number): void {
    if (this.validateStatus() && amount > 0) {
      this.balance += amount;
      console.log(`Depósito de R$${amount} realizado. Saldo atual: R$${this.balance}`);
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus() && this.balance >= amount && amount > 0) {
      this.balance -= amount;
      console.log(`Saque de R$${amount} realizado. Saldo atual: R$${this.balance}`);
    } else {
      console.log("Saque não permitido. Verifique o saldo ou o status da conta.");
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
