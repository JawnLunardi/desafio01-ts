import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
  deposit(amount: number): void {
    if (this.validateStatus() && amount > 0) {
      super.deposit(amount + 10);
      console.log(`Depósito especial de R$${amount + 10} realizado.`);
    }
  }
}