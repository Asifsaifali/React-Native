import { View,Pressable,Text } from 'react-native'
import React, { Component } from 'react'
import styles from './styles';

const ButtonComponent =(props)=> {

  const{type,content,onPress}=props;
  const backgroundColor=type=='first'?'white':'black';
  const textColor=type=='first'?'black':'white'

    return (
      <View style={styles.container}>
        <Pressable style={[styles.button,{backgroundColor}]}
        onPress={onPress()}
        >
          <Text style={[styles.text,{color:textColor}]}>{content}</Text>
        </Pressable>
        
      </View>
    )
}

export default ButtonComponent;