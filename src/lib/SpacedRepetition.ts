import { Word } from "@/types/word";

export function updateWord(word: Word, remembered: boolean): Word {
  const today = new Date();

  if (!remembered) {
    return {
      ...word,
      repetitions: 0,
      interval: 1,
      easeFactor: 2.3,
      nextReviewDate: new Date(today.setDate(today.getDate() + 1)).toISOString(),
    };
  }

  const newRepetitions = word.repetitions + 1;
  const newEaseFactor = Math.max(1.3, word.easeFactor + 0.1); //stops easefactor from going very low
  const newInterval = newRepetitions === 1 ? 1 : newRepetitions === 2 ? 3 : Math.round(word.interval * newEaseFactor);

  const nextReviewDate = new Date();
  nextReviewDate.setDate(today.getDate() + newInterval);

  return {
    ...word,
    repetitions: newRepetitions,
    easeFactor: newEaseFactor,
    interval: newInterval,
    nextReviewDate: nextReviewDate.toISOString(),
  };
}
