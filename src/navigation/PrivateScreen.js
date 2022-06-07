import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useMemo, useState } from "react";
import { View, Text } from "react-native";
// import { Login, Signup, Signupp, Splash } from "./Signup";
import 'react-native-gesture-handler';
// import { Home } from "../Home";
import { Searchbar } from "../SearchComponent/Searchbar";
// import { Homes } from "../BottomTabs/Homes";
// import { Money } from "../BottomTabs/Money";
// import { Add } from "../BottomTabs/Add";
// import { People } from "../BottomTabs/People";
// import { AddUnits, Food, Property, Rooms, Units } from "../BottomTabs/Property";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { LogOut } from "../Logout/Logout";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Dashboard } from "../Property/Dashboard";
import { Login, Signup, Signupp } from "../routes/Login&Signup/AuthScreen";

// import { AuthContext } from "../routes/Context";



const AuthStack = createStackNavigator()
// const Tab = createBottomTabNavigator()


const HomeStack = createStackNavigator()
const MoneyStack = createStackNavigator()
const AddStack = createStackNavigator()
const PeopleStack = createStackNavigator()
const PropertyStack = createStackNavigator()



export const MainStackNavigator = () => {

  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "white",
    },
    headerTintColor: "black",
    headerBackTitle: "Back",
  };



  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])


//   const [userToken, setUserToken] = useState(null)

//   const authContext = useMemo(() => {
//     return {
//       login: () => {
//         setIsLoading(false)
//         setUserToken("Rishabh")
//       },
//       signupp: () => {
//         setIsLoading(false)
//         setUserToken("Rishabh")
//       },
//       signout: () => {
//         setIsLoading(false)
//         setUserToken(null)
//       }
//     }
//   }, [])
  return (
   

            
              <AuthStack.Navigator >
                <AuthStack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <AuthStack.Screen name="Signupp" component={Signupp} options={{ headerShown: false }} />
                <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        
              </AuthStack.Navigator>

            


  )
}



// export const MoneyStackNavigator = () => {
//   return (
//     <MoneyStack.Navigator >
//       <MoneyStack.Screen name="Money" component={Money} options={{ headerShown: false }} />

//     </MoneyStack.Navigator>
//   );
// }
// export const AddStackNavigator = () => {
//   return (
//     <AddStack.Navigator >
//       <AddStack.Screen name="Add" component={Add} options={{ headerShown: false }} />
//     </AddStack.Navigator>
//   );
// }

// export const PeopleStackNavigator = () => {
//   return (
//     <PeopleStack.Navigator >
//       <PeopleStack.Screen name="People" component={People} options={{ headerShown: false }} />

//     </PeopleStack.Navigator>
//   );
// }
// export const PropertyStackNavigator = () => {
//   return (
//     <PropertyStack.Navigator >
//       <PropertyStack.Screen name="Property" component={Property} options={{ headerShown: false }} />

//     </PropertyStack.Navigator>
//   );
// }
// export const HomeStackNavigator = () => {
//   return (
//     <HomeStack.Navigator >
//       <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />

//     </HomeStack.Navigator>
//   );
// }


