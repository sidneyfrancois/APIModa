import { getRepository } from "typeorm";
import { Order } from "../database/entities/Order";

interface IOrderRequest {
  produto_name: string;
  preco_unidade: number;
  quantidade: number;
}

class CreateOrderService {
  async execute({
    produto_name,
    preco_unidade,
    quantidade,
  }: IOrderRequest): Promise<Order> {
    const repository = getRepository(Order);

    const valor_total = preco_unidade * quantidade;

    const order = repository.create({
      produto_name,
      preco_unidade,
      quantidade,
      valor_total,
    });

    await repository.save(order);

    return order;
  }
}

export { CreateOrderService };
