import styles from "./PhraseCard.module.sass";

interface Phrase {
  english: string;
  russian: string;
}

interface PhraseCardProps {
  phrase: Phrase | null;
  userAnswer: string;
  correct: boolean | null;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export default function PhraseCard({
  phrase,
  userAnswer,
  correct,
  onInputChange,
  onSubmit,
}: PhraseCardProps) {
  if (!phrase) return null;

  return (
    <div className={styles.card}>
      <p>На русском: {phrase.russian}</p>
      <input
        type="text"
        placeholder="Введи перевод..."
        value={userAnswer}
        onChange={onInputChange}
        disabled={correct !== null}
      />
      <button onClick={onSubmit} disabled={correct !== null}>
        Проверить
      </button>
    </div>
  );
}
