import { View ,Text,StyleSheet} from "react-native";

function List({data}) {
    return (
        
             data.map(dataPoint => (
                 <View  style={styles.listItem} key={dataPoint}>
                    <Text style={styles.itemText} >{dataPoint}</Text>

               </View> 
            ))
        
    )

} export default List;
const styles= StyleSheet.create({
    listItem:{
        paddingHorizontal:8,
        borderRadius:6,
        paddingVertical:4,
        marginVertical:8,
        marginHorizontal:24,
        backgroundColor:"#e2b497"

    },
    itemText:{
        color:"#351401",
        textAlign:"center",
        fontSize:16
    }


})