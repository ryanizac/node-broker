import { db } from "../../external";

export class TopicRepository {
  static async exists(name: string) {
    const found = await db.topic.findFirst({
      where: { name },
    });
    return !!found;
  }

  static async create(args: TopicRepository.CreateArgs) {
    await db.topic.create({
      data: {
        id: args.id,
        createAt: args.createAt,
        updateAt: args.updateAt,
        name: args.name,
      },
    });
  }

  static async readAll() {
    const list = await db.topic.findMany();
    return list;
  }
}

export namespace TopicRepository {
  export type CreateArgs = {
    id: string;
    createAt: Date;
    updateAt: Date;
    name: string;
  };
}
