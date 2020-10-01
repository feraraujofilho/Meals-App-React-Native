import React from "react"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { useSelector } from "react-redux"
import CustomHeaderButton from "../components/HeaderButton"
import MealList from "../components/MealList"

const FavoriteScreen = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    return (
        <MealList listData={favoriteMeals} navigation={props.navigation} />
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