import { Word } from "@/types/word";

type Props = {
  words: Word[];
};

export default function HistoryTable({words}: Props) {
  const rows = words.flatMap((word)=> 
  (word.reviewHistory || []).map((entry, i) => ({
    id: `${word.id}-${i}`,
    date: new Date(entry.date).toLocaleDateString(),
    word: word.koreanWord,
    meaning: word.meaning,
    result: entry.result,
  }))
);
  if(rows.length ===0 ) return <p>No history discovered</p>

  return (
    <div className="overflow-x-auto max-w-3xl mx-auto mt-10">
      <table className="w-full table-auto border-collapse border">
        <thead className="bg-gray-300">
        <tr>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Word</th>
            <th className="p-2 border">Meaning</th>
            <th className="p-2 border">Result</th>
          </tr>
        </thead>
        <tbody>
          {rows.reverse().map((row) => (
            <tr key={row.id}>
              <td className="p-2 border">{row.date}</td>
              <td className="p-2 border">{row.word}</td>
              <td className="p-2 border">{row.meaning}</td>
              <td className={`p-2 border ${row.result === "pass" ? "text-green-400" : "text-red-500"}`}>
                {row.result.toUpperCase()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}