import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CategoryGridTile from "../components/CategoryGridTile.js"
import CustomHeaderButton from "../components/HeaderButton.js"

import { CATEGORIES } from "../data/dummy-data.js"


const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return <CategoryGridTile title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => props.navigation.navigate({
                routeName: "CategoryMeals", params: {
                    categoryId: itemData.item.id
                }
            })} />

    }

    return (
        <FlatList keyExtractor={(item) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: "Meal Categories",
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => { navData.navigation.toggleDrawer() }}></Item>
        </HeaderButtons>
    }

}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        width: 150
    }
})

export default CategoriesScreen