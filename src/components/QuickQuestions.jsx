"use client";
import {
  User,
  Briefcase,
  Layers,
  Handshake,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

function QuickQuestions({ setQuery, getAIResponse }) {
  const questions = [
    {
      icon: User,
      text: "Me",
      prompt: "Tell me about Usman Ali in a short introduction.",
    },
    {
      icon: Briefcase,
      text: "Projects",
      prompt: "Show me Usman Ali's projects.",
    },
    {
      icon: Layers,
      text: "Skills",
      prompt: "List Usman Ali's technical skills.",
    },
    {
      icon: Handshake,
      text: "Contact",
      prompt: "Give me Usman Ali's contact information.",
    },
    {
      icon: GraduationCap,
      text: "Education",
      prompt: "Tell me about Usman Ali's education.",
    },
    {
      icon: TrendingUp,
      text: "Experience",
      prompt: "Tell me something about Usman Ali's career journey.",
    },
  ];

  return (
    <div className="flex justify-center py-2">
      <div className="flex w-full max-w-3xl flex-wrap justify-center gap-2 px-3">
        {questions.map((question) => {
          const IconComponent = question.icon;
          return (
            <button
              key={question.text}
              type="button"
              onClick={() => {
                setQuery(question.prompt);
                getAIResponse(question.prompt);
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-outline-variant/40 bg-white/90 px-3.5 py-2 text-sm font-medium text-on-surface shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_20px_rgba(0,62,199,0.1)]"
            >
              <IconComponent className="h-4 w-4 text-primary" />
              {question.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickQuestions;
