import React from "react"
import { StyleSheet, View } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { useSelector } from "react-redux"
import DefaultText from "../components/DefaultText"
import CustomHeaderButton from "../components/HeaderButton"
import MealList from "../components/MealList"

const FavoriteScreen = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    if (favoriteMeals.length === 0 || !favoriteMeals) {
        return (<View style={styles.content}>
            <DefaultText>No favorite meals found. Start adding some.</DefaultText>
        </View>)
    }

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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})


export default FavoriteScreen