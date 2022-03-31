import React from "react";
import { StyleSheet,Button,TouchableHighlight
} from 'react-native';

export default function (props) {
  return (
    <TouchableHighlight style={styles.Button}>
      <Button title={props.title}/>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  
    Button:{
      height: 40,
      width:160,
      borderRadius:10,
      fontSize:200,
      backgroundColor : "red",
      marginLeft :50,
      marginRight:50,
      marginTop :20
    }
    });
