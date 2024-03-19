import prismaClient from "../prisma";

class CreateCustomerService {
  async execute() {
    console.log("A Rota foi Chamada");

    return { ok: true };
  }
}

export { CreateCustomerService };
