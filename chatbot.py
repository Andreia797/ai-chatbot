from flask import Flask, render_template, request, jsonify
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

# Criando o chatbot
aichatbot = ChatBot("AI Assistant")
trainer = ChatterBotCorpusTrainer(aichatbot)
trainer.train("chatterbot.corpus.english")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get", methods=["POST"])
def get_bot_response():
    user_text = request.form["msg"]
    response = aichatbot.get_response(user_text)
    return jsonify({"response": str(response)})

if __name__ == "__main__":
    app.run(debug=True)
