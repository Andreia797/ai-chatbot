document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message === "") return;

        displayMessage(message, "user-message");
        userInput.value = "";

        setTimeout(() => {
            const botResponse = getBotResponse(message);
            displayMessage(botResponse, "bot-message");
        }, 500);
    }

    function displayMessage(message, className) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("message", className);
        msgDiv.textContent = message;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(input) {
        const responses = {  
            "hello": "Hello! 😊 How can I assist you today?",  
            "how are you": "I'm just a bot, but I'm doing great! 🤖 How about you?",  
            "what is your name": "I'm Luka! 💖",  
            "bye": "Goodbye! Have a great day! 🌟",  
            "thank you": "You're welcome! If you need anything else, just ask. 😊",  
            "what can you do": "I can help answer questions, provide information, and chat with you! 💬",  
            "tell me a joke": "Why don't scientists trust atoms? Because they make up everything! 😂",  
            "good morning": "Good morning! ☀️ Hope you have a wonderful day ahead!",  
            "good night": "Good night! Sleep well and sweet dreams! 🌙",  
            "como você está": "Estou apenas um bot, mas estou ótimo! E você? 😊",  
            "qual é o seu nome": "Eu sou Luka! 💖",  
            "obrigado": "De nada! Se precisar de mais alguma coisa, é só perguntar. 😊",  
            "o que você pode fazer": "Posso ajudar a responder perguntas, fornecer informações e conversar com você! 💬",  
            "me conte uma piada": "Por que o livro de matemática se suicidou? Porque tinha muitos problemas! 📚😂",  
            "bom dia": "Bom dia! ☀️ Espero que você tenha um dia maravilhoso!",  
            "boa noite": "Boa noite! Durma bem e tenha doces sonhos! 🌙",  
            "how is the weather": "I can't check, but I hope it's nice wherever you are! ☁️",  
            "what is your favorite color": "I don't have a favorite color, but I love all the colors of the world! 🌈",  
            "how old are you": "I don't have an age like humans do, but I've been learning for a while! 📅",  
            "what do you like to eat": "As a bot, I don't eat, but I love to help you find recipes! 🍽️",  
            "do you play games": "I don't play games, but I can help you find some fun ones! 🎮",  
            "tell me something interesting": "Did you know honey never spoils? 🍯 Archaeologists have found pots of honey in ancient tombs that are over 3000 years old!",  
            "what is your favorite movie": "I don't watch movies, but I can recommend popular ones! 🎬",  
            "do you have any hobbies": "I love chatting with people and learning new things! 💬📚",  
            "what's your purpose": "My purpose is to assist you with your queries and provide information. 🤖",  
            "quem é você": "Eu sou um chatbot desenvolvido para ajudar você! 💖",  
            "qual é o seu filme favorito": "Eu não assisto a filmes, mas posso recomendar alguns populares! 🎬",  
            "você tem algum hobby": "Eu adoro conversar com as pessoas e aprender coisas novas! 💬📚",  
            "qual é o seu propósito": "Meu propósito é ajudar você com suas dúvidas e fornecer informações. 🤖",  
            "what are your thoughts on AI": "AI can be incredibly helpful when used positively. It's exciting technology! 🤖✨",  
            "quais são os seus pensamentos sobre a IA": "A IA pode ser incrivelmente útil quando usada de forma positiva. É uma tecnologia empolgante! 🤖✨",  
            "what's your favorite book": "I don't read books, but I can suggest some bestsellers! 📚",  
            "qual é o seu livro favorito": "Eu não leio livros, mas posso sugerir alguns sucessos de vendas! 📚",  
            "can you sing a song": "I can't sing, but I can help you find song lyrics! 🎶",  
            "você pode cantar uma música": "Eu não posso cantar, mas posso ajudar você a encontrar letras de músicas! 🎶",  
            "do you like animals": "I think animals are fascinating! 🐾 What’s your favorite animal?",  
            "você gosta de animais": "Acho que os animais são fascinantes! 🐾 Qual é o seu animal favorito?",  
            "what's on your mind": "I'm here to listen to you! 💬 What's on your mind?",  
            "o que você está pensando": "Estou aqui para ouvir você! 💬 O que está passando pela sua cabeça?",  
            "can you help with homework": "Absolutely! 📚 What subject do you need help with?",  
            "você pode ajudar com a lição de casa": "Claro! 📚 Em que assunto você precisa de ajuda?",  
            "what's your favorite dish": "I don't eat, but I can give you recipes for delicious dishes! 🍽️",  
            "qual é o seu prato favorito": "Eu não como, mas posso te dar receitas de pratos deliciosos! 🍽️",  
            "do you believe in love": "Love is a beautiful feeling! ❤️ What are your thoughts on it?",  
            "você acredita no amor": "O amor é um sentimento lindo! ❤️ Quais são seus pensamentos sobre isso?",  
            "where are you from": "I live in the digital world, created to assist you! 🌐",  
            "de onde você é": "Eu vivo no mundo digital, criado para ajudar você! 🌐",  
            "what’s a fun fact": "Did you know that octopuses have three hearts? 🐙 Fascinating, right?",  
            "qual é um fato divertido": "Você sabia que polvos têm três corações? 🐙 Fascinante, não é?",  
            "what do you think about the future": "The future holds endless possibilities! 🌟 I'm excited to see how technology evolves.",  
            "o que você pensa sobre o futuro": "O futuro guarda infinitas possibilidades! 🌟 Estou animado para ver como a tecnologia evolui."  
        };  
        
        input = input.toLowerCase();  
        return responses[input] || "Sorry, I don't understand that. 🤔";
    }
});
