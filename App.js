 import {View,Text,Image,ImageBackground,StyleSheet,StatusBar} from "react-native"
 import React from "react"
import LinearGradient from "react-native-linear-gradient"
import CategoriesScreen from "./screens/CategoriesScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealOverviewScreen from "./screens/MealsOverviewScreen"
import Icon from 'react-native-vector-icons/FontAwesome';

import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer"
 
import MealDetailScreen from "./screens/MealDetailScreen"
import FavoritesScreen from "./screens/FavoritesScreen"
import FavoritesContextProvider from "./store/context/favorites-context"
import { Provider } from "react-redux"
import { store } from "./store/redux/store"
 

const Stack = createNativeStackNavigator();
const Drawer= createDrawerNavigator();

function DrawerNavigator() {

  return(
  <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: "white",
    sceneContainerStyle: { backgroundColor: "#3f2f25" },
      drawerContentStyle: { backgroundColor:"#351401"},
      drawerInactiveTintColor:"white",
      drawerActiveTintColor:"#351401",
      drawerActiveBackgroundColor:"#e4baa1"

    

  }

  }>
    <Drawer.Screen  name="categories" component={CategoriesScreen} options={{
      title:"all categories",
        drawerIcon:({color,size})=><Icon name="list" color={color} size={size}/>
    }}
     />
    <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} options={{
        drawerIcon: ({ color, size }) => <Icon name="star" color={color} size={size} />

    }}  />

  </Drawer.Navigator>)
  
}

function app() {
  return(
    
      <>
        <StatusBar barStyle={"light-content"} />
      

    <LinearGradient colors={['#923', '#192']}  style={styles.linearGradient}>

     
    <ImageBackground style={styles.container} source={require("./assets/photo_2022-11-26_16-44-12.jpg")} resizeMode="stretch">

 



{/*<FavoritesContextProvider>*/}
<Provider store={store}>





          <NavigationContainer initialRouteName="Drawer">
            <Stack.Navigator screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" }

            }

            }>
              <Stack.Screen name="Drawer" component={DrawerNavigator} options={ {
              headerShown:false
              }} />
              <Stack.Screen name="MealOverviewScreen" component={MealOverviewScreen} 
              
             // options={({route,navigation})=>{
               // const catId=route.params.categoryId;
                //return{
                  //title:catId
              //  }
             // }
              
             // }
              
               />
              <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          {/*</FavoritesContextProvider>*/}
          </Provider>
          

    </ImageBackground>
    </LinearGradient>
    </>
  

    
  )
  
}export default app
const styles=StyleSheet.create({
  container:{
    flex:1,
    opacity:1
    
  },
  linearGradient:{
    flex: 1,
     
  

  }
})