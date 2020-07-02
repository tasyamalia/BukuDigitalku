import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {IMPeople, IMBuku} from '../../assets';

const Profile = () => {
  return (
    <View >
      <ImageBackground source={IMBuku} style={styles.image}>
        <Text style={styles.text1}>Hai !</Text>
        <Text style={styles.text2}>Tasya</Text>
        <Image style={styles.avatar} source={IMPeople} />
        <View style={styles.container}>
        <View style={styles.kelas}>   
        </View>
        <Text style={styles.textKelas}>XI</Text>
        </View>
        
      </ImageBackground>
      </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginLeft: 20,
  },
  image: {
    height: 200,
  },
  text1:{
    fontSize:18,
    color:'#FFFFFF',
    marginTop: 25,
    marginLeft: 20
  },
  text2:{
    fontSize:18,
    fontWeight:'bold',
    color:'#FFFFFF',
    marginLeft: 20,
    marginBottom:10
  },
  container:{
      position:'absolute',
      justifyContent:'center',
      marginTop:180
  },
  kelas:{
      width: 90,
      height:90,
      borderRadius:90/2,
      backgroundColor:'#373564',
      position:'absolute', 
      left:120,
      alignContent:'center'
  },
  textKelas:{
      position:'absolute',
      left:150,
      fontSize:40,
      fontWeight:'bold',
      color:'#FFFFFF',
  },  


});
