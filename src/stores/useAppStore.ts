import { create } from 'zustand'
import { createRecipeSlice } from './recipeSlice'
import { devtools } from 'zustand/middleware'
import type { RecipeSliceType } from './recipeSlice'
import type { FavoritesSliceType } from './favoritesSlice'
import { createFavoritesSlice } from './favoritesSlice'

export const useAppStore = create<RecipeSliceType & FavoritesSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
}))) 