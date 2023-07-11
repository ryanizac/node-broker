export class Topic {
  constructor(public readonly props: Topic.Props) {}

  toPublic() {
    return {
      name: this.props.name,
    };
  }
}

export namespace Topic {
  export type Props = {
    id: string;
    createAt: Date;
    updateAt: Date;
    name: string;
  };

  export type Public = {
    name: string;
  };
}
