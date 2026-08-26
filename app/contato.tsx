import { router } from "expo-router"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"

export default function Contato(){
    return(

        <>
        <View>
            <Text>Contato</Text>
        </View>



      <View style={s.nav}>
            <TouchableOpacity onPress={() => router.push('/unity')}>
                <Image source={require('../assets/icons/left.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/cards')}>
                <Image source={require('../assets/icons/right.png')}/>
            </TouchableOpacity>
        </View>
     
        
        </>
    )
}

const s = StyleSheet.create({
    nav:{
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#F58A07',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20
    }
})