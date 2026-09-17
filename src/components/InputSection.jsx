"use client";

import { Loader2, Send } from "lucide-react";

function InputSection({ query, setQuery, getAIResponse, loading }) {
  return (
    <div className="flex w-full justify-center px-4">
      <form
        className="relative flex w-full max-w-2xl items-center rounded-full border border-outline-variant/40 bg-white p-1.5 pl-5 shadow-[0_8px_28px_rgba(0,62,199,0.08)] focus-within:border-primary/40 focus-within:ring-4 focus-within:ring-primary-fixed"
        onSubmit={(e) => {
          e.preventDefault();
          if (query) getAIResponse(query);
        }}
      >
        <input
          disabled={loading}
          type="text"
          value={query || ""}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask me anything..."
          className="w-full border-0 bg-transparent px-0 py-3 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-0 sm:text-base"
        />
        <button
          type="submit"
          className="ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-container text-white shadow-[0_4px_14px_rgba(0,82,255,0.28)] transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50"
          disabled={loading || !query}
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send size={16} />}
        </button>
      </form>
    </div>
  );
}

export default InputSection;
