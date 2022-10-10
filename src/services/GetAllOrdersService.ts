import { getRepository } from "typeorm";
import { Order } from "../database/entities/Order";

class GetAllOrdersService {
  async execute(): Promise<Order[]> {
    const repository = getRepository(Order);

    const orders = await repository.find();

    return orders;
  }
}

export { GetAllOrdersService };
