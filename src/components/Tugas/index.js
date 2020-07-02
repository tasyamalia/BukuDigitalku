import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tugas=()=> {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.judul}>
                <Text style={styles.namaTugas}>Tugas Seni Budaya</Text>
                <Text>X</Text>
                </View>
                <Text style={styles.rule}>Dikumpulkan di folder google drive , link di grup wa</Text>
                <View style={styles.garis}></View>
                <Text style={styles.rule2}>Batas pengumpulan tugas - 12.00 WIB</Text>
                <Text style={styles.rule2}>Nama Guru,S.Pd</Text>
            </View>
        </View>
    )
}
export default Tugas;
const styles = StyleSheet.create({
    page:{
        marginHorizontal:20,
        marginVertical:6
    },
    container:{
        height:120,
        borderWidth:1,
        borderColor:'#dedede',
        borderRadius:10,
        paddingVertical:15
    },
    namaTugas:{
        fontSize:15,
        fontWeight:'bold',
        color:'#615d5d',
        flex:1
    },
    judul:{
        flexDirection:'row',
        marginHorizontal:20
    },
    rule:{
        marginHorizontal:20,
        fontSize:14,
        marginTop:5
    },
    garis:{
        height:1,
        backgroundColor:'#dedede',
        marginHorizontal:20,
        marginVertical:10
    },
    rule2:{
        fontSize:12,
        marginHorizontal:20
    }
})
