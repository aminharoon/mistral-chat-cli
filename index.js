import "dotenv/config"
import readline from 'readline/promises';

import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage } from 'langchain'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const model = new ChatMistralAI({
    model: "mistral-small-latest"
})

const messages = []
while (true) {

    const userInput = await rl.question("You :- ")
    messages.push(new HumanMessage(userInput))

    const response = await model.invoke(userInput)
    messages.push(response)
    console.log(response.text)

}
