import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { IMMath, IMBio, IMPhys, IMChem, IMLain } from '../../assets'

const Subject=({subject})=> {
    const Icon =()=>{
        if(subject === "Matematika"){
            return <Image source={IMMath}  style={styles.iconSub}/>;
        }
        if(subject === "Biologi"){
            return <Image source={IMBio}  style={styles.iconSub}/>;
        }
        if(subject === "Fisika"){
            return <Image source={IMPhys}  style={styles.iconSub}/>;
        }
        if(subject === "Kimia"){
            return <Image source={IMChem}  style={styles.iconSub}/>;
        }
        if(subject === "Lainnya"){
            return <Image source={IMLain}  style={styles.iconSub}/>;
        }
        return <Image source={IMLain}/>;
    }
    return (
        <View>
            <View style={styles.bgSubject(subject)}>
                <Text style={styles.subject}>{subject}</Text>
                <Icon/>
            </View>
        </View>
    )
}
export default Subject;
const styles = StyleSheet.create({
    bgSubject:(subject)=>(
        {
            height:50,
            backgroundColor:subject=='Matematika'?'#f16767':subject=='Biologi'?'#53c5c5':subject == 'Fisika'?'#57a0d5':subject=='Kimia'?'#fecf39':'#a5a5a5',
            borderTopRightRadius:50/2,
            borderBottomRightRadius:50/2,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            marginTop:6
        }
    ),
    subject:{
        flex:1,
        fontSize:20,
        color:'#FFFFFF',
        fontWeight:'300',
        marginLeft:20
    },
    iconSub:{
        height:30,
        width:30,
        marginRight:20
    }
})
