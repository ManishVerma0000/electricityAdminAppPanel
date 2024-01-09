import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

import axios from 'axios';

const NotificationsComponent = () => {
    const [apidatata, setApiData] = useState([])

    useEffect(() => {

        axios.get("http://10.61.36.211:5000/listofnotification").then((data) => {
            console.log(data.data)
            setApiData(data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <View style={styles.card}>
                {

                    apidatata.map((res) => {
                        console.log(res['message'], 'this is the valye ofthe')
                        return (
                            <View style={styles.cardContent} key={res['id']}>
                                <Text style={styles.cardTitle}>{res['name']}</Text>
                                <Text style={styles.cardDescription}>{res['time']} </Text>
                                <Text style={styles.cardDescription}>{res['message']}</Text>
                            </View>
                        )
                    })
                }
                {/* /time */}

            </View>




        </>
    )
}
const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        backgroundColor: '#ccc',
        borderRadius: 8,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },

    cardContent: {
        padding: 15,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        marginTop: 10,
        fontSize: 14,
        color: '#555',
    },
});

export default NotificationsComponent