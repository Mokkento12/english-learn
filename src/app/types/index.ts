export type Phrase = {
  id: string;
  english: string;
  russian: string;
  tense: string; // present, past, future
  person: string; // I, You, He и т.д.
  form: string; // affirmative, negative, interrogative
};

export type RandomPhraseData = {
  randomPhrase: Phrase;
};
