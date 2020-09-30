import React from "react"
import { ImageBackground, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import DefaultText from "./DefaultText"

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                            </View>

                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: "row"
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },
    mealItem: {
        height: 200,
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10
    },
    mealHeader: {
        height: "85%"
    },
    mealDetail: {
        height: "15%",
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center"
    },
    titleContainer: {
        backgroundColor: "rgba(0,0,0,0.6)",
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 20,
        color: "white",
        textAlign: "center"
    }
})

export default MealItem