import React from "react"
import { Platform, Text } from "react-native"
import Colors from "../constants/Colors"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import CategorieMealScreen from "../screens/CategoriesMealsScreen"
import CategoriesScreen from "../screens/CategoriesScreen"
import MealDetailScreen from "../screens/MealDetailScreen"
import { createBottomTabNavigator } from "react-navigation-tabs"
import FavoriteScreen from "../screens/FavoritesScreen"
import { Ionicons, Ionics } from "@expo/vector-icons"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import { createDrawerNavigator } from "react-navigation-drawer"
import FiltersScreen from "../screens/FiltersScreen"

const defaultStackOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTitleStyle: {
        fontFamily: "open-sans-bold"
    },
    headerBackTitleStyle: {
        fontFamily: "open-sans"
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
    headerTitle: "Recipes App",
}

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: { screen: CategorieMealScreen },
    MealDetail: MealDetailScreen
}, {
    // initialRouteName: "Categories",
    defaultNavigationOptions: defaultStackOptions
})

const FavNavigator = createStackNavigator({
    Favorite: FavoriteScreen,
    MealDetail: MealDetailScreen,
}, {
    // initialRouteName: "Categories",
    defaultNavigationOptions: defaultStackOptions
})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            /* tabBarLabel: "Meals Categories", */
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === "android" ? <Text styles={{ fontFamily: "open-sans-bold" }}>Favorites</Text> : "Favorites"
        }
    }
}

const FiltersNavigatior = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: defaultStackOptions
})

const MealsFavTabNavigator = Platform.OS === "android" ? createMaterialBottomTabNavigator(tabScreenConfig, {
    /* activeColor: Colors.accentColor, */
    shifting: true
}) : createBottomTabNavigator(
    tabScreenConfig
    , {
        tabBarOptions: {
            labelStyle: {
                fontFamily: "open-sans-bold"
            },
            activeTintColor: Colors.accentColor
        }
    })

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: "Meals"
        },
    },
    Filters: FiltersNavigatior
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: "open-sans-bold"
        }
    }
});

//always one root navigator
export default createAppContainer(MainNavigator)