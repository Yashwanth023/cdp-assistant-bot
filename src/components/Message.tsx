
import { motion } from "framer-motion";
import { MessageType, CDPType } from "@/types";
import { MessageSquare, Bot, ExternalLink } from "lucide-react";
import { CDP_INFO } from "@/lib/cdpData";

interface MessageProps {
  message: MessageType;
  index: number;
}

const Message = ({ message, index }: MessageProps) => {
  const { content, isUser, cdpHighlight } = message;
  
  // Determine background and highlights based on message sender and CDP
  const getBgClass = () => {
    if (isUser) return "bg-secondary";
    if (cdpHighlight) {
      switch (cdpHighlight) {
        case "segment": return "border-l-4 border-l-cdp-segment bg-gradient-to-r from-cdp-segment/5 to-transparent";
        case "mparticle": return "border-l-4 border-l-cdp-mparticle bg-gradient-to-r from-cdp-mparticle/5 to-transparent";
        case "lytics": return "border-l-4 border-l-cdp-lytics bg-gradient-to-r from-cdp-lytics/5 to-transparent";
        case "zeotap": return "border-l-4 border-l-cdp-zeotap bg-gradient-to-r from-cdp-zeotap/5 to-transparent";
        default: return "bg-card";
      }
    }
    return "bg-card";
  };

  // Format the message content with links and highlights
  const formatContent = () => {
    let formattedContent = content;
    
    // Handle numbered lists
    formattedContent = formattedContent.replace(/(\d+\))([^\n]+)/g, '<li class="ml-5 list-decimal">$1$2</li>');
    
    // Handle URLs
    formattedContent = formattedContent.replace(
      /(https?:\/\/[^\s]+)/g, 
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-primary underline inline-flex items-center gap-1">$1 <ExternalLink className="h-3 w-3" /></a>'
    );
    
    // Handle bold text
    formattedContent = formattedContent.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    
    // Handle CDP name highlighting
    Object.values(CDP_INFO).forEach(cdp => {
      const regex = new RegExp(`${cdp.name}`, 'g');
      formattedContent = formattedContent.replace(
        regex, 
        `<span class="font-medium" style="color: ${cdp.color}">${cdp.name}</span>`
      );
    });
    
    return formattedContent;
  };

  return (
    <motion.div
      className={`${getBgClass()} rounded-lg p-4 mb-4 max-w-3xl mx-auto w-full neo-morphism`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100 
      }}
    >
      <div className="flex gap-3">
        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
          isUser ? "bg-primary text-primary-foreground" : "bg-card border"
        }`}>
          {isUser ? <MessageSquare className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium mb-1">
            {isUser ? "You" : "CDP Assistant"}
            {cdpHighlight && (
              <span 
                className="ml-2 text-xs px-2 py-0.5 rounded-full" 
                style={{ backgroundColor: CDP_INFO[cdpHighlight].color + '20', color: CDP_INFO[cdpHighlight].color }}
              >
                {CDP_INFO[cdpHighlight].name}
              </span>
            )}
          </p>
          <div 
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent() }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Message;
