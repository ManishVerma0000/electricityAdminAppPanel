import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Tablecompponent = ({ navigation }) => {

    const changeTable = () => {
        navigation.navigate("SingleDayDetails")
    }


    return (

        <View style={styles.container}>
            <TouchableOpacity   >
                <View style={styles.row}>
                    <Text style={styles.cell}>Day</Text>
                    <Text style={styles.cell}>Line name</Text>
                    <Text style={styles.cell}>Time</Text>
                </View>
            </TouchableOpacity>



            {/* 
            } */}

            <TouchableOpacity onPress={() => {
                changeTable()
            }}>
                <View style={styles.row}>
                    <Text style={styles.cell}>Sunday</Text>
                    <Text style={styles.cell}>Pali</Text>
                    <Text style={styles.cell}>24 Hours</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={changeTable}>
                <View style={styles.row}>
                    <Text style={styles.cell}>Sunday</Text>
                    <Text style={styles.cell}>Pali</Text>
                    <Text style={styles.cell}>24 Hours</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={changeTable}>
                <View style={styles.row}>
                    <Text style={styles.cell}>Sunday</Text>
                    <Text style={styles.cell}>Pali</Text>
                    <Text style={styles.cell}>24 Hours</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={changeTable}>
                <View style={styles.row}>
                    <Text style={styles.cell}>Sunday</Text>
                    <Text style={styles.cell}>Pali</Text>
                    <Text style={styles.cell}>24 Hours</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={changeTable}>
                <View style={styles.row}>
                    <Text style={styles.cell}>Sunday</Text>
                    <Text style={styles.cell}>Pali</Text>
                    <Text style={styles.cell}>24 Hours</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={changeTable}>
                <View style={styles.row}>
                    <Text style={styles.cell}>Sunday</Text>
                    <Text style={styles.cell}>Pali</Text>
                    <Text style={styles.cell}>24 Hours</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={changeTable}>
                <View style={styles.row}>
                    <Text style={styles.cell}>Sunday</Text>
                    <Text style={styles.cell}>Pali</Text>
                    <Text style={styles.cell}>24 Hours</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: 500,
        width: 400,
        backgroundColor: '#ccc'
    },
    cell: {
        flex: 1,
        padding: 10,
        textAlign: 'center',
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        margin: 10,
        padding: 10
    },
    cell: {
        fontSize: 16,
    },
});

export default Tablecompponent;
