
import { CDPInfo, CDPType, DocumentEntry } from "@/types";

export const CDP_INFO: Record<CDPType, CDPInfo> = {
  segment: {
    id: 'segment',
    name: 'Segment',
    description: 'The Customer Data Platform for developers',
    docUrl: 'https://segment.com/docs/?ref=nav',
    color: '#52BD95'
  },
  mparticle: {
    id: 'mparticle',
    name: 'mParticle',
    description: 'Connect all of your data and use it anywhere',
    docUrl: 'https://docs.mparticle.com/',
    color: '#FF5A60'
  },
  lytics: {
    id: 'lytics',
    name: 'Lytics',
    description: 'Personalized marketing at scale',
    docUrl: 'https://docs.lytics.com/',
    color: '#4842B7'
  },
  zeotap: {
    id: 'zeotap',
    name: 'Zeotap',
    description: 'First-party customer data platform',
    docUrl: 'https://docs.zeotap.com/home/en-us/',
    color: '#FF4785'
  }
};

// This is sample documentation data. In a real implementation, this would be much more extensive
// and likely fetched from an API or indexed from the actual documentation sites.
export const docEntries: DocumentEntry[] = [
  // Segment documentation samples
  {
    id: 'segment-1',
    cdp: 'segment',
    title: 'Setting up a new source in Segment',
    content: 'To set up a new source in Segment: 1) Go to the Segment dashboard. 2) Click on "Add Source" in the Sources section. 3) Search for your desired source type. 4) Follow the source-specific configuration steps. 5) Once configured, Segment will provide you with the necessary tracking code or API keys.',
    url: 'https://segment.com/docs/connections/sources/',
    keywords: ['source', 'setup', 'add source', 'configure', 'tracking code']
  },
  {
    id: 'segment-2',
    cdp: 'segment',
    title: 'Creating audiences in Segment',
    content: 'To create audiences in Segment: 1) Navigate to the Personas section. 2) Click on "Audiences" in the left sidebar. 3) Click "Create Audience". 4) Define audience criteria using traits and events. 5) Name your audience and save it. Your audience will update automatically as new data comes in.',
    url: 'https://segment.com/docs/personas/audiences/',
    keywords: ['audience', 'create audience', 'personas', 'segmentation']
  },
  
  // mParticle documentation samples
  {
    id: 'mparticle-1',
    cdp: 'mparticle',
    title: 'Creating a user profile in mParticle',
    content: 'To create a user profile in mParticle: 1) Implement the mParticle SDK in your app. 2) Use the identify() method to associate a user with a unique ID. 3) Set user attributes with the setUserAttribute() method. 4) User profiles are automatically created and updated as events and attributes are collected.',
    url: 'https://docs.mparticle.com/developers/sdk/web/users/',
    keywords: ['user profile', 'identity', 'identify', 'attributes', 'user attributes']
  },
  {
    id: 'mparticle-2',
    cdp: 'mparticle',
    title: 'Setting up integrations in mParticle',
    content: 'To set up integrations in mParticle: 1) Go to Setup > Outputs. 2) Click "Add Output". 3) Select the desired integration from the list. 4) Configure the integration settings, which may include API keys, event mappings, and other settings. 5) Enable the integration. 6) Create data filters if needed to control what data is sent to the integration.',
    url: 'https://docs.mparticle.com/integrations/',
    keywords: ['integration', 'setup', 'output', 'connect', 'destination']
  },
  
  // Lytics documentation samples
  {
    id: 'lytics-1',
    cdp: 'lytics',
    title: 'Building an audience segment in Lytics',
    content: 'To build an audience segment in Lytics: 1) Navigate to Audiences in the left menu. 2) Click "Create Audience". 3) Select the segment type (behavioral, demographic, etc.). 4) Define your audience criteria using the segment builder. 5) Preview your audience to ensure it captures the right users. 6) Name and save your audience segment.',
    url: 'https://docs.lytics.com/product/segments/',
    keywords: ['audience', 'segment', 'segmentation', 'build audience', 'create segment']
  },
  {
    id: 'lytics-2',
    cdp: 'lytics',
    title: 'Creating campaigns in Lytics',
    content: 'To create a campaign in Lytics: 1) Go to the Campaigns section. 2) Click "Create Campaign". 3) Select a campaign type (web, email, etc.). 4) Choose target audiences. 5) Configure campaign settings and content. 6) Set up A/B testing if desired. 7) Define campaign success metrics. 8) Review and activate your campaign.',
    url: 'https://docs.lytics.com/product/campaigns/',
    keywords: ['campaign', 'create campaign', 'marketing', 'activation']
  },
  
  // Zeotap documentation samples
  {
    id: 'zeotap-1',
    cdp: 'zeotap',
    title: 'Integrating data with Zeotap',
    content: 'To integrate your data with Zeotap: 1) Go to the Sources section in the Zeotap platform. 2) Click "Add New Source". 3) Choose your data source type (CRM, website, app, etc.). 4) Configure the connection settings. 5) Map your data fields to Zeotap\'s unified data model. 6) Set up data sync schedule. 7) Validate and activate the integration.',
    url: 'https://docs.zeotap.com/home/en-us/integrations',
    keywords: ['integration', 'data integration', 'connect data', 'source', 'import data']
  },
  {
    id: 'zeotap-2',
    cdp: 'zeotap',
    title: 'Setting up identity resolution in Zeotap',
    content: 'To set up identity resolution in Zeotap: 1) Navigate to the Identity section. 2) Configure your identity resolution settings. 3) Select the identifiers you want to use (email, phone, cookies, etc.). 4) Define matching rules and priorities. 5) Enable cross-device tracking if needed. 6) Review and save your identity resolution configuration.',
    url: 'https://docs.zeotap.com/home/en-us/identity',
    keywords: ['identity', 'resolution', 'cross-device', 'unified profile', 'customer 360']
  },
  
  // Cross-platform comparisons
  {
    id: 'comparison-1',
    cdp: 'segment',  // Primary categorization, though this is cross-CDP
    title: 'Comparison of audience creation across CDPs',
    content: 'Segment\'s audience creation focuses on event-based segmentation with a straightforward UI and SQL options. mParticle offers real-time audience creation with complex behavioral criteria. Lytics emphasizes predictive audiences using ML models. Zeotap specializes in enriching audiences with third-party data and identity resolution. Segment and mParticle have more developer-friendly interfaces, while Lytics and Zeotap offer more marketer-friendly UIs.',
    url: 'https://segment.com/docs/personas/audiences/',
    keywords: ['comparison', 'audience', 'segment', 'personas', 'differences', 'platforms']
  }
];

// Function to search the documentation based on a query
export function searchDocumentation(query: string, cdp?: CDPType | CDPType[]): DocumentEntry[] {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(' ').filter(word => word.length > 2);
  
  // If specific CDPs are requested, filter by them
  let filteredDocs = docEntries;
  if (cdp) {
    const cdpArray = Array.isArray(cdp) ? cdp : [cdp];
    filteredDocs = docEntries.filter(entry => cdpArray.includes(entry.cdp));
  }
  
  // Score each document based on relevance to the query
  return filteredDocs
    .map(doc => {
      let score = 0;
      
      // Check title match
      if (doc.title.toLowerCase().includes(queryLower)) {
        score += 10;
      }
      
      // Check content match
      if (doc.content.toLowerCase().includes(queryLower)) {
        score += 5;
      }
      
      // Check keyword matches
      queryWords.forEach(word => {
        if (doc.keywords.some(keyword => keyword.includes(word))) {
          score += 3;
        }
      });
      
      return { doc, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.doc);
}

// Get information about a specific CDP
export function getCDPInfo(cdp: CDPType): CDPInfo {
  return CDP_INFO[cdp];
}

// Function to detect which CDP a query is about
export function detectCDP(query: string): CDPType[] {
  const queryLower = query.toLowerCase();
  const mentionedCDPs: CDPType[] = [];
  
  if (queryLower.includes('segment')) mentionedCDPs.push('segment');
  if (queryLower.includes('mparticle') || queryLower.includes('m particle')) mentionedCDPs.push('mparticle');
  if (queryLower.includes('lytics')) mentionedCDPs.push('lytics');
  if (queryLower.includes('zeotap')) mentionedCDPs.push('zeotap');
  
  return mentionedCDPs;
}

// Function to detect if a query is a "how-to" question
export function isHowToQuestion(query: string): boolean {
  const queryLower = query.toLowerCase();
  const howToPatterns = [
    'how to', 'how do i', 'how can i', 'how would i',
    'steps to', 'guide for', 'process for', 'way to',
    'instructions for', 'tutorial'
  ];
  
  return howToPatterns.some(pattern => queryLower.includes(pattern));
}

// Function to detect if a query is asking for a comparison
export function isComparisonQuestion(query: string): boolean {
  const queryLower = query.toLowerCase();
  const comparisonPatterns = [
    'compare', 'comparison', 'versus', 'vs', 'difference', 
    'better', 'best', 'prefer', 'advantages', 'disadvantages'
  ];
  
  return comparisonPatterns.some(pattern => queryLower.includes(pattern));
}

// Function to determine if a question is relevant to CDPs
export function isRelevantToCDP(query: string): boolean {
  const queryLower = query.toLowerCase();
  const cdpRelevantTerms = [
    'cdp', 'customer data platform', 'segment', 'mparticle', 'lytics', 'zeotap',
    'audience', 'user profile', 'data integration', 'tracking', 'analytics',
    'source', 'destination', 'identity', 'user data', 'event tracking'
  ];
  
  return cdpRelevantTerms.some(term => queryLower.includes(term)) ||
         detectCDP(queryLower).length > 0;
}
