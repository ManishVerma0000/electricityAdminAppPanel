import React from 'react';
import { View, FlatList, Text, StyleSheet, TextInput, TouchableOpacity, TextComponent } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tablecompponent from './tablecomponent';
import NotificationsComponent from '../component/Notification';

import { useState } from 'react';

const Table = (
    { navigation }
) => {

    const [showList, setShowList] = useState(false);



    const date = new Date().toDateString()

    return (

        <>

            <View >
                <View style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 18, color: '#FF8C00' }} >Time Table</Text>
                </View>

                <View style={{ display: "flex", justifyContent: "space-around", alignContent: "center", alignItems: "center", flexDirection: "row" }}>

                    <TouchableOpacity onPress={(e) => {
                        setShowList(false)
                    }}>
                        <Icon name="access-time" size={40} color='#FF8C00' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(e) => {
                        setShowList(true)
                    }}   >
                        <Icon name="notifications" size={40} color='#FF8C00' />
                    </TouchableOpacity>

                </View>
                <View style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 10, borderRadius: 4, borderColor: '#FF8C00' }}>

                    <TextInput style={styles.input} placeholder="Enter your text here"

                        defaultValue={date}
                    />


                </View>

                {
                    showList == false ? (<View>

                        <Tablecompponent navigation={navigation} />
                    </View >) : (
                        <View>
                            <NotificationsComponent />
                        </View>
                    )
                }

            </View >
        </>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 8,
    },
    headerCell: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    input: {
        height: 40,
        borderColor: '#FF8C00',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        width: 300,
        color: 'black'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    cell: {
        fontSize: 16,
    },
});

export default Table;
