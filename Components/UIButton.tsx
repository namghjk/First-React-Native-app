import React, { useState } from "react";
import { TouchableOpacity, View,Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

function UIButton(props){
    const {tittle,isSelected,onPress} = props
    
    return(
        <View
              style={{
                borderColor: 'white',
                borderWidth: 1,
                margin: 5,
                height: 60,
                borderRadius: 5,
                justifyContent: 'center',
                marginStart: 10,
                marginEnd: 10,
                backgroundColor:  isSelected ==true ? 'white' : null,
              }}>
              <TouchableOpacity
                onPress={onPress}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  flexDirection:'row'
                }}
                >
                {isSelected == true && <Icon size={30} name={"check"} style={{
                  color: '#00ced1',
                  position: 'absolute',
                  left: 30,
                  justifyContent: 'center',
                }}/>}
                <Text
                  style={{
                    color: isSelected == true ? '#00ced1' : "white",
                    fontSize: 16,
                  }}>
                 {tittle}
                </Text>
              </TouchableOpacity>
            </View>
    )
}

export default UIButton