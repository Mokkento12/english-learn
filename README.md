<!-- Структура -->

/english-learn-flashcards
/app ← фронтенд
/page.tsx
/layout.tsx
/providers.tsx
/components ← компоненты UI
/ui
Card.tsx
Button.tsx
Input.tsx
/features
PhraseCard.tsx
ResultFeedback.tsx
/lib
/apolloClient.ts
/types
index.ts
/backend ← GQL API
/src
server.ts ← Apollo Server Express
resolvers.ts ← логика запросов
mockWords.ts ← данные
package.json ← для бэкенда
tsconfig.json ← для TypeScript
public/
next.config.js
tailwind.config.js
package.json ← для фронтенда
README.md

<!--Установка Next.js с TypeScript и Tailwind -->

npx create-next-app@latest english-learn-flashcards
cd english-learn-flashcards
npm install typescript @types/react @types/node @types/react-dom @emotion/react @emotion/styled
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

<!-- tailwind.config.js -->

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./app/**/_.{js,jsx,ts,tsx}",
"./components/\*\*/_.{js,jsx,ts,tsx}"
],
theme: {
extend: {},
},
plugins: [],
};

<!-- backend -->

mkdir backend && cd backend
npm init -y
npm install express apollo-server-express cors helmet morgan
npm install --save-dev ts-node typescript @types/express tsx

<!-- package.json с "type": "module": -->

{
"type": "module",
"scripts": {
"dev": "tsx src/server.ts"
}
}

<!-- /backend/src/
mockWords.ts -->

export const phrases = [
{
id: "1",
russian: "Я люблю тебя",
english: "I love you",
tense: "present",
person: "I"
},
{
id: "2",
russian: "Мы будем учиться",
english: "We will study",
tense: "future",
person: "we"
}
];

<!-- resolvers.ts -->

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
randomPhrase: Phrase
}
`;

export const resolvers = {
Query: {
randomPhrase: () => {
const randomIndex = Math.floor(Math.random() \* phrases.length);
return phrases[randomIndex];
}
}
};

<!-- server.ts -->

import express from "express";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./resolvers";

async function startServer() {
try {
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
await server.start();
server.applyMiddleware({ app });

    const httpServer = http.createServer(app);
    const PORT = 4000;

    httpServer.listen(PORT, () => {
      console.log(`🚀 Сервер запущен на http://localhost:${PORT}/graphql`);
    });

} catch (error) {
const errorMessage = error instanceof Error ? error.message : "Неизвестная ошибка";
console.error("❌ Ошибка запуска сервера:", errorMessage);
}
}

startServer();

<!-- tsconfig.json в /backend -->

{
"compilerOptions": {
"target": "es2021",
"module": "ESNext",
"strict": true,
"esModuleInterop": true,
"skipLibCheck": true,
"outDir": "./dist",
"rootDir": "./src"
},
"include": ["src/**/*"]
}

<!-- Запуск бэкенда -->

cd backend
npm run dev

GQL API доступен по адресу:
🔗 http://localhost:4000/graphql

<!-- lib/apolloClient.ts -->

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
uri: "http://localhost:4000/graphql",
cache: new InMemoryCache()
});

<!-- /app/providers.tsx -->

"use client";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/apolloClient";

export function Providers({ children }: { children: React.ReactNode }) {
return (
<ApolloProvider client={apolloClient}>
{children}
</ApolloProvider>
);
}

<!-- layout.tsx -->

import { Providers } from "./providers";

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (

<html lang="en">
<body>
<Providers>{children}</Providers>
</body>
</html>
);
}

<!-- /app/page.tsx -->

"use client";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import styles from "./page.module.css";

const GET_RANDOM_PHRASE = `  query GetRandomPhrase {
    randomPhrase {
      id
      russian
      english
      tense
      person
    }
  }`;

export default function Home() {
const { loading, error, data } = useQuery(GET_RANDOM_PHRASE);
const [userAnswer, setUserAnswer] = useState("");
const [correct, setCorrect] = useState<boolean | null>(null);

if (loading) return <p>Загрузка...</p>;
if (error) return <p>Ошибка загрузки</p>;

const phrase = data.randomPhrase;

const handleSubmit = () => {
const isCorrect =
userAnswer.trim().toLowerCase() === phrase.english.toLowerCase();

    setCorrect(isCorrect);

};

return (
<main className={styles.main}>
<h1>Учим английский</h1>

      <div className={styles.card}>
        <p>Русский: {phrase.russian}</p>
        <input
          type="text"
          placeholder="Введите перевод..."
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button onClick={handleSubmit}>Проверить</button>

        {correct === true && <p style={{ color: "green" }}>✅ Верно!</p>}
        {correct === false && (
          <p style={{ color: "red" }}>
            ❌ Неверно. Правильный ответ: <strong>{phrase.english}</strong>
          </p>
        )}
      </div>
    </main>

);
}
