import { createHash } from "../utils/hashPassword.js";
import { fakerES_MX as faker } from "@faker-js/faker";

export const generateUsersMock = async (amount) => {
  const users = [];

  for (let i = 0; i < amount; i++) {
    const user = {
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: await createHash("coder123"),
      role: faker.datatype.boolean() ? "user" : "admin",
      pets: [],
    };

    users.push(user);

  }

  return users;
};