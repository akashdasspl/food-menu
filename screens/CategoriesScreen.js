import { FlatList, View,Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";


function CategoriesScreen({navigation}) {
function CategoricalDataList(ItemData) {
    function pressHandler() {
        
        navigation.navigate("MealOverviewScreen",{
            categoryId:ItemData.item.id,

        })
    }
return(
     <CategoryGridTile title={ItemData.item.title} color={ItemData.item.color} onPress={pressHandler}/>
    
)}


    return(
        <View>
            <FlatList data={CATEGORIES}
                keyExtractor={(item)=>item.id}
                renderItem={CategoricalDataList}
                numColumns={2}
            />
        

        </View>
    )
    
}export default CategoriesScreen;