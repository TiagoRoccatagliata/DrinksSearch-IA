import axios from "axios"
import { CategoriesAPIResponseSchema, DrinksAPIResponse } from "../utils/recipe-schema"
import type { SearchFilter } from "../types"


export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const { data } = await axios(url)
    console.log('Categories API Response:', data)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    console.log('Categories Zod validation result:', result)
    if (result.success) {
        return result.data
    }
    console.error('Categories validation failed:', result.error)
    throw new Error('Failed to validate categories API response')
}


export async function getRecipes(filters: SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data } = await axios(url)
    console.log('API Response:', data)
    const result = DrinksAPIResponse.safeParse(data)
    console.log('Zod validation result:', result)
    if(result.success) {
        return result.data
    }
    console.error('Validation failed:', result.error)
    throw new Error('Failed to validate API response')
}
