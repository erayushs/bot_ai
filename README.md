# Bot AI - Conversational Feedback Application

This application enables users to interact with an AI model in a chat format and provide feedback at multiple levels. Users can give feedback on individual responses, rate the entire conversation, and leave detailed comments. Saved conversations and feedback are accessible for future review, and a dedicated feedback view allows filtering by rating. This project uses Material UI for responsive styling.

## Table of Contents

- Getting Started

  - Prerequisites
  - Installation

- Usage
- Technical Choices
- Design Choices
- Trade-offs and Future Improvements

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:

`git clone https://github.com/erayushs/bot_ai.git`
`cd bot_ai`

2. Install dependencies:

`npm install`

### Starting the Application

1. Start the development server:

`npm start`

2. Open http://localhost:3000 to view the application in the browser.

### Usage

1. **Start a Conversation:** Begin a new chat session by typing a question. The application simulates AI responses using a JSON file with predefined answers.

2. **Provide Feedback:**

   - **Thumbs Up/Down:** Hover over each AI response to reveal thumbs up/down buttons. Click to provide feedback on specific responses.

   - **Rate the Conversation:** After completing a conversation, rate the session on a 5-star or Likert scale.

   - **Subjective Feedback:** Enter any additional thoughts on the overall conversation quality.

3. **View Past Conversations:** Saved conversations can be revisited from a side or top panel, displaying user feedback alongside AI responses.

4. **Feedback Overview:** A dedicated feedback view displays all feedback across conversations in a sortable and filterable table, allowing filtering by ratings.

### Technical Choices

**Material UI:** Used for consistent styling and theming across the application.
**Mocked AI Responses (JSON):** Uses a JSON file to simulate AI responses, ensuring consistent and predictable interactions for development.
**Local State Management:** Manages conversation data in local state for fast updates, with storage in localStorage to enable viewing saved chats after refresh.

### Design Choices

- **Hover-Triggered Feedback Buttons:** Thumbs up/down buttons appear on hover over each AI response, keeping the interface clean while enabling granular feedback.
- **End-of-Conversation Rating and Feedback:** Rating and feedback features capture user sentiment, with a 5-star or Likert scale rating and space for additional comments.
- **Feedback Table View:** Organizing feedback in a table supports easy filtering and sorting for better insights.

### Trade-offs and Future Improvements

- **Real-Time AI Integration:** Using a live AI API could enhance chat realism, which could be added in future iterations.
- **Centralized State Management:** For larger projects, Redux or a similar state management library could improve state handling across components.
- **Expanded Feedback Options:** Adding additional metrics like relevance or satisfaction would enrich insights and could be prioritized in future versions.
- **User Accounts:** Implementing authentication would allow users to save and access feedback across sessions.
