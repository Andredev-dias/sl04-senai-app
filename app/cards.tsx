import { router } from "expo-router";
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from "react-native";
import dados from '@/assets/constants/mock'
import { Item } from "@/components/item"

export default function Cards(){

    return(
        <View style={s.screen}>
           <TouchableOpacity onPress={() => router.push('/')}>
                <Text>Sair</Text>
           </TouchableOpacity>

            <FlatList data={dados} renderItem={({item}) => (
                <Item picture={item.image} title={item.title} text={item.text} />
            )}>
            </FlatList>
 
        <View style={s.nav}>
            <TouchableOpacity onPress={() => router.push('/contato')}>
                <Image source={require('../assets/icons/left.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/unity')}>
                <Image source={require('../assets/icons/right.png')}/>
            </TouchableOpacity>
           </View>
        </View>
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
    },
    screen:{
        flex: 1
    }
})