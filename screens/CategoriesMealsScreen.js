import React from "react"
import MealItem from "../components/MealItem"
import MealList from "../components/MealList"
import { CATEGORIES, MEALS } from "../data/dummy-data"

const CategorieMealScreen = props => {
    const catId = props.navigation.getParam("categoryId")

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    )
}

CategorieMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId")
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title
    }
}



export default CategorieMealScreen