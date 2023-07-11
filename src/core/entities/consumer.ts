export class Consumer {
  constructor(public readonly props: Consumer.Props) {}
}

export namespace Consumer {
  export type Props = {
    id: string;
    createAt: Date;
    updateAt: Date;
    name: string;
  };

  export type Public = Props;
}
