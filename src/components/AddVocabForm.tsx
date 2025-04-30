"use client";
import React, { useState } from "react";

function AddVocabForm() {
  const [koreanWord, setKoreanWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [type, setType] = useState("");
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newWord = {
      id: crypto.randomUUID(), // creates a unique ID
      koreanWord,
      meaning,
      type,
      topic,
      nextReviewDate: new Date().toISOString(), // first review = today
      interval: 1,
      easeFactor: 2.5,
      repetitions: 0,
    };

    const existingWords = JSON.parse(localStorage.getItem("vocabList") || "[]");
    const updatedWords = [...existingWords, newWord];

    localStorage.setItem("vocabList", JSON.stringify(updatedWords));

    // Reset form
    setKoreanWord("");
    setMeaning("");
    setType("");
    setTopic("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={koreanWord}
          onChange={(e) => setKoreanWord(e.target.value)}
          placeholder="Add a korean word"
          required
        />
        <input
          type="text"
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
          placeholder="English meaning of the korean word"
          required
        />
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Type of the word (nous, verb, etc)"
        />
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Topic of the word (sport, food, item, etc)"
          required
        />
        <button type="submit">Add word</button>
      </form>
    </div>
  );
}

export default AddVocabForm;
