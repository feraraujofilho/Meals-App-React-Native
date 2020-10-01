import React, { useCallback, useEffect } from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { useDispatch, useSelector } from "react-redux"
import DefaultText from "../components/DefaultText"
import CustomHeaderButton from "../components/HeaderButton"
import { toggleFavorite } from "../store/actions/mealsActions"

const ListItem = props => {
    return (<View style={styles.listItem}><DefaultText>{props.children}</DefaultText></View>)
}

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam("mealId")
    const availableMeals = useSelector(state => state.meals.meals)
    const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))

    const selectedMeal = availableMeals.find(meal => meal.id === mealId)

    const dispatch = useDispatch()

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
    }, [toggleFavoriteHandler])

    useEffect(() => {
        props.navigation.setParams({ isFavorite: currentMealIsFavorite })
    }, [currentMealIsFavorite])


    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => {
                return (<ListItem key={ingredient}>{ingredient}</ListItem>)
            })}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => {
                return (<ListItem key={step}>{step}</ListItem>)
            })}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const toggleFav = navigationData.navigation.getParam("toggleFav")
    const mealTitle = navigationData.navigation.getParam("mealTitle")
    const isFavorite = navigationData.navigation.getParam("isFavorite")

    return {
        headerTitle: mealTitle,
        headerRight: () => (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" iconName={isFavorite ? "ios-star" : "ios-star-outline"} onPress={toggleFav} />
        </HeaderButtons>)
    }
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around"
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        textAlign: "center"
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10

    }
})

export default MealDetailScreen