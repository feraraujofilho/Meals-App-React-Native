import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/HeaderButton"

const FiltersScreen = props => {
    return (
        <View>
            <Text>The Filters Screen</Text>
        </View>
    )
}

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: "Filters",
        headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => { navData.navigation.toggleDrawer() }}></Item>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({})

export default FiltersScreen