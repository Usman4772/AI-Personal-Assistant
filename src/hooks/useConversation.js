import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { apiUrl } from "@/lib/utils";

export default function useConversation() {
  const [query, setQuery] = useState(null);
  const [message, setMessage] = useState({
    type: "user",
    text: null,
  });
  const [flags, setFlags] = useState({
    projects: false,
    experience: false,
    journey: false,
    skills: false,
    education: false,
    contact: false,
  });

  const [loading, setLoading] = useState(false);

  function reset() {
    setQuery(null);
    setMessage({
      type: "user",
      message: null,
    });
    setFlags({
      projects: false,
      experience: false,
      journey: false,
      skills: false,
      education: false,
      contact: false,
    });
  }
  async function getAIResponse(query) {
    if (!query || query.trim() === "") return;

    try {
      setLoading(true);
      setMessage({
        type: "user",
        message: query,
      });
      const response = await axios.post(
        apiUrl("conversation"),
        { query }
      );
      if (response?.data?.success) {
        setMessage({
          type: "ai",
          message: response?.data?.data?.message,
        });
        setFlags(response?.data?.data);
        setQuery(null);
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
      reset();
    } finally {
      setLoading(false);
    }
  }
  return {
    loading,
    message,
    setMessage,
    flags,
    query,
    reset,
    setQuery,
    setFlags,
    getAIResponse,
  };
}
