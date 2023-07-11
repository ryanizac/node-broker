import { db } from "../../external";

export class ConsumerRepository {
  static async exists(name: string) {
    const found = await db.consumer.findFirst({
      where: { name },
    });
    return !!found;
  }

  static async create(args: ConsumerRepository.CreateArgs) {
    await db.consumer.create({
      data: {
        id: args.id,
        createAt: args.createAt,
        updateAt: args.updateAt,
        name: args.name,
      },
    });
  }
}

export namespace ConsumerRepository {
  export type CreateArgs = {
    id: string;
    createAt: Date;
    updateAt: Date;
    name: string;
  };
}
