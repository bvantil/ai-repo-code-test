var chatInterface = {
    chatBox: document.getElementById('chatBox'),
    userInput: document.getElementById('userInput'),
    sendButton: document.getElementById('sendButton'),

    UserMessage: function(text) {
        this.text = text;
        this.time = new Date();
    },

    AiMessage: function(text) {
        this.text = text;
        this.time = new Date();
    },

    displayMessage: function(message, sender) {
        var messageElement = document.createElement('div');
        messageElement.textContent = message.text;
        messageElement.classList.add(sender);
        this.chatBox.appendChild(messageElement);
    },

    handleUserInput: function() {
        var text = this.userInput.value;
        var message = new this.UserMessage(text);
        this.displayMessage(message, 'user');
        this.userInput.value = '';
        return message;
    },

    handleAiResponse: function(text) {
        var message = new this.AiMessage(text);
        this.displayMessage(message, 'ai');
    },

    init: function() {
        var self = this;
        this.sendButton.addEventListener('click', function() {
            var message = self.handleUserInput();
            aiCoach.processMessage(message);
        });
    }
};

chatInterface.init();