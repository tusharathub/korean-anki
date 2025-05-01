"use client";

import { useState } from "react";
import { Word } from "@/types/word";

type Props = {
  word: Word;
  onReview: (remembered: boolean) => void;
};

export default function ReviewCard({ word, onReview }: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-neutral-200 p-15 rounded-xl shadow-md text-center max-w-md mx-auto mt-10">
      <h2 className="text-4xl font-bold mb-4">{word.koreanWord}</h2>

      {show ? (
        <>
          <p className="text-gray-700 mb-4">{word.meaning}</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => onReview(true)} className="px-4 py-2 bg-green-500 text-white rounded">
              I remember
            </button>
            <button onClick={() => onReview(false)} className="px-4 py-2 bg-red-500 text-white rounded">
              I don't remember
            </button>
          </div>
        </>
      ) : (
        <button onClick={() => setShow(true)} className="mt-4 text-blue-600 underline">
          Reveal Meaning
        </button>
      )}
    </div>
  );
}
