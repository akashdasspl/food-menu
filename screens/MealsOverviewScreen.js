import { View,StyleSheet, FlatList,Text } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
 
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealList/MealsList";

function MealOverviewScreen({ route , navigation }) {
    const catId = route.params.categoryId

const displayMeals= MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId)>=0;
})

useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find(
        (category)=> category.id == catId
    ).title;
    navigation.setOptions({
        title:categoryTitle
    })

})




 return(
     <MealsList items={displayMeals} />
 )
    
}export default MealOverviewScreen;

const style= StyleSheet.create({

})