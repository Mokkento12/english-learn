import { phrases } from "./mockWords";
import type { Phrase } from "@/app/types";

export const typeDefs = `
  type PhraseType {
    id: ID!
    english: String!
    russian: String!
    tense: String!
    person: String!
  }

  type Query {
    randomPhrase: PhraseType
  }
`;

export const resolvers = {
  Query: {
    randomPhrase: (): Phrase => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      return phrases[randomIndex];
    },
  },
};
