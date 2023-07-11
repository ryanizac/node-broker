import { Consumer } from "../entities";
import { ClientError } from "../errors";
import { createConsumer } from "../factories";
import { ConsumerRepository } from "../repositories";
import { ValidateString } from "../validators";

export async function CreateConsumer(
  args: CreateConsumer.Args,
): Promise<CreateConsumer.Result> {
  const { name } = args;

  ValidateString({ name });

  const exists = await ConsumerRepository.exists(name);

  if (exists) {
    throw new ClientError(`The name ${name} is already in use`);
  }

  const consumer = createConsumer({ name });
  const consumerProps = consumer.props;

  await ConsumerRepository.create(consumerProps);

  return { consumer: consumerProps };
}

export namespace CreateConsumer {
  export type Args = {
    name: string;
  };

  export type Result = {
    consumer: Consumer.Public;
  };
}
