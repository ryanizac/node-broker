import { ClientError, DevelopmentError } from "../errors";

export function ValidateString<
  Key extends string,
  O extends { [key in Key]: any },
>(o: O, required: boolean = true) {
  const entries = Object.entries(o);

  if (entries.length !== 1) {
    throw new DevelopmentError("You must provide a single property");
  }

  const [key, value] = entries[0] as [Key, any];

  const isEmpty = [null, undefined].includes(value);

  if (isEmpty) {
    if (required) {
      throw new ClientError(`The ${key} property is missing`);
    }

    return;
  }

  const isNotString = typeof value !== "string";

  if (isNotString) {
    throw new ClientError(`The ${key} property must be a string`);
  }
}
