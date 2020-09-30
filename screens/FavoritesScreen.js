import React from "react"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/HeaderButton"
import MealList from "../components/MealList"
import { MEALS } from "../data/dummy-data"

const FavoriteScreen = props => {
    const favorites = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2")

    return (
        <MealList listData={favorites} navigation={props.navigation} />
    )
}

FavoriteScreen.navigationOptions = navData => {
    return {
        headerTitle: "Your Favorites",
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => { navData.navigation.toggleDrawer() }}></Item>
        </HeaderButtons>
    }

}


export default FavoriteScreen