export type Phrase = {
  id: string;
  english: string;
  russian: string;
  tense: string;
  person: string;
};

export type RandomPhraseData = {
  randomPhrase: Phrase;
};
