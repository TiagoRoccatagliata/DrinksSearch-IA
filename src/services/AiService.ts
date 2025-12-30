import { streamText } from "ai";
import { openRouter } from "../lib/ai";

export default {
    async generateRecipe(prompt: string) {
        const result = await streamText({
            model: openRouter.chat("meta-llama/llama-3.3-70b-instruct:free"),
            prompt,
        });
        return result.textStream;
    },
};