export type Word = {
  id: string;
  koreanWord: string;
  meaning: string;
  repetitions: number;
  easeFactor: number;
  interval: number;
  nextReviewDate: string;
  reviewHistory: {
    date: string; 
    result: "pass" | "fail";
  }[];
};
