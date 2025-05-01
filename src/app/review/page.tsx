"use client";

import { useEffect, useState } from "react";
import { Word } from "@/types/word";
import ReviewCard from "@/components/ReviewCard";
import { updateWord } from "@/lib/SpacedRepetition";

export default function ReviewPage() {
  const [words, setWords] = useState<Word[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("vocabList");
    if (!stored) return;

    const allWords: Word[] = JSON.parse(stored);
    const today = new Date();
    const due = allWords.filter((w) => new Date(w.nextReviewDate) <= today);
    setWords(due);
  }, []);

  const handleReview = (remembered: boolean) => {
    const currentWord = words[index];
    const updatedWord = updateWord(currentWord, remembered);

    // Update localStorage
    const allWords: Word[] = JSON.parse(localStorage.getItem("vocabList") || "[]");
    const newAllWords = allWords.map((w) => (w.id === updatedWord.id ? updatedWord : w));
    localStorage.setItem("vocabList", JSON.stringify(newAllWords));

    setIndex((prev) => prev + 1);
  };

  if (words.length === 0) return <p className="text-center mt-20 text-xl">Nothing to review today.</p>;
  if (index >= words.length) return <p className="text-center mt-20 text-xl">✅ All done for today</p>;

  return <ReviewCard word={words[index]} onReview={handleReview} />;
}
