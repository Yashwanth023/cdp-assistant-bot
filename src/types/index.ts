
export type CDPType = 'segment' | 'mparticle' | 'lytics' | 'zeotap';

export interface CDPInfo {
  id: CDPType;
  name: string;
  description: string;
  docUrl: string;
  color: string;
}

export interface MessageType {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  cdpHighlight?: CDPType;
}

export interface DocumentEntry {
  id: string;
  cdp: CDPType;
  title: string;
  content: string;
  url: string;
  keywords: string[];
}
