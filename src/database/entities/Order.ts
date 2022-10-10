import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("orders")
class Order {
  @PrimaryColumn()
  id: string;

  @Column()
  produto_name: string;

  @Column()
  preco_unidade: number;

  @Column()
  quantidade: number;

  @Column()
  valor_total: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Order };
