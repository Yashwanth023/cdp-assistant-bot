
import { v4 as uuidv4 } from 'uuid';
import { MessageType, CDPType, DocumentEntry } from '@/types';
import { 
  searchDocumentation, 
  detectCDP, 
  isHowToQuestion, 
  isComparisonQuestion, 
  isRelevantToCDP,
  getCDPInfo
} from '@/lib/cdpData';

// Generate a new message object
export const createMessage = (content: string, isUser: boolean, cdpHighlight?: CDPType): MessageType => {
  return {
    id: uuidv4(),
    content,
    isUser,
    timestamp: new Date(),
    cdpHighlight
  };
};

// Default responses
const DEFAULT_GREETING = "Hello! I'm your CDP Assistant. I can help you with questions about Segment, mParticle, Lytics, and Zeotap. How can I assist you today?";
const IRRELEVANT_RESPONSE = "I'm designed to assist with questions about Customer Data Platforms (CDPs) like Segment, mParticle, Lytics, and Zeotap. Could you please ask a question related to one of these platforms?";
const NO_RESULTS_RESPONSE = "I couldn't find specific information about that in my knowledge base. Could you try rephrasing your question or ask about a different aspect of CDPs?";

// Process a user query and generate a response
export const processQuery = (query: string): { response: string, cdpHighlight?: CDPType } => {
  // Check if query is relevant to CDPs
  if (!isRelevantToCDP(query)) {
    return { response: IRRELEVANT_RESPONSE };
  }
  
  // Detect which CDPs are mentioned in the query
  const mentionedCDPs = detectCDP(query);
  
  // Check if it's a how-to question
  const isHowTo = isHowToQuestion(query);
  
  // Check if it's a comparison question
  const isComparison = isComparisonQuestion(query);
  
  let relevantDocs: DocumentEntry[] = [];
  let cdpHighlight: CDPType | undefined;
  
  // For comparison questions, search across all CDPs
  if (isComparison) {
    relevantDocs = searchDocumentation(query);
  } 
  // For specific CDP questions, search only in that CDP's docs
  else if (mentionedCDPs.length > 0) {
    relevantDocs = searchDocumentation(query, mentionedCDPs);
    if (mentionedCDPs.length === 1) {
      cdpHighlight = mentionedCDPs[0];
    }
  } 
  // For general questions, search all docs
  else {
    relevantDocs = searchDocumentation(query);
  }
  
  // If no relevant docs were found
  if (relevantDocs.length === 0) {
    return { response: NO_RESULTS_RESPONSE };
  }
  
  // Generate response based on the most relevant document
  const topDoc = relevantDocs[0];
  
  // For a how-to question, return the step-by-step guide
  if (isHowTo) {
    const cdpInfo = getCDPInfo(topDoc.cdp);
    return { 
      response: `${topDoc.content}\n\nYou can find more details in the ${cdpInfo.name} documentation: ${topDoc.url}`, 
      cdpHighlight: topDoc.cdp 
    };
  }
  
  // For a comparison question, format the response accordingly
  if (isComparison) {
    if (topDoc.id.includes('comparison')) {
      return { response: topDoc.content };
    } else {
      // If we don't have a specific comparison doc, create a comparison from the docs we have
      const uniqueCDPs = Array.from(new Set(relevantDocs.map(doc => doc.cdp)));
      if (uniqueCDPs.length > 1) {
        let response = "Here's a comparison based on available information:\n\n";
        uniqueCDPs.forEach(cdp => {
          const cdpDocs = relevantDocs.filter(doc => doc.cdp === cdp);
          if (cdpDocs.length > 0) {
            const cdpInfo = getCDPInfo(cdp);
            response += `**${cdpInfo.name}**: ${cdpDocs[0].content.split('.')[0]}.\n\n`;
          }
        });
        return { response };
      }
    }
  }
  
  // Default response using the most relevant document
  return { 
    response: topDoc.content,
    cdpHighlight: topDoc.cdp
  };
};

// Initial greeting message
export const getGreetingMessage = (): MessageType => {
  return createMessage(DEFAULT_GREETING, false);
};
