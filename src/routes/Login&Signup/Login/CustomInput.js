import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View, TextInput, Text, StyleSheet,Pressable } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../../Context";


export const CustomInput = () => {

    const [hidePass, setHidePass] = useState(true);
    const [input, setInput] = useState({
        email: "",
        password: ""
    })



  
    
    const navigation=useNavigation()
    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    placeholder="Email"
                    value={input?.email}
                    onChangeText={(text) => { setInput({ ...input, email: text }) }}
                    style={styles.input}

                />
                <View style={{ textAlign: "center", marginTop: 10 }}>
                    <MaterialCommunityIcons name="email" size={30} style={{ alignItems: "center", }} />
                </View>


            </View>
            <View style={styles.container}>
                <TextInput
                    placeholder="Password"
                    value={input?.password}
                    onChangeText={(text) => { setInput({ ...input, password: text }) }}
                    style={styles.input}
                    secureTextEntry={hidePass ? true : false}
                />
                <View style={{ textAlign: "center", marginTop: 10 }}>
                    <MaterialCommunityIcons
                        name={hidePass ? 'eye-off-outline' : 'eye-outline'}
                        size={30}
                        color="black"
                        onPress={() => setHidePass(!hidePass)}
                    />

                </View>

     
            </View>
                  
        <Pressable style={styles.container1} >
            <Text style={styles.text}>Login</Text>
        </Pressable>
        
        </View>




    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",

        borderColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20, marginVertical: 10
    },
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