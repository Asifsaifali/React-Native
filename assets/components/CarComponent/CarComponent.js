import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
// import Image1 from "../../images/ModelS.jpeg";
import React from "react";
import ButtonComponent from "./Button/ButtonComponent";

const CarComponent = (props) => {
//  const title = props.title;
// const  Subtitle = props.Subheading;
// const  newimg=props.Img;

const{name,title,image}=props.car;
 
 title==='Solar Panels'?'Solar Panels':title; 

  return (
    <View style={styles.CarContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.Subtitles}>{title}</Text>
      </View>

      <View style={styles.ButtonContainer}>
        <ButtonComponent
          type="first"
          content="custom order"
          onPress={() => {
            
          }}
        />
        <ButtonComponent
          type="second"
          content="Existing Inventory"
          onPress={() => {
            
          }}
        />
      </View>
    </View>
  );
};

export default CarComponent;
