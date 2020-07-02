import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { IMMenu, IMSearch } from '../../assets';

const Header=()=>{
    return (
        <View style={styles.page}>
            <View style={styles.container}>
            <Image style={styles.img} source={IMMenu}/>
            <Text style={styles.text}>Buku Digitalku 4.0</Text>
            <Image style={styles.img} source={IMSearch}/>
            </View>
        </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    page:{
        backgroundColor:'#373564',
        height:70,
    },
    container:{
        flexDirection:'row',
        marginHorizontal:15,
        marginVertical:15
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FFFFFF',
        flex:1,
        textAlign:'center'

    },
    img:{
        height:35,
        width:35
    }
})
