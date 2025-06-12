import { phrases } from "./mockWords";

export const typeDefs = `
  type Phrase {
    id: ID!
    russian: String!
    english: String!
    tense: String!
    person: String!
  }

  type Query {
    phrase(id: ID): Phrase
    phrases: [Phrase!]!
    randomPhrase: Phrase
  }
`;

export const resolvers = {
  Query: {
    phrase: (_source: unknown, { id }: { id: string }) => {
      return phrases.find((phrase) => phrase.id === id) || null;
    },
    phrases: () => phrases,
    randomPhrase: () => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      return phrases[randomIndex];
    },
  },
};
