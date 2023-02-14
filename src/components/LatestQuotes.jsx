import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import QuoteCard from "./QuoteCard";

const LatestQuotes = () => {
  const { documents: quotes } = useCollection("quotes");

  return (
    <div className="w-full md:w-4/5 flex flex-wrap justify-start gap-5 px-5">
      {quotes &&
        quotes.map((quote, key) => <QuoteCard quote={quote} key={key} />)}
    </div>
  );
};
export default LatestQuotes;
