import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
const SingleDayTimeTable = () => {

    const [apidatata, setApiData] = useState([])

    useEffect(() => {

        axios.get("http://10.61.36.211:5000/listoftimetable").then((data) => {
            setApiData(data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <View style={styles.tableContainer}>

            <View style={styles.tableRow}>
                <Text style={styles.headerCell}>Line Name</Text>
                <Text style={styles.headerCell}>BreakDown Reason</Text>
                <Text style={styles.headerCell}>Total Time</Text>
                <Text style={styles.headerCell}>Time In</Text>

            </View>
            {
                apidatata.map((res) => {
                    return (
                        <View style={styles.tableRow} key={res['id']}>
                            <Text style={styles.cell}>{res['LineName']}</Text>
                            <Text style={styles.cell}>{res['BreakDownTime']}</Text>
                            <Text style={styles.cell}>{res['BreakDown']} </Text>
                            <Text style={styles.cell}>{res['TimeIN']}</Text>
                        </View>
                    )
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    tableContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        marginTop: 40,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    headerCell: {
        flex: 1,
        padding: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cell: {
        flex: 1,
        padding: 10,
        textAlign: 'center',
    },
});

export default SingleDayTimeTable;
