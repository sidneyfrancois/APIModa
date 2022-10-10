import { Request, Response } from "express";
import { GetAllOrdersService } from "../services/GetAllOrdersService";

class GetAllOrdersController {
  async handle(request: Request, response: Response) {
    const service = new GetAllOrdersService();

    const orders = await service.execute();

    return response.json(orders);
  }
}

export { GetAllOrdersController };
