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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Homes } from "../routes/BottomTabs/Homes";
import { Property } from "../routes/BottomTabs/Property";
import { Money } from "../routes/BottomTabs/Money";
import { Add } from "../routes/BottomTabs/Add";
import { People } from "../routes/BottomTabs/People";
import { AuthContext } from "../routes/Context";





const AuthStack = createStackNavigator()
const Tabs=createBottomTabNavigator();
// const Tabs = createBottomTabNavigator()


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


  const [userToken, setUserToken] = useState(null)

  const authContext = useMemo(() => {
    return {
      login: () => {
        setIsLoading(false)
        setUserToken("Rishabh")
      },
      signupp: () => {
        setIsLoading(false)
        setUserToken("Rishabh")
      },
      signout: () => {
        setIsLoading(false)
        setUserToken(null)
      }
    }
  }, [])

  const [input, setInput] = useState({
    email: "",
    password: ""
})
  return (
   
    <AuthContext.Provider value={authContext}>
      <>
        {
          userToken ? (
            <Tabs.Navigator
              tabBarOptions={{

                // tabBarStyle:{
                //   position:"absolute",
                //   marginBottom:25,
                //   left:20,right:20,elevation:0,backgroundColor:"#000",borderRadius:15,
                //   height:90,
                // },
                // useBottomTabBarHeight:40
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                )
              }}
            >
              <Tabs.Screen name="Home" component={HomeStackNavigator} options={{ headerShown: false }} />
              <Tabs.Screen name="Money" component={MoneyStackNavigator} options={{ headerShown: false }} />
              <Tabs.Screen name="Add" component={AddStackNavigator} options={{ headerShown: false }} />
              <Tabs.Screen name="People" component={PeopleStackNavigator} options={{ headerShown: false }} />
              <Tabs.Screen name="Property" component={PropertyStackNavigator} options={{ headerShown: false }} />
            </Tabs.Navigator>
          ) :

            (
              <AuthStack.Navigator >
                <AuthStack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <AuthStack.Screen name="Signupp" component={Signupp} options={{ headerShown: false }} />
                <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />

              </AuthStack.Navigator>

            )
        }
      </>
    </AuthContext.Provider>
  )
           
    }            






export const MoneyStackNavigator = () => {
  return (
    <MoneyStack.Navigator >
      <MoneyStack.Screen name="Money" component={Money} options={{ headerShown: false }} />

    </MoneyStack.Navigator>
  );
}
export const AddStackNavigator = () => {
  return (
    <AddStack.Navigator >
      <AddStack.Screen name="Add" component={Add} options={{ headerShown: false }} />
    </AddStack.Navigator>
  );
}

export const PeopleStackNavigator = () => {
  return (
    <PeopleStack.Navigator >
      <PeopleStack.Screen name="People" component={People} options={{ headerShown: false }} />

    </PeopleStack.Navigator>
  );
}
export const PropertyStackNavigator = () => {
  return (
    <PropertyStack.Navigator >
      <PropertyStack.Screen name="Property" component={Property} options={{ headerShown: false }} />

    </PropertyStack.Navigator>
  );
}
export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Home" component={Homes} options={{ headerShown: false }} />

    </HomeStack.Navigator>
  );
}


