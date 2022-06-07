

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import React, { useState,useHistory, useContext } from "react"
import { View, Text, Image, Button,ScrollView, Touchable, TouchableOpacity, useWindowDimensions,StyleSheet,Pressable } from "react-native";
import { ScreenContainer } from "react-native-screens";
import { CustomInput } from "./Login/CustomInput";
import { AuthContext } from "../Context";
import { Input } from "./Signup/Input";


const navigation = useNavigation()
const Tab = createMaterialTopTabNavigator()

export const Signup = () => {
  const navigation = useNavigation()

//  const {signupp}=useContext(AuthContext)
  return (
    <View style={{ flex: 1,}}>
      <View style={{ alignItems: "center", }}>
        <Image source={require("../../Images/school-removebg-preview.png")} />

      </View>

      <MyTabs />
    

    </View>

  )
}


export const Login = () => {

const {login}=useState(AuthContext);

  const { height } = useWindowDimensions();


  

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{ marginTop: 20, }}>

        <CustomInput />
 
        <Text style={{ textAlign: "center" }}>Make a new account?  <Text style={{ color: "#008B8B" }} onPress={() => navigation.navigate("Signupp")}>Sign up</Text></Text>

      </View>
    </View>
  )
}

export const Signupp = () => {
  // const {signupp}=useContext(AuthContext)
    // const onSignUpPressed = () => {
    //   console.warn("Sign in")
    // }
  
    // const onForgotPasswordPressed = () => {
    //   console.warn("onForgotPasswordPressed")
    // }
    return (
      <ScrollView>
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <View style={{ marginTop: 20, }}>
      <Input/>
    
      
      {/* <Pressable style={styles.container1} onPress={signupp}> */}
      <Pressable style={styles.container1} >
            <Text style={styles.text}>Sign up</Text>
        </Pressable>
          <Text style={{ textAlign: "center" }}>Have an account?  <Text style={{ color: "#008B8B" }} onPress={() => navigation.navigate("Login") }>Login</Text></Text>
  
        </View>
      </View>
      </ScrollView>
  )

}

// export const Splash=()=>{
//   <ScreenContainer>
//     <Text>Loading...</Text>
//   </ScreenContainer>
// }

function MyTabs() {
  return (
    <Tab.Navigator

      screenOptions={{
        // marginTop:2,

        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: { fontSize: 16 },
        tabBarStyle: { backgroundColor: '#008B8B' },
      }}
    >
      <Tab.Screen
        name="Signupp"
        component={Signupp}
        options={{ tabBarLabel: 'Sign Up' }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ tabBarLabel: 'Login' }}
      />

    </Tab.Navigator>

  )
}

const styles=StyleSheet.create({
  container1:{
    backgroundColor:"#008B8B",
    padding:15,
    marginVertical:20,
    marginHorizontal:150,
    borderRadius:5
        },
        text:{
    
    textAlign:"center",
    fontWeight:"bold",
    color:"white"
        }
})