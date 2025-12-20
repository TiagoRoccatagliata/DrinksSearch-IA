import type { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import type { Categories, Drinks, Drink, SearchFilter, Recipe } from "../types"

export type RecipeSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}


export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    modal: false,
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe,
            modal: true
        })
    },
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    }
})