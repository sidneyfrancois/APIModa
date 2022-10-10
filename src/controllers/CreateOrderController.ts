import { Request, Response } from "express";
import { CreateOrderService } from "../services/CreateOrderService";

class CreateOrderController {
  async handle(request: Request, response: Response) {
    const { produto_name, preco_unidade, quantidade } = request.body;

    const service = new CreateOrderService();

    const result = await service.execute({
      produto_name,
      preco_unidade,
      quantidade,
    });

    return response.json(result);
  }
}

export { CreateOrderController };
