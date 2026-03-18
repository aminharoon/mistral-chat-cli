# Mistral Chat CLI

An interactive command-line chatbot powered by [Mistral AI](https://www.mistral.ai/) and [LangChain](https://www.langchain.com/). This application provides a simple yet powerful conversational AI interface for terminal-based interactions.

## Features

- 🤖 **AI-Powered Conversations** - Uses Mistral's `mistral-small-latest` model for intelligent responses
- 💬 **Interactive CLI** - Real-time chat interface in your terminal
- 🔄 **Message History** - Maintains conversation context for natural multi-turn dialogues
- ⚡ **Fast Responses** - Optimized for quick inference and reply times
- 🔐 **Environment-Based Configuration** - Secure API key management with dotenv

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Mistral API Key** - Get one from [Mistral AI Console](https://console.mistral.ai/)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mistral-chat-cli
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Mistral API key:

```env
MISTRAL_API_KEY=your_api_key_here
```

## Usage

Start the chatbot:

```bash
npm start
```

Or run directly with Node.js:

```bash
node index.js
```

Then simply type your messages and press Enter to chat with the AI:

```
You :- Hello, how are you?
```

Press `Ctrl+C` to exit the chat.

## Project Structure

```
.
├── index.js           # Main application entry point
├── package.json       # Project dependencies and metadata
├── .env              # Environment variables (API keys)
├── .env.example      # Example environment file
└── README.md         # This file
```

## Dependencies

- **@langchain/mistralai** - LangChain integration for Mistral AI
- **langchain** - Framework for building with LLMs
- **dotenv** - Environment variable management
- **readline/promises** - Promise-based CLI interface

## How It Works

1. Initializes the Mistral AI model (`mistral-small-latest`)
2. Creates an interactive readline interface for user input
3. Maintains a message history for conversation context
4. Sends messages to the Mistral API and displays responses
5. Continues until user exits (Ctrl+C)

## Configuration

### Environment Variables

- `MISTRAL_API_KEY` - Your Mistral API authentication key

### Model Settings

Current model: `mistral-small-latest`

You can change the model in `index.js`:

```javascript
const model = new ChatMistralAI({
  model: "mistral-large-latest", // or other available models
});
```

## Error Handling

If you encounter issues:

1. Verify your `MISTRAL_API_KEY` is correctly set in `.env`
2. Ensure you have an active internet connection
3. Check that your Mistral API account is active and has available credits
4. Review error messages in the terminal for specific details

## License

ISC

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Support

For issues with Mistral AI API, visit [Mistral Documentation](https://docs.mistral.ai/)
For LangChain questions, check [LangChain Documentation](https://python.langchain.com/docs/)

---

**Happy chatting!** 🚀
