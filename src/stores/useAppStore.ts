import { create } from 'zustand'
import { createRecipeSlice } from './recipeSlice'
import { devtools } from 'zustand/middleware'
import type { RecipeSliceType } from './recipeSlice'

export const useAppStore = create<RecipeSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a)
}))) 