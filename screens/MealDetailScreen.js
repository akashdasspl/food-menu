import { View ,Text,Image,StyleSheet, ScrollView, Button} from "react-native"
import MealDetail from "../components/MealDetail"
import { MEALS } from "../data/dummy-data"
import React, { useContext, useState } from "react"
import Subtitle from "../components/MealDetail/Subtitle"
import List from "../components/MealDetail/List"
import { useLayoutEffect } from "react"
import IconButton from "../components/IconButton"
import { FavoritesContext } from "../store/context/favorites-context"
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, removeFavorite } from "../store/redux/favorites"
 

function MealDetailScreen({route,navigation}) {
 //const favoriteMealsCtx = useContext(FavoritesContext)
     const favoriteMealIds=   useSelector((state)=>state.favoriteMeals.ids);
const dispatch=useDispatch();

    const mealId = route.params.mealId

    const selectedMeal=MEALS.find((meal)=>meal.id==mealId)

 //const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);
    function headerButtonPressHandler(params) {
       // console.log(mealIsFavorite)
        if (mealIsFavorite){
           // favoriteMealsCtx.removeFavorite(mealId)
            dispatch(removeFavorite({id:mealId}))
        }else{
           // favoriteMealsCtx.addFavorite(mealId)
            dispatch(addFavorite({id:mealId}))
        }
        
    }



useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight:()=>{
            return <IconButton icon={'star'} onPress={headerButtonPressHandler} color={mealIsFavorite?"red":"white"}/>        }
    })

}, [navigation,headerButtonPressHandler]);

    return(
        <View>
        <ScrollView>

       
            
            <Image style={styles.Img} source={{uri:selectedMeal.imageUrl}} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetail complexity={selectedMeal.complexity} duration={selectedMeal.duration} affordability={selectedMeal.affordability}
            TextStyle={styles.detailText} />
                <Subtitle>Ingredients</Subtitle>
           
                  <List data={selectedMeal.ingredients}></List>
                <Subtitle>steps</Subtitle>
                     <List data={selectedMeal.steps}/>

           
             
            </ScrollView>
        </View>
    )
    
}export default MealDetailScreen;
const styles= StyleSheet.create({
    Img:{
        height:350,
        width:"100%",

    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        margin:8,
        textAlign:"center",
        color:"white"

    },
    detailText:{
        color:"white",
        fontSize:14
    },
   

})
