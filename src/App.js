import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from "./components/Home"
import MealPlanner from "./components/mealplanner"
import Recipe from "./components/recipe"

export default function App() {
    return (
        <Router>
            <Routes>
                {/* <Route exact path="/" element={<Home/>}/> */}
                <Route exact path="/" element={<MealPlanner />}/>
                <Route exact path="/recipe" element={<Recipe />}/>
            </Routes>
        </Router>
    );
}