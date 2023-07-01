```javascript
// Importing dependencies
import { aiCoach } from './ai_coach.js';
import { speechRecognition } from './speech_recognition.js';
import { speechSynthesis } from './speech_synthesis.js';
import { chatInterface } from './chat_interface.js';
import { mobileResponsive } from './mobile_responsive.js';

// UserMessage and AiMessage schemas
class UserMessage {
  constructor(content) {
    this.content = content;
  }
}

class AiMessage {
  constructor(content) {
    this.content = content;
  }
}

// DOM Elements
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Event listener for send button
sendButton.addEventListener('click', handleUserInput);

// Function to handle user input
function handleUserInput() {
  let userMessage = new UserMessage(userInput.value);
  chatInterface.displayMessage(userMessage, 'userMessage');
  aiCoach.processMessage(userMessage);
}

// Function to handle AI response
function handleAiResponse(aiMessage) {
  chatInterface.displayMessage(aiMessage, 'aiMessage');
  speechSynthesis.speak(aiMessage.content);
}

// Function to start speech recognition
function startSpeechRecognition() {
  speechRecognition.startRecognition(handleUserInput);
}

// Function to start speech synthesis
function startSpeechSynthesis() {
  speechSynthesis.startSynthesis();
}

// Function to make the app responsive
function makeResponsive() {
  mobileResponsive.adjustLayout();
}

// Initialize the app
function init() {
  startSpeechRecognition();
  startSpeechSynthesis();
  makeResponsive();
}

init();
```