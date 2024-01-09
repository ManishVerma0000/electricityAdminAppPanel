import React from "react";

import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';




export default function WelcomeScreen({ navigation }) {

    const onPressButton = () => {
        navigation.navigate('Table')


    }
    return (
        <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <View style={styles.ImageBackground}>
                <Image source={require('../assets/Welcome.jpg')} style={{ height: 560, width: 380, borderRadius: 30, marginTop: 20 }} />
            </View>
            <View>
                <TouchableOpacity onPress={onPressButton}>
                    <View
                        style={{
                            backgroundColor: '#FF8C00',
                            padding: 10,
                            borderRadius: 5,

                        }}
                    >
                        <Text style={{ color: 'white' }}>Press Me</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column"
    },

    ImageBackground: {
        height: "100px",
        width: "100px"
    }
});
