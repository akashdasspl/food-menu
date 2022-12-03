import { View,StyleSheet, Pressable,Text ,Platform} from "react-native";

function CategoryGridTile({title,color,onPress}) {
    return(
        <View style={[styles.gridItem,]}>
<Pressable style={({pressed})=>[styles.Button,pressed?styles.buttonPressed:null]} android_ripple={{color:"#999"}}
onPress={onPress}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
        <Text style={styles.title}>
            {title}
        </Text>
    </View>
</Pressable>
        </View>
    )
    
}export default CategoryGridTile;
const styles=StyleSheet.create({
gridItem:{
    flex:1,
    width:100,
    height:150,
    margin:16,
        borderRadius: 20,
    elevation:10,
    overflow:Platform.OS=="android"?"hidden":"visible",
    

    shadowColor:"black",// for ios
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
    backgroundColor:"#fff"
   




},
    Button: { flex: 1, },
    buttonPressed:{opacity:0.5},

innerContainer:{
    
    borderRadius: 20,
    alignItems:"center",
    flex:1,
    justifyContent: "center",
    overflow:"hidden"


},
title:{
    fontSize:18,
    fontWeight:"bold",
    color:"#000"
}
})