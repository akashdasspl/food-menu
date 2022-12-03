import { useContext } from "react";
import { View } from "react-native";
import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";
function FavoritesScreen(params) {

    //const favoriteMealsCtx = useContext(FavoritesContext)
   // const favoriteMeals = MEALS.filter(meal=>favoriteMealsCtx.ids.includes(meal.id))
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const mealIsFavorite = MEALS.filter(meal => favoriteMealIds.includes(meal.id))

    return(
        <View>
      { /* <MealsList items={favoriteMeals} />*/}
        <MealsList items={mealIsFavorite} />

        </View>
    )
}
export default FavoritesScreen;