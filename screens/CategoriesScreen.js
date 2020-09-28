import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import CategoryGridTile from "../components/CategoryGridTile.js"

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

/* CategoriesScreen.navigationOptions = {
    headerTitle: "Meal Categories",
} */

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        width: 150
    }
})

export default CategoriesScreen