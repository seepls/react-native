
import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';
import OpenWeatherMap from "./open_weather_map";
import Forecast from "./Forecast";

class WeatherApp extends Component {
    contructor(props) {
      super(props);
      this.state = { zip: ""};
    }

    _handleTextChange=event=> {
      let zip = event.nativeEvent.text;
      OpenWeatherMap.fetchForecast(zip).then(forecast =>{
        this.setState({ forecast: forcast});
      });
    };

                                             
    render(){
      let content = null ;
      if( this.state.forcast!=null){
         content =(
           <Forecast
            main={this.state.forecast.main}
           description={this.state.forecast.description}
           temp={this.state.forecast.temp}
           />
           );
      }
    return(
     <View style ={styles.container}>
       <Text style ={styles.welcome}>
         you input {this.state.zip}.
        </Text>
      {content}
        <TextInput
                style={styles.input}
                onSubmitEditing ={this._handleTextChange}
        />
        </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {fontSize: 20, textAlign: 'center', margin: 10 },
  input:{
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: "center"
  }
});


export default WeatherApp;

