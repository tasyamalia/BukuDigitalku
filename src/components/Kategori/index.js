import React, {useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { IMLine } from '../../assets';

const Kategori=({mapel, onPress, type})=> {
    return (
          <View>
            <TouchableOpacity style={styles.semua(mapel)} onPress={onPress} type={type}/>
            <Text style={styles.judulKat}>{mapel}</Text>
          </View>
    )
}
export default Kategori; 
const styles = StyleSheet.create({
      semua: (mapel)=>(
        {
            backgroundColor: mapel=='Semua'?'#c4c4c4':mapel=='Matematika'?'#f23c46':mapel=='Fisika'?'#4b53a5':mapel=='Kimia'?'#fec214':mapel=='Biologi'?'#34bdb4':'#34bdb4',
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
          }
      ),
      judulKat: {
        fontSize: 12,
      },
})
