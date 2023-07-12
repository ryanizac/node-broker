import { JWTGenerator } from "../../external";
import { ClientError } from "../errors";
import { AuthorizationRepository } from "../repositories";
import { ValidateString } from "../validators";

export async function CheckAuthorization({ token }: CheckAuthorization.Args) {
  ValidateString({ token });

  const auth = AuthorizationRepository.findByToken(token);

  if (!auth) {
    throw new ClientError("Authorization not found");
  }

  const isInvalid = JWTGenerator.check(token);

  if (isInvalid) {
    throw new ClientError("Authorization not valid");
  }
}

export namespace CheckAuthorization {
  export type Args = {
    token: string;
  };
}
