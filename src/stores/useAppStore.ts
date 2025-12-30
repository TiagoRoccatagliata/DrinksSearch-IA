import { create } from 'zustand'
import { createRecipeSlice } from './recipeSlice'
import { devtools } from 'zustand/middleware'
import type { RecipeSliceType } from './recipeSlice'
import type { FavoritesSliceType } from './favoritesSlice'
import { createFavoritesSlice } from './favoritesSlice'
import { createNotificationSlice } from './notificationSlice'
import type { NotificationSliceType } from './notificationSlice'
import { createAISlice, type AISlice } from './aiSlice'

export const useAppStore = create<RecipeSliceType & FavoritesSliceType & NotificationSliceType & AISlice>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),
}))) 