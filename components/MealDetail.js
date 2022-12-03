import { View,StyleSheet ,Text} from "react-native";

function MealDetail({ affordability, complexity, duration,TextStyle }) {
    return(
        <View style={styles.details}>
            <Text style={[styles.detailItem, TextStyle]}>{duration}min</Text>
            <Text style={[styles.detailItem, TextStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, TextStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
    
} export default MealDetail
const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 8
    },
    detailItem: {
        fontSize: 16,
        alignSelf: "center",
        paddingHorizontal: 8


    },
})
