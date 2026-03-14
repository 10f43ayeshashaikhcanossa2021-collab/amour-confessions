import { useState } from "react";
import QuestionCard from "@/components/QuestionCard";
import ThankYouScreen from "@/components/ThankYouScreen";
import FloatingImages from "@/components/FloatingImages";
import { questions } from "@/data/questions";

const Index = () => {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        <FloatingImages />
        <ThankYouScreen answers={answers} questions={questions} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingImages />

      <div className="relative z-10 max-w-[700px] mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-5xl mb-4" style={{ animation: "heartbeat 2s infinite" }}>💕</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mb-4">
            How Well Do You Know Me?
          </h1>
          <p className="font-body text-muted-foreground text-lg md:text-xl">
            Answer these questions honestly, my love… let's see how well you really know me! 💋
          </p>
        </div>

        {/* Questions */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {questions.map((q, index) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={index}
              value={answers[q.id]}
              onChange={handleChange}
            />
          ))}

          <div className="text-center pt-8 pb-16">
            <button type="submit" className="submit-btn">
              Submit Your Answers 💌
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
