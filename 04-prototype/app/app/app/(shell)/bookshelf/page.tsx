import BookshelfGrid from "@/components/BookshelfGrid";
import Header from "@/components/Header";
import { ME } from "@/lib/fixtures";

export default function BookshelfPage() {
  return (
    <>
      <Header
        title={`Welcome back, ${ME.name}.`}
        subtitle="Pick the show you want to re-enter without future-season spoilers."
      />
      <main className="px-6 py-8 max-w-[1100px] mx-auto w-full">
        <div className="mb-6">
          <h1 className="serif text-[32px] font-semibold tracking-tight text-[var(--color-ink)]">
            Your watchlist
          </h1>
          <p className="text-[14px] text-[var(--color-ink-muted)] mt-1 max-w-[680px]">
            Each card shows what you finished, what comes next, and whether a
            bounded recap is ready. The demo focuses on The Boys through the
            season 4 finale, with Season 5 kept out of scope.
          </p>
        </div>
        <BookshelfGrid />
      </main>
    </>
  );
}
