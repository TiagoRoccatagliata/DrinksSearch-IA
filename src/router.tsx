import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"))
const IndexPage = lazy(() => import("./pages/IndexPage"))


export default function AppRouter() {


    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={
                        <Suspense fallback="Cargando...">
                            <IndexPage />
                        </Suspense>
                    } />
                    <Route path='/favoritos' element={
                        <Suspense fallback="Cargando...">
                            <FavoritesPage />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
