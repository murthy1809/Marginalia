import { BOOKSHELF } from "@/lib/fixtures";
import BookshelfCard from "./BookshelfCard";

export default function BookshelfGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {BOOKSHELF.map((row) => (
        <BookshelfCard key={row.slug} row={row} />
      ))}
    </div>
  );
}
