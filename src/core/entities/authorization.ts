export class Authorization {
  constructor(public readonly props: Authorization.Props) {}

  toPublic(): Authorization.Public {
    return {
      token: this.props.token,
    };
  }
}

export namespace Authorization {
  export type Props = {
    id: string;
    createAt: Date;
    updateAt: Date;
    token: string;
    consumerId: string;
  };

  export type Public = {
    token: string;
  };
}
