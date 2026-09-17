"use client";
import { useEffect } from "react";
import Chat from "./Chat";
import Footer from "./Footer";
import { HeroClone } from "./HeroClone";
import PortfolioSections from "./PortfolioSections";
import { SiteHeader } from "./SiteHeader";
import { GsapRefresh } from "./GsapRefresh";
import useConversation from "@/hooks/useConversation";

function HomePage() {
  const { message, flags, query, setQuery, reset, loading, getAIResponse } =
    useConversation();
  const isChatting = Boolean(message?.message) || loading;

  function startChat(nextQuery) {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    getAIResponse(nextQuery);
  }

  function handleReset() {
    reset();
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const html = document.documentElement;

    if (isChatting) {
      window.scrollTo(0, 0);
      html.style.overflow = "hidden";
      html.style.scrollBehavior = "auto";
      document.body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      html.style.scrollBehavior = "";
      document.body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      html.style.scrollBehavior = "";
      document.body.style.overflow = "";
    };
  }, [isChatting]);

  return (
    <div className={isChatting ? "h-screen overflow-hidden" : ""}>
      <GsapRefresh tick={isChatting} />
      <SiteHeader isChatting={isChatting} onReset={handleReset} />

      {isChatting ? (
        <section className="relative flex h-screen flex-col overflow-hidden bg-background pt-16">
          <div className="flex-1 overflow-y-auto pb-36">
            <div className="mx-auto flex w-full max-w-[720px] items-start justify-center px-4 py-8">
              <Chat message={message} flags={flags} loading={loading} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-50 border-t border-outline-variant/30 bg-white/90 backdrop-blur-xl">
            <Footer
              query={query}
              setQuery={setQuery}
              getAIResponse={startChat}
              loading={loading}
            />
          </div>
        </section>
      ) : (
        <>
          <div className="relative">
            <HeroClone />
            <div className="absolute bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-background via-background/95 to-transparent pb-4 pt-8">
              <Footer
                query={query}
                setQuery={setQuery}
                getAIResponse={startChat}
                loading={loading}
              />
            </div>
          </div>
          <PortfolioSections />
        </>
      )}
    </div>
  );
}

export default HomePage;
