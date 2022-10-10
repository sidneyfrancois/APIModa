import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrder1665419020624 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orders",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "produto_name",
            type: "varchar",
          },
          {
            name: "preco_unidade",
            type: "numeric",
          },
          {
            name: "quantidade",
            type: "numeric",
          },
          {
            name: "valor_total",
            type: "numeric",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("orders");
  }
}
