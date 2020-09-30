import React from "react"
import { StyleSheet, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import MealItem from "./MealItem"

const MealList = (props) => {

    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: "MealDetail", params: {
                            mealId: itemData.item.id
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