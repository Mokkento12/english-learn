"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

import PhraseCard from "@/app/components/PhraseCard/PhraseCard";
import ResultFeedback from "@/app/components/ResultFeedback/ResultFeedback";
import NextPhraseButton from "@/app/components/NextPhraseButton/NextPhraseButton";

import styles from "./page.module.css";

const GET_RANDOM_PHRASE = gql`
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
  const [showNextPhrase, setShowNextPhrase] = useState(false);

  const { loading, error, data, refetch } = useQuery(GET_RANDOM_PHRASE);

  // Автоматическое обновление фразы через 3 секунды
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showNextPhrase) {
      timer = setTimeout(async () => {
        await refetch();
        setShowNextPhrase(false);
        setUserAnswer("");
        setCorrect(null);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [showNextPhrase]);

  if (loading || !data?.randomPhrase) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  const currentPhrase = data.randomPhrase;

  const handleSubmit = () => {
    const isCorrect =
      userAnswer.trim().toLowerCase() === currentPhrase.english.toLowerCase();

    setCorrect(isCorrect);
    setShowNextPhrase(true);
  };

  return (
    <main className={styles.main}>
      <h1>Учим английский!</h1>

      <PhraseCard
        phrase={currentPhrase}
        userAnswer={userAnswer}
        correct={correct}
        onInputChange={(e) => setUserAnswer(e.target.value)}
        onSubmit={handleSubmit}
      />

      <ResultFeedback correct={correct} phrase={currentPhrase} />
      <NextPhraseButton showNextPhrase={showNextPhrase} />
    </main>
  );
}
