"use client"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Avatar from "./Avatar"
import useConversation from "@/hooks/useConversation"
import Chat from "./Chat"

function HomePage() {
    const { message, flags, query, setQuery, reset, loading, getAIResponse } = useConversation()

    return (
        <div className="w-screen h-screen flex flex-col">
            {/* Fixed NavBar */}
            <div className="fixed top-0 left-0 right-0 z-50 ">
                {!loading && message?.type !== "ai" ? (
                    <NavBar setQuery={setQuery} getAIResponse={getAIResponse} />
                ) : (
                    <div className="w-full p-4 flex justify-center bg-white/65 backdrop-blur-lg   border-b border-gray-200">
                        <Avatar width={50} height={50} className={"cursor-pointer"} onClick={reset} />
                    </div>
                )}
            </div>

            {/* Scrollable Chat Area */}
            <div className="flex-1 pt-20 pb-32 overflow-y-auto scrollbar-hide">
                <div className="flex flex-col justify-start items-center py-2">
                    {!message?.message ? (
                        <div className="flex items-center justify-center h-full pt-32">
                            <Avatar />
                        </div>
                    ) : (
                        <div className="w-full md:w-[720px] flex items-start justify-center px-4">
                            <Chat message={message} flags={flags} loading={loading} />
                        </div>
                    )}
                </div>
            </div>

            {/* Fixed Footer */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white">
                <Footer query={query} setQuery={setQuery} getAIResponse={getAIResponse} loading={loading} />
            </div>
        </div>
    )
}

export default HomePage
