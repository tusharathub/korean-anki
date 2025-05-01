"use client";

import { useEffect, useState } from "react";
import { Word } from "@/types/word";
import HistoryTable from "@/components/HIstoryTable";

export default function HistoryPage() {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("vocabList");
    if (!stored) return;
    setWords(JSON.parse(stored));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-center">Review History</h1>
      <HistoryTable words={words} />
    </main>
    
  );
}
