import { Platform } from "react-native"
import Colors from "../constants/Colors"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import CategorieMealScreen from "../screens/CategoriesMealsScreen"
import CategoriesScreen from "../screens/CategoriesScreen"
import MealDetailScreen from "../screens/MealDetailScreen"

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: { screen: CategorieMealScreen },
    MealDetail: MealDetailScreen
}, {
    // initialRouteName: "Categories",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
        headerTitle: "Recipes App"
    }
})

export default createAppContainer(MealsNavigator)