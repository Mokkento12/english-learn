import styles from "./ResultFeedback.module.sass";

interface ResultFeedbackProps {
  correct: boolean | null;
  phrase?: {
    english: string;
  };
}

export default function ResultFeedback({
  correct,
  phrase,
}: ResultFeedbackProps) {
  if (correct === null || correct === false) return null;

  return (
    <>
      {correct === true && (
        <p style={{ color: "green", marginTop: "1rem" }}>✅ Верно!</p>
      )}
      {correct === false && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          ❌ Неверно. Правильный ответ: <strong>{phrase?.english}</strong>
        </p>
      )}
    </>
  );
}
