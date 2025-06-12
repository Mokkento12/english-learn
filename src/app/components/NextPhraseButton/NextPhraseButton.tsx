// app/components/NextPhraseButton/NextPhraseButton.tsx

interface NextPhraseButtonProps {
  showNextPhrase: boolean;
}

export default function NextPhraseButton({
  showNextPhrase,
}: NextPhraseButtonProps) {
  if (!showNextPhrase) return null;

  return <p style={{ marginTop: "1rem" }}>🔄 Загружаем новую фразу...</p>;
}
