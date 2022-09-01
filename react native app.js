import React from 'react'
import {StatusBar} from 'expo-status bar';
import { Stylesheet,Text,View,Button} from 'react-native';
import './App.css'

export default class App extends React.Component {
    state={
        value:0,
        totaltaps:0
    }
    
    incrementValue = () =>{
        this.setState({
            value: this.setState.value +1,
            totaltaps:this.setState.totaltaps +1
        })
        console.log("value:"+ this.setState.value +1);
    }
    decrementValue = () =>{
        this.setState({
            value: this.setState.value -1,
            totaltaps: this.setState.totaltaps +1
        })
        console.log("value:"+ this.setState.value -1);
    }
    render (){
return (
		<View styles= {styles.container}>
        <Text> open up app.js to start working on your app</Text>
        <Statusbar styles="auto"/>
        </View>
	);
    }
	
}
const style=Stylesheet.create({
    container: {
        flex : 1,
        backgroundcolor:"#fff",
        alignItem: 'center',
        justifyContent: 'center',
    },
});