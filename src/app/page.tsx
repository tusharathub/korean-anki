import Image from "next/image";
import AddPage from "./add/page";
import HistoryPage from "./history/page";
import HistoryTable from "@/components/HIstoryTable";

export default function Home() {
  return (
    <div>
      <AddPage/>
      <h1>home page here</h1>
    </div>  
  );
}
