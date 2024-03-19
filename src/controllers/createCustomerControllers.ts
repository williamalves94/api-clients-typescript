import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/createCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const customerService = new CreateCustomerService();

    const customer = await customerService.execute();

    reply.send(customer);
  }
}

export { CreateCustomerController };
