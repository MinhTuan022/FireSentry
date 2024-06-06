import { View, Text, Image } from 'react-native'
import React from 'react'
import SectionComponent from '../../components/SectionComponent'
import TextComponent from '../../components/TextComponent'
import { globalStyle } from '../../styles/globalStyle'


const LoginScreen = () => {
  return (
    <View style={globalStyle.container}>
      <SectionComponent styles={[globalStyle.center, {backgroundColor:"coral",}]}>
        <Image source={require("../../assets/logo/login-logo.png")} style={{position:'relative', left:50, top:0}}/>
        <TextComponent text='Welcome back' title/>
        <TextComponent text='sign in to access your account'/>
      </SectionComponent>
    </View>
  )
}

export default LoginScreen