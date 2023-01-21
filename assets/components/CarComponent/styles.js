import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';
const style=StyleSheet.create({
    CarContainer:{
        width:'100%',
        height: Dimensions.get('screen').height,
      },
      titles:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center'
      },
      title:{
        fontSize:40,
        fontWeight:'500',
      },
      Subtitles:{
        fontSize:16,
        color:'#5c5e62',
       textDecorationLine:'underline',
      },
      image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:"absolute"
      },
      ButtonContainer:{
        position:'absolute',
        bottom:50,
        width:'100%',
      }
})

export default style;