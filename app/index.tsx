import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Home(){

  // const vaiPraLa = () => {
  //   router.push('/cards')
  // }

    return(
        <View style={s.container}>
            <ImageBackground source={require('../assets/images/bg.png')} resizeMode="cover" style={s.image}>
                <Image style={s.logo} source={require('../assets/images/logo.png')}/>
                <TouchableOpacity style={s.btn} onPress={() => router.push('/cards')}>
                    <Text style={s.btnText}>ENTRAR</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  logo:{
    alignSelf: 'center'
  },
  btn:{
    alignSelf:'center',
    backgroundColor: '#084887',
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginTop: 500
  },
  btnText:{
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30
  }
})