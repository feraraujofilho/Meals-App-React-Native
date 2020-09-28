import { createStackNavigator } from "react-navigation-stack"
import CategorieMealScreen from "../screens/CategoriesMealsScreen"
import CategoriesScreen from "../screens/CategoriesScreen"
import MealDetailScreen from "../screens/MealDetailScreen"

createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategorieMealScreen,
    MealDetail: MealDetailScreen
})