import SyncLoader from "react-spinners/SyncLoader";
import Skills from "./Skills";
import Contact from "./Contact";
import Journey from "./Journey";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ReactMarkdown from "react-markdown";
function Chat({ message, flags, loading }) {
  if (!message) return null;

  const isUser = message.type === "user";
  const isAI = message.type === "ai";

  if (loading && isUser) {
    return (
      <div className="flex flex-col w-full">
        <div className=" w-full flex justify-end mb-4 animate-slideUp">
          <div className="max-w-[80%] md:max-w-[60%]">
            <div className="px-4 py-3 rounded-2xl rounded-br-md bg-primary-container text-white shadow-[0_8px_20px_rgba(0,82,255,0.22)]">
              <div className="text-sm md:text-base leading-relaxed break-words whitespace-pre-wrap">
                {message?.message}
              </div>
            </div>
          </div>
        </div>
        {loading && (
          <div className="w-14 h-10 bg-gray-100 rounded-md flex items-center justify-center">
            <SyncLoader
              speedMultiplier={1}
              size={5}
              loading={loading}
              color="#0052ff"
            />
          </div>
        )}
      </div>
    );
  }

  if (!loading && isAI) {
    return (
      <div className="w-full">
        {flags?.skills && (
          <div className="animate-slideUp">
            <Skills />
          </div>
        )}

        {flags?.contact && (
          <div className="animate-slideUp">
            <Contact />
          </div>
        )}

        {flags?.projects && (
          <div className="animate-slideUp">
            <Projects />
          </div>
        )}

        {flags?.about && (
          <div className="animate-slideUp ">
            <AboutMe />
          </div>
        )}

        {(flags?.journey || flags?.experience) && (
          <div className="animate-slideUp ">
            <Journey />
          </div>
        )}
        <div className=" w-full flex justify-start mb-4 animate-slideUp">
          <div className=" min-w-[20%] max-w-full">
            <div className="px-4 py-3  text-gray-800 ">
              <div className="text-sm md:text-base leading-relaxed">
                <ReactMarkdown>{message?.message}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Chat;
