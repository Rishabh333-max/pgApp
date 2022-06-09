import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, Button } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export const Dashboard = () => {
    const [isModalVisible3, setModalVisible3] = useState(false);
    const [activeItem3, setActive3] = useState(false)

    const openModal3 = (item) => {
        setActive3(item || false)
        setModalVisible3(true)
    }
    const closeModal3 = () => {
        setActive3(false)
        setModalVisible3(false)
    }

const onSubmit=()=>{
    setInput("")
}

    const [input, setInput] = useState({
        propertyName: "",
        managerName: "",
        phone: "",
        pincode: ""
    })
    const [submitData, setSubmitData] = useState([])
    return (<View>
        <TouchableOpacity style={{ marginTop:"120%",left:200}} onPress={openModal3}>
            <Text style={{ color: "white", backgroundColor: "#008B8B", width: "40%", borderRadius: 16, paddingLeft: 6, paddingRight: 6, paddingTop: 8, paddingBottom: 8, shadowColor: "black", elevation: 4, textAlign: "center" }}>
                Add New Property
            </Text>
        </TouchableOpacity>
        <Modal
            transparent={true}
            animationType='slide'
            visible={isModalVisible3}
            onRequestClose={() => {
                setModalVisible3(!isModalVisible3)
            }}
        >
            <View style={{ height: "60%", width: "100%", backgroundColor: "white", marginTop: "80%", shadowColor: "#000", elevation: 20, borderRadius: 30 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ padding: 20 }}>Add New Property</Text>
                    <TouchableOpacity onPress={() => setModalVisible3(!isModalVisible3)}>
                        <AntDesign name="down" size={30} color="black" style={{ top: 12, right: 30 }} />
                    </TouchableOpacity>
                </View>
                <View>

                    <View style={styles.mainContainer}>
                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Property Name"

                                value={input?.propertyName}


                                onChangeText={(text) => { setInput({ ...input, propertyName: text }) }}

                            />
                        </View>
                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Manager's Name"

                                value={input?.managerName}
                                onChangeText={(text) => { setInput({ ...input, managerName: text }) }}

                            />
                        </View>

                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Phone"
                                maxLength={10}
                                value={input?.phone}
                                onChangeText={(text) => { setInput({ ...input, phone: text }) }}

                            />
                        </View>
                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Property Pincode"
                                maxLength={6}
                                value={input?.pincode}
                                onChangeText={(text) => { setInput({ ...input, pincode: text }) }}

                            />
                        </View>
                        <Button title="ADD" onPress={onSubmit}/>

                        {/* <Text style={styles.labels}>Date</Text>
    {
        dateVisible &&
        <DateTimePicker
            value={date}
            mode={mode}
            onChange={onChange}

        />

    }
    <View style={[styles.inputStyle, { flexDirection: "row" }]}>
        <Text style={{ fontSize: 16, fontWeight: '330', color: 'black', paddingRight: 6 }}>Date of Birth:  </Text>
        <Text style={{ fontSize: 16, fontWeight: '400', color: 'black', paddingRight: 65 }}>{date.toLocaleDateString()}</Text>
        <AntIcon propertyName='calendar' onPress={showDatepicker} size={30} color='#272643' />
    </View>

    <View>
        <AntIcon propertyName='calendar' onPress={showDatepicker} size={30} color='#272643' />
    </View>

    <Text style={{ color: "black" }}>selected: {date.toLocaleDateString()}</Text>
    {show && (
        <DateTimePicker
            testID="dateTimePicker"
            value={input?.dates}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
        />
    )} */}



                    </View>

                </View>
            </View>
        </Modal>
    </View>)
}



const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        color: "black"
    },
    brandView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    brandViewText: {
        color: "#ffffff",
        fontSize: 40,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: "#ffffff",
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60
    },
    categoryListWrapper: {
        paddingTop: 20,
        marginLeft: 170,

    },
    categoryItemWrapper: {
        backgroundColor: "white",
        // marginRight:20,
        borderRadius: 20,
        alignSelf: "center",
        elevation: 40,
        width: 150,
        height: 200,
        shadowColor: "#000"

        // marginHorizontal:20
    },
    categoryItemImage: {
        width: 50,
        height: 50,
        marginLeft: 50,
        marginTop: 25
    },
    categoryItemTitle: {
        textAlign: "center",
        fontFamily: "Montserrat-semiBold",
        fontSize: 14,
        marginTop: 15,
        fontSize: 20,
        fontWeight: "bold",
        color: "#272643"

    },
    categorySelectWrapper: {
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 20,
        width: 40,
        height: 40,
        // fontSize:15,
        borderRadius: 50,
        marginBottom: 10,
        backgroundColor: "#000"
    },
    categorySelectIcon: {
        alignSelf: "center",
        color: "white",
    },

    modalView: {
        backgroundColor: "white",
        marginTop: 210
    },
    mainContainer: {
        height: '100%',
        paddingHorizontal: 30,
        paddingTop: 10,
        backgroundColor: "white"
    },
    mainHeader: {
        fontSize: 25,
        color: "#344055",
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: 'capitalize',
        fontFamily: "regular",
        justifyContent: "center",
        marginLeft: 80
    },
    inputContainer: {
        marginTop: 10
    },
    labels: {
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        fontFamily: 'regular'
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontFamily: 'regular',
        fontSize: 18,

        backgroundColor: "white"

    },
    description: {
        fontSize: 20,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 2,
        lineHeight: 25,
        fontFamily: "regular"
    }
})
