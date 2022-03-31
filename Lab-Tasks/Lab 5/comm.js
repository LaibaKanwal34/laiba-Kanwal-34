import React from 'react'
import { StyleSheet,Button,TouchableHighlight
} from 'react-native'

export default function (props){

 return (
    <TouchableHighlight style={styles.Button}>
        <Button title={props.title} />

    </TouchableHighlight>
)
}
const styles=StyleSheet.create({
    Button:{
       
        width:160,
        borderRadius:10,
        backgroundColor : "yellow",
        marginLeft :50,
        marginRight:50,
        marginTop :20}
})

