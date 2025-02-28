
# CDP Assistant

## Project Overview

CDP Assistant is an intelligent chatbot designed to provide information and guidance about Customer Data Platforms (CDPs). The application allows users to ask questions about four major CDPs: Segment, mParticle, Lytics, and Zeotap, and receive accurate, relevant answers sourced from official documentation.



## Features

### Core Functionality

- **Interactive Chat Interface**: Sleek, modern chat UI with smooth animations and responsive design.
- **Intelligent Query Processing**: The assistant can understand and respond to various types of questions, including:
  - How-to guides for specific tasks within each CDP
  - General information about CDP features and capabilities
  - Comparisons between different platforms
  - Platform-specific implementation details

- **Real-time Response Generation**: Immediate responses with visual typing indicators for a natural conversational feel.
- **CDP-Specific Visual Cues**: Color-coded responses based on the CDP being discussed for better visual organization.

### Question Handling

- **"How-to" Question Recognition**: Automatically detects when users ask for step-by-step instructions and formats responses accordingly.
- **Cross-CDP Comparisons**: Can compare features, workflows, and implementations across different platforms.
- **Query Relevance Filtering**: Intelligently handles irrelevant queries by steering the conversation back to CDP-related topics.
- **Question Variation Support**: Accommodates different phrasing styles and terminology for the same question.

### Documentation Integration

- **Automated Information Extraction**: Retrieves specific, relevant information from extensive CDP documentation.
- **Direct Documentation Links**: Provides source links to official documentation for deeper exploration.
- **Keyword-Based Relevance Scoring**: Ranks information based on relevance to user queries for accurate responses.

### User Experience

- **Dark/Light Mode Toggle**: Support for both light and dark themes with system preference detection.
- **User Authentication**: Complete login and registration system with:
  - Form validation
  - Secure local storage
  - User session persistence
  - Personalized experience based on login status

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop and mobile devices.
- **Accessibility Features**: Semantic HTML, keyboard navigation support, and screen reader compatibility.

### Visual Design

- **Neo-morphic UI Elements**: Subtle shadows and glass-like effects for a modern, sophisticated look.
- **Smooth Animations**: Thoughtful motion design for message transitions, typing indicators, and UI interactions.
- **Platform-Specific Color Coding**:
  - Segment: Green (#52BD95)
  - mParticle: Red (#FF5A60)
  - Lytics: Purple (#4842B7)
  - Zeotap: Pink (#FF4785)

## Technical Implementation

- **Frontend Framework**: React with TypeScript for type safety and better developer experience.
- **State Management**: React Context API for global state management with custom hooks.
- **Styling**: Tailwind CSS for utility-first styling with custom animations and effects.
- **Animation Library**: Framer Motion for smooth, physics-based animations.
- **Authentication**: Custom implementation with local storage for demo purposes.
- **Query Processing**: Custom NLP-like functionality to extract intent and context from user queries.
- **Data Storage**: In-memory documentation database with search capabilities.

## CDP Platforms Covered

### Segment
The Customer Data Platform for developers, offering powerful tools for collecting, cleaning, and controlling customer data.

### mParticle
An enterprise customer data platform that connects all of your data and allows you to use it anywhere.

### Lytics
A customer data platform focused on personalized marketing at scale using machine learning.

### Zeotap
A first-party customer data platform specializing in identity resolution and enrichment.

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open your browser to the local development URL

## Examples of Questions

- "How do I set up a new source in Segment?"
- "How can I create a user profile in mParticle?"
- "How do I build an audience segment in Lytics?"
- "How can I integrate my data with Zeotap?"
- "Compare audience creation between Segment and Lytics"
- "What's the difference between mParticle and Zeotap for identity resolution?"

## Future Enhancements

- Integration with actual CDP APIs for real-time data access
- Advanced machine learning for query understanding and response generation
- User history and conversation memory
- Multi-language support
- Voice interface for hands-free interaction
