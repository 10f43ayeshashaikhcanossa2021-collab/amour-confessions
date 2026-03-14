import { useEffect, useRef, useState } from "react";
import type { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  index: number;
  value: string | string[] | undefined;
  onChange: (id: string, value: string | string[]) => void;
}

const QuestionCard = ({ question, index, value, onChange }: QuestionCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleCheckbox = (option: string) => {
    const current = Array.isArray(value) ? value : [];
    const updated = current.includes(option)
      ? current.filter((v) => v !== option)
      : [...current, option];
    onChange(question.id, updated);
  };

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-border bg-card p-6 md:p-8 card-glow transition-all duration-500 ${
        visible ? "question-fade-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <p className="font-display text-xl md:text-2xl font-semibold text-foreground mb-1">
        <span className="gradient-text mr-2">Q{index + 1}.</span>
        {question.text}
      </p>

      <div className="mt-5">
        {question.type === "text" && (
          <input
            type="text"
            className="input-romantic"
            placeholder={question.placeholder}
            value={(value as string) || ""}
            onChange={(e) => onChange(question.id, e.target.value)}
          />
        )}

        {question.type === "textarea" && (
          <textarea
            className="input-romantic min-h-[120px] resize-y"
            placeholder={question.placeholder}
            value={(value as string) || ""}
            onChange={(e) => onChange(question.id, e.target.value)}
          />
        )}

        {question.type === "radio" && (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 cursor-pointer group p-3 rounded-xl transition-colors duration-200 hover:bg-muted"
              >
                <input
                  type="radio"
                  name={question.id}
                  className="radio-romantic"
                  checked={value === option}
                  onChange={() => onChange(question.id, option)}
                />
                <span className="font-body text-foreground group-hover:text-primary transition-colors">
                  {option}
                </span>
              </label>
            ))}
          </div>
        )}

        {question.type === "checkbox" && (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 cursor-pointer group p-3 rounded-xl transition-colors duration-200 hover:bg-muted"
              >
                <input
                  type="checkbox"
                  className="checkbox-romantic"
                  checked={Array.isArray(value) && value.includes(option)}
                  onChange={() => handleCheckbox(option)}
                />
                <span className="font-body text-foreground group-hover:text-primary transition-colors">
                  {option}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
