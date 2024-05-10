import { faker } from "@faker-js/faker";

export const data = Array.from({ length: 8 }, () => {
  return {
    customerName: faker.person.fullName(),
    company: faker.company.name(),
    phoneNumber: faker.phone.number("(###) ###-###"),
    email: faker.internet.email(),
    country: faker.location.country(),
    status: faker.datatype.boolean(),
  };
});
