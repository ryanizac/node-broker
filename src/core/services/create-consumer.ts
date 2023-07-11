import { Authorization, Consumer } from "../entities";
import { ClientError } from "../errors";
import { createConsumer, createAuthorization } from "../factories";
import { AuthorizationRepository, ConsumerRepository } from "../repositories";
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
  const consumerId = consumer.props.id;

  const authorization = createAuthorization({ consumerId });

  await ConsumerRepository.create(consumer.props);
  await AuthorizationRepository.create(authorization.props);

  return {
    consumer: consumer.props,
    authorization: authorization.toPublic(),
  };
}

export namespace CreateConsumer {
  export type Args = {
    name: string;
  };

  export type Result = {
    consumer: Consumer.Public;
    authorization: Authorization.Public;
  };
}
