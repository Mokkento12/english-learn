export type Tense = "present" | "past" | "future";
export type Person = "I" | "You" | "He" | "She" | "We" | "They";
export type Form = "affirmative" | "negative" | "interrogative";

export type Phrase = {
  english: string;
  russian: string;
};

export type VerbConjugation = {
  verb: string;
  translations: {
    infinitive: string;
  };
  forms: {
    [T in Tense]: {
      [P in Person]: {
        [F in Form]: Phrase;
      };
    };
  };
};

export const verbConjugation: VerbConjugation[] = [
  {
    verb: "love",
    translations: {
      infinitive: "любить",
    },
    forms: {
      present: {
        I: {
          affirmative: { english: "I love", russian: "Я люблю" },
          negative: { english: "I do not love", russian: "Я не люблю" },
          interrogative: { english: "Do I love?", russian: "Я люблю?" },
        },
        You: {
          affirmative: { english: "You love", russian: "Ты любишь" },
          negative: { english: "You do not love", russian: "Ты не любишь" },
          interrogative: { english: "Do you love?", russian: "Ты любишь?" },
        },
        He: {
          affirmative: { english: "He loves", russian: "Он любит" },
          negative: { english: "He does not love", russian: "Он не любит" },
          interrogative: { english: "Does he love?", russian: "Он любит?" },
        },
        She: {
          affirmative: { english: "She loves", russian: "Она любит" },
          negative: { english: "She does not love", russian: "Она не любит" },
          interrogative: { english: "Does she love?", russian: "Она любит?" },
        },
        We: {
          affirmative: { english: "We love", russian: "Мы любим" },
          negative: { english: "We do not love", russian: "Мы не любим" },
          interrogative: { english: "Do we love?", russian: "Мы любим?" },
        },
        They: {
          affirmative: { english: "They love", russian: "Они любят" },
          negative: { english: "They do not love", russian: "Они не любят" },
          interrogative: { english: "Do they love?", russian: "Они любят?" },
        },
      },
      past: {
        I: {
          affirmative: { english: "I loved", russian: "Я любил" },
          negative: { english: "I did not love", russian: "Я не любил" },
          interrogative: { english: "Did I love?", russian: "Я любил?" },
        },
        You: {
          affirmative: { english: "You loved", russian: "Ты любил" },
          negative: { english: "You did not love", russian: "Ты не любил" },
          interrogative: { english: "Did you love?", russian: "Ты любил?" },
        },
        He: {
          affirmative: { english: "He loved", russian: "Он любил" },
          negative: { english: "He did not love", russian: "Он не любил" },
          interrogative: { english: "Did he love?", russian: "Он любил?" },
        },
        She: {
          affirmative: { english: "She loved", russian: "Она любила" },
          negative: { english: "She did not love", russian: "Она не любила" },
          interrogative: { english: "Did she love?", russian: "Она любила?" },
        },
        We: {
          affirmative: { english: "We loved", russian: "Мы любили" },
          negative: { english: "We did not love", russian: "Мы не любили" },
          interrogative: { english: "Did we love?", russian: "Мы любили?" },
        },
        They: {
          affirmative: { english: "They loved", russian: "Они любили" },
          negative: { english: "They did not love", russian: "Они не любили" },
          interrogative: { english: "Did they love?", russian: "Они любили?" },
        },
      },
      future: {
        I: {
          affirmative: { english: "I will love", russian: "Я буду любить" },
          negative: { english: "I will not love", russian: "Я не буду любить" },
          interrogative: { english: "Will I love?", russian: "Я буду любить?" },
        },
        You: {
          affirmative: {
            english: "You will love",
            russian: "Ты будешь любить",
          },
          negative: {
            english: "You will not love",
            russian: "Ты не будешь любить",
          },
          interrogative: {
            english: "Will you love?",
            russian: "Ты будешь любить?",
          },
        },
        He: {
          affirmative: { english: "He will love", russian: "Он будет любить" },
          negative: {
            english: "He will not love",
            russian: "Он не будет любить",
          },
          interrogative: {
            english: "Will he love?",
            russian: "Он будет любить?",
          },
        },
        She: {
          affirmative: {
            english: "She will love",
            russian: "Она будет любить",
          },
          negative: {
            english: "She will not love",
            russian: "Она не будет любить",
          },
          interrogative: {
            english: "Will she love?",
            russian: "Она будет любить?",
          },
        },
        We: {
          affirmative: { english: "We will love", russian: "Мы будем любить" },
          negative: {
            english: "We will not love",
            russian: "Мы не будем любить",
          },
          interrogative: {
            english: "Will we love?",
            russian: "Мы будем любить?",
          },
        },
        They: {
          affirmative: {
            english: "They will love",
            russian: "Они будут любить",
          },
          negative: {
            english: "They will not love",
            russian: "Они не будут любить",
          },
          interrogative: {
            english: "Will they love?",
            russian: "Они будут любить?",
          },
        },
      },
    },
  },
  {
    verb: "work",
    translations: {
      infinitive: "работать",
    },
    forms: {
      present: {
        I: {
          affirmative: { english: "I work", russian: "Я работаю" },
          negative: { english: "I do not work", russian: "Я не работаю" },
          interrogative: { english: "Do I work?", russian: "Я работаю?" },
        },
        You: {
          affirmative: { english: "You work", russian: "Ты работаешь" },
          negative: { english: "You do not work", russian: "Ты не работаешь" },
          interrogative: { english: "Do you work?", russian: "Ты работаешь?" },
        },
        He: {
          affirmative: { english: "He works", russian: "Он работает" },
          negative: { english: "He does not work", russian: "Он не работает" },
          interrogative: { english: "Does he work?", russian: "Он работает?" },
        },
        She: {
          affirmative: { english: "She works", russian: "Она работает" },
          negative: {
            english: "She does not work",
            russian: "Она не работает",
          },
          interrogative: {
            english: "Does she work?",
            russian: "Она работает?",
          },
        },
        We: {
          affirmative: { english: "We work", russian: "Мы работаем" },
          negative: { english: "We do not work", russian: "Мы не работаем" },
          interrogative: { english: "Do we work?", russian: "Мы работаем?" },
        },
        They: {
          affirmative: { english: "They work", russian: "Они работают" },
          negative: { english: "They do not work", russian: "Они не работают" },
          interrogative: { english: "Do they work?", russian: "Они работают?" },
        },
      },
      past: {
        I: {
          affirmative: { english: "I worked", russian: "Я работал" },
          negative: { english: "I did not work", russian: "Я не работал" },
          interrogative: { english: "Did I work?", russian: "Я работал?" },
        },
        You: {
          affirmative: { english: "You worked", russian: "Ты работал" },
          negative: { english: "You did not work", russian: "Ты не работал" },
          interrogative: { english: "Did you work?", russian: "Ты работал?" },
        },
        He: {
          affirmative: { english: "He worked", russian: "Он работал" },
          negative: { english: "He did not work", russian: "Он не работал" },
          interrogative: { english: "Did he work?", russian: "Он работал?" },
        },
        She: {
          affirmative: { english: "She worked", russian: "Она работала" },
          negative: { english: "She did not work", russian: "Она не работала" },
          interrogative: { english: "Did she work?", russian: "Она работала?" },
        },
        We: {
          affirmative: { english: "We worked", russian: "Мы работали" },
          negative: { english: "We did not work", russian: "Мы не работали" },
          interrogative: { english: "Did we work?", russian: "Мы работали?" },
        },
        They: {
          affirmative: { english: "They worked", russian: "Они работали" },
          negative: {
            english: "They did not work",
            russian: "Они не работали",
          },
          interrogative: {
            english: "Did they work?",
            russian: "Они работали?",
          },
        },
      },
      future: {
        I: {
          affirmative: { english: "I will work", russian: "Я буду работать" },
          negative: {
            english: "I will not work",
            russian: "Я не буду работать",
          },
          interrogative: {
            english: "Will I work?",
            russian: "Я буду работать?",
          },
        },
        You: {
          affirmative: {
            english: "You will work",
            russian: "Ты будешь работать",
          },
          negative: {
            english: "You will not work",
            russian: "Ты не будешь работать",
          },
          interrogative: {
            english: "Will you work?",
            russian: "Ты будешь работать?",
          },
        },
        He: {
          affirmative: {
            english: "He will work",
            russian: "Он будет работать",
          },
          negative: {
            english: "He will not work",
            russian: "Он не будет работать",
          },
          interrogative: {
            english: "Will he work?",
            russian: "Он будет работать?",
          },
        },
        She: {
          affirmative: {
            english: "She will work",
            russian: "Она будет работать",
          },
          negative: {
            english: "She will not work",
            russian: "Она не будет работать",
          },
          interrogative: {
            english: "Will she work?",
            russian: "Она будет работать?",
          },
        },
        We: {
          affirmative: {
            english: "We will work",
            russian: "Мы будем работать",
          },
          negative: {
            english: "We will not work",
            russian: "Мы не будем работать",
          },
          interrogative: {
            english: "Will we work?",
            russian: "Мы будем работать?",
          },
        },
        They: {
          affirmative: {
            english: "They will work",
            russian: "Они будут работать",
          },
          negative: {
            english: "They will not work",
            russian: "Они не будут работать",
          },
          interrogative: {
            english: "Will they work?",
            russian: "Они будут работать?",
          },
        },
      },
    },
  },
];
