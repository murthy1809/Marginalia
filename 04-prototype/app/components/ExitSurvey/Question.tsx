"use client";

export type Answer = "yes" | "no" | "not_sure" | "";

type Props = {
  index: number;
  prompt: string;
  value: Answer;
  onChange: (a: Answer) => void;
};

const OPTIONS: { v: Exclude<Answer, "">; l: string }[] = [
  { v: "yes", l: "Yes" },
  { v: "no", l: "No" },
  { v: "not_sure", l: "Not sure" },
];

export default function Question({ index, prompt, value, onChange }: Props) {
  return (
    <fieldset>
      <legend className="text-[13px] font-medium mb-2 text-[var(--color-ink)]">
        {index}. {prompt}
      </legend>
      <div className="flex flex-wrap gap-2">
        {OPTIONS.map((opt) => {
          const active = value === opt.v;
          return (
            <label
              key={opt.v}
              className={`text-[12px] px-3 py-1.5 rounded-full border cursor-pointer ${
                active
                  ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                  : "bg-[var(--color-surface)] text-[var(--color-ink-muted)] border-[var(--color-line)] hover:border-[var(--color-line-strong)]"
              }`}
            >
              <input
                type="radio"
                name={`q-${index}`}
                value={opt.v}
                checked={active}
                onChange={() => onChange(opt.v)}
                className="sr-only"
              />
              {opt.l}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
