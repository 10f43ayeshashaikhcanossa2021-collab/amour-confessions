import type { Question } from "@/data/questions";

interface ThankYouScreenProps {
  answers: Record<string, string | string[]>;
  questions: Question[];
}

const ThankYouScreen = ({ answers, questions }: ThankYouScreenProps) => {
  return (
    <div className="relative z-10 max-w-[700px] mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-16 question-fade-in">
        <div className="text-6xl mb-6" style={{ animation: "heartbeat 2s infinite" }}>💖</div>
        <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mb-4">
          Thank You, My Love!
        </h1>
        <p className="font-body text-muted-foreground text-lg md:text-xl max-w-md mx-auto">
          Your answers mean the world to me. Here's everything you said… 🥹
        </p>
      </div>

      <div className="space-y-6">
        {questions.map((q, index) => {
          const answer = answers[q.id];
          const displayAnswer = Array.isArray(answer) ? answer.join(", ") : answer;

          return (
            <div
              key={q.id}
              className="rounded-2xl border border-border bg-card p-6 card-glow question-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <p className="font-display text-lg font-semibold mb-2">
                <span className="gradient-text mr-2">Q{index + 1}.</span>
                {q.text}
              </p>
              <p className="font-body text-muted-foreground text-base pl-2 border-l-2 border-primary ml-1">
                {displayAnswer || "No answer provided 💔"}
              </p>
            </div>
          );
        })}
      </div>

      <div className="text-center py-16">
        <p className="font-display text-2xl gradient-text">Made with love 💕</p>
      </div>
    </div>
  );
};

export default ThankYouScreen;
