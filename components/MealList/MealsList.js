import { View ,FlatList,StyleSheet,Text} from "react-native"
import MealItem from "./MealItem";

function MealsList({items}) {
    

    function renderMealItem(itemData) {



        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            duration: item.duration,
            complexity: item.complexity,
            id: item.id



        }




        return (

            <MealItem  {...mealItemProps} />
        )

    }


    return (
        <View>
            <Text>

            </Text>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />

        </View>
    )
}export default MealsList