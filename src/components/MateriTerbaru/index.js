import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground ,Alert} from 'react-native'


const MateriTerbaru=()=> {
    const alert=()=>{
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed')
              },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
          );
    }
    return (
        <View>
            <TouchableOpacity style={styles.listMateri} onPress={alert}>
                <Text style={styles.title}>Judul</Text>
            </TouchableOpacity>

        </View>
    )
}
export default MateriTerbaru;
const styles = StyleSheet.create({
    listMateri:{
        width:185,
        height:110,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius:10,
        marginRight:10
    },
    title:{
        color:'#FFFFFF',
        fontSize:12,
        marginTop:9,
        marginLeft:9
    }
})
