import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BelajarTerakhir=()=>{
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.circle}>
                </View>
                <View>
                <Text style={styles.mapel}>Matematika</Text>
                <Text style={styles.bab}>Bab 1 - Algoritma Dasar</Text>
                <Text style={styles.lastSeen}>Terakhir dibuka pada Senin, 8 Juni 2020</Text>
                </View>
            </View>
        </View>
    )
}
export default BelajarTerakhir; 
const styles = StyleSheet.create({
    page:{
        marginHorizontal:20,
        marginVertical:6
    },
    container:{
        height:80,
        borderWidth:1,
        borderColor:'#dedede',
        borderRadius:10,
        paddingVertical:15,
        flexDirection:'row'
    },
    mapel:{
        fontSize:14,
        fontWeight:'700',
        color:'#000000'
    },
    bab:{
        fontSize:16,
        fontWeight:'bold',
        color:'#000000'
    },
    lastSeen:{
        fontSize:12,
        color:'#adadad'
    },
    circle:{
        backgroundColor: '#f23c46',
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginHorizontal:8
    }
})
