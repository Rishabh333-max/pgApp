import React,{useState} from "react";
import { View,Text,TextInput,StyleSheet,ScrollView,Pressable } from "react-native";
import  Ionicons  from "react-native-vector-icons/Ionicons";
import  MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import  FontAwesome  from "react-native-vector-icons/FontAwesome";
import  Entypo  from "react-native-vector-icons/Entypo";


export const Input=()=>{
    const [hidePass,setHidePass]=useState(true)
    const [input, setInput] = useState({
        propertyName: "",
        propertyEmail: "",
        propertyContact: "",
        pincode: "",
        password: ""
      })

    return(
        <ScrollView>
        <View>
        <View style={styles.container}>
           <TextInput
            placeholder="Property Name"
      
            style={styles.input}
            value={input?.propertyName}

           
            onChangeText={(text) => { setInput({ ...input, propertyName: text }) }}
    
            />
            <View style={{textAlign:"center",marginTop:10}}>
       <Ionicons name="home" size={30} style={{alignItems:"center",}}/>
       </View>
       
           
        </View>
        <View style={styles.container}>
           <TextInput
            placeholder="Property Email"
      
            style={styles.input}
            value={input?.propertyEmail}

           
            onChangeText={(text) => { setInput({ ...input, propertyEmail: text }) }}
    
            />
            <View style={{textAlign:"center",marginTop:10}}>
       <MaterialCommunityIcons name="email" size={30} style={{alignItems:"center",}}/>
       </View>
       
           
        </View>
        <View style={styles.container}>
           <TextInput
            placeholder="Property Contact"
      
            style={styles.input}
            value={input?.propertyContact}

           
            onChangeText={(text) => { setInput({ ...input, propertyContact: text }) }}
    
            />
            <View style={{textAlign:"center",marginTop:10}}>
       <FontAwesome name="phone" size={30} style={{alignItems:"center",}}/>
       </View>
       
           
        </View>
        <View style={styles.container}>
           <TextInput
            placeholder="Pincode"
      
            style={styles.input}
            value={input?.pincode}

           
            onChangeText={(text) => { setInput({ ...input, pincode: text }) }}
    
            />
            <View style={{textAlign:"center",marginTop:10}}>
       <Entypo name="location-pin" size={30} style={{alignItems:"center",}}/>
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
            <View style={{textAlign:"center",marginTop:10}}>
            <MaterialCommunityIcons
                                        name={hidePass ? 'eye-off-outline' : 'eye-outline'}
                                        size={30}
                                        color="black"
                                        onPress={() => setHidePass(!hidePass)}
                                    />
    
       </View>
       
           
        </View>
        </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
      
        borderColor:"#e8e8e8",
    borderWidth:1,
    borderRadius:5,
flexDirection:"row",
justifyContent:"space-between",
    marginHorizontal:20,marginVertical:10
    },
    input:{}
})