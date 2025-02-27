
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SendHorizonal, Trash } from "lucide-react";
import { MessageType } from "@/types";
import Message from "./Message";
import { createMessage, processQuery, getGreetingMessage } from "@/utils/chatUtils";

const ChatInterface = () => {
  const [messages, setMessages] = useState<MessageType[]>([getGreetingMessage()]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to the latest message
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus on input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = createMessage(input, true);
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI thinking time for smoother UX
    setTimeout(() => {
      // Process query and generate response
      const { response, cdpHighlight } = processQuery(userMessage.content);
      const botMessage = createMessage(response, false, cdpHighlight);
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleClearChat = () => {
    setMessages([getGreetingMessage()]);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto w-full px-4">
      <div className="flex-1 overflow-y-auto py-6 space-y-6">
        <AnimatePresence>
          {messages.map((message, index) => (
            <Message key={message.id} message={message} index={index} />
          ))}
          
          {isTyping && (
            <motion.div
              className="bg-card rounded-lg p-4 max-w-3xl mx-auto w-full neo-morphism"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-card border">
                  <span className="flex space-x-1">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0ms" }}></span>
                    <span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: "300ms" }}></span>
                    <span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: "600ms" }}></span>
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">CDP Assistant is typing...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messageEndRef} />
      </div>
      
      <motion.div
        className="py-4 border-t"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <form onSubmit={handleSubmit} className="flex gap-2">
          <button
            type="button"
            onClick={handleClearChat}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            title="Clear chat"
          >
            <Trash className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Segment, mParticle, Lytics, or Zeotap..."
            className="flex-1 px-4 py-2 rounded-full bg-secondary border focus:ring-2 focus:ring-primary focus:outline-none"
          />
          
          <button
            type="submit"
            disabled={!input.trim()}
            className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SendHorizonal className="h-5 w-5" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ChatInterface;
