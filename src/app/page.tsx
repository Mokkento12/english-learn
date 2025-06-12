"use client";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import styles from "./page.module.css";

export const GET_RANDOM_PHRASE = gql`
  query GetRandomPhrase {
    randomPhrase {
      id
      russian
      english
      tense
      person
    }
  }
`;

export default function Home() {
  const [userAnswer, setUserAnswer] = useState("");
  const [correct, setCorrect] = useState<boolean | null>(null);

  const { loading, error, data } = useQuery(GET_RANDOM_PHRASE);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  const currentPhrase = data.randomPhrase;

  const handleSubmit = () => {
    const isCorrect =
      userAnswer.trim().toLowerCase() === currentPhrase.english.toLowerCase();

    setCorrect(isCorrect);
  };

  return (
    <main className={styles.main}>
      <h1>Учим английский!</h1>

      <div className={styles.card}>
        <p>На русском: {currentPhrase.russian}</p>
        <input
          type="text"
          placeholder="Введи перевод..."
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button onClick={handleSubmit}>Проверить</button>

        {correct === true && <p style={{ color: "green" }}>✅ Верно!</p>}
        {correct === false && (
          <p style={{ color: "red" }}>
            ❌ Неверно. Правильный ответ:{" "}
            <strong>{currentPhrase.english}</strong>
          </p>
        )}
      </div>
    </main>
  );
}
