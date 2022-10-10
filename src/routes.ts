import { Router } from "express";
import { CreateOrderController } from "./controllers/CreateOrderController";
import { GetAllOrdersController } from "./controllers/GetAllOrdersController";

const routes = Router();

routes.get("/", new GetAllOrdersController().handle);
routes.post("/orders", new CreateOrderController().handle);

export { routes };
