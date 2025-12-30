import type { StateCreator } from "zustand";
import AIServices from "../services/AiService";

export type AISlice = {
    recipe: string;
    generateRecipe: (prompt: string) => Promise<void>;
};

export const createAISlice: StateCreator<AISlice, [], [], AISlice> = (set) => ({
    recipe: "",
    generateRecipe: async (prompt: string) => {
        try {
            const stream = await AIServices.generateRecipe(prompt);
            let fullText = "";
            for await (const textPart of stream) {
                fullText += textPart;
            }
            set({ recipe: fullText });
        } catch (error) {
            console.error("Error generando receta:", error);
        }
    },
});