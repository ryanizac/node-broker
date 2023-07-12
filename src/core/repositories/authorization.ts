import { db } from "../../external";

export class AuthorizationRepository {
  static async create(args: AuthorizationRepository.CreateArgs) {
    await db.authorization.create({
      data: {
        id: args.id,
        createAt: args.createAt,
        updateAt: args.updateAt,
        token: args.token,
        consumerId: args.consumerId,
      },
    });
  }

  static async findByToken(token: string) {
    const found = await db.authorization.findFirst({
      where: { token },
    });
    return found;
  }
}

export namespace AuthorizationRepository {
  export type CreateArgs = {
    id: string;
    createAt: Date;
    updateAt: Date;
    token: string;
    consumerId: string;
  };
}
