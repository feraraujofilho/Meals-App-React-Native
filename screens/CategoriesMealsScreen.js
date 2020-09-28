import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { CATEGORIES } from "../data/dummy-data"

const CategorieMealScreen = props => {
    const catId = props.navigation.getParam("categoryId")

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return (
        <View style={styles.screen}>
            <Text>The Categorie Meal Screen</Text>
            <Button title="Go To Details" onPress={() => {
                props.navigation.navigate({ routeName: "MealDetail" })
            }} />
            <Text>{selectedCategory.title}</Text>
            <Button title="Go Back" onPress={() => props.navigation.pop()} />
        </View>
    )
}

CategorieMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId")
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CategorieMealScreen