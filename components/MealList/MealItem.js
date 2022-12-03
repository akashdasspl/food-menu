import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet, Image, Platform } from "react-native";
 
import MealDetail from "../MealDetail";

function MealItem({id, title, imageUrl, affordability, complexity, duration, }) {
   
   const navigation=useNavigation();

   function selectMealItemHandler(params) {
       navigation.navigate('MealDetailScreen', {
           mealId: id
       });
    
   }

    

   
   
   
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
                onPress={selectMealItemHandler}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />

                    <Text style={styles.title} >{title}</Text>
                </View>
                <MealDetail affordability={affordability} duration={duration} complexity={complexity} />
               




            </Pressable>
        </View>
    )

} export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 20,
        borderRadius: 10,

        backgroundColor: "#fff",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS == 'android' ? 'hidden' : 'visible'
    },
    image: {
        width: "100%",
        height: 200,

    },
    title: {
        fontSize: 20,
        alignSelf: "center",
        margin: 8,
        fontWeight: "bold"



    },
  
    buttonPressed: { opacity: 0.5 },
})