import { verbConjugation as verbs, Tense, Person, Form } from "./mockWords";

export const typeDefs = `
  type PhraseType {
    id: ID!
    english: String!
    russian: String!
    tense: String!
    person: String!
    form: String!
  }

  type Query {
    randomPhrase: PhraseType
  }
`;

export const resolvers = {
  Query: {
    randomPhrase: () => {
      const tenses: Tense[] = ["present", "past", "future"];
      const persons: Person[] = ["I", "You", "He", "She", "We", "They"];
      const forms: Form[] = ["affirmative", "negative", "interrogative"];

      const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
      const randomTense = tenses[Math.floor(Math.random() * tenses.length)];
      const randomPerson = persons[Math.floor(Math.random() * persons.length)];
      const randomForm = forms[Math.floor(Math.random() * forms.length)];

      const phrase = randomVerb.forms[randomTense][randomPerson][randomForm];

      return {
        id: `${
          randomVerb.translations.infinitive
        }-${randomTense}-${randomPerson}-${randomForm}-${Math.random()
          .toString(36)
          .substring(2, 9)}`,
        english: phrase.english,
        russian: phrase.russian,
        tense: randomTense,
        person: randomPerson,
        form: randomForm,
      };
    },
  },
};
