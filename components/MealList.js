import React from "react"
import { StyleSheet, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { useSelector } from "react-redux"
import MealItem from "./MealItem"

const MealList = (props) => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id)
        return (
            <MealItem
                title={itemData.item.title}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: "MealDetail", params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFavorite: isFavorite
                        }
                    })
                }}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl} />
        )
    }


    return (<View style={styles.screen}>
        <FlatList style={{ width: "90%" }} data={props.listData} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MealList