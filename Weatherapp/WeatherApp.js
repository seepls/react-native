
import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Image} from 'react-native';
import OpenWeatherMap from "./open_weather_map";
import Forecast from "./Forecast";

class WeatherApp extends Component {
    contructor(props) {
      super(props);
      this.state = { zip: "",forcast: null};
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
      <Image
       source = {require("./flowers.png")
       <Text style ={styles.welcome}>
         resizeMode="cover"
         style={styles.backdrop}
      >
         <View style ={styles.overlay}>
           <View style ={styles.row}>
             <Text style={styles.mainText}>
               Current weather for 
             </Text>
             <View style ={styles.zipContainer}>
               <TextInput
                  style={[styles.zipCode, styles.mainText]}
                  onSubmitEditing ={ this._handleTextChange}
                  underlineColorAndroid= "transparent"
              />
             </View>
            </View>
            {content}
      </View>
      </Image>
      </View>
        );
    }
}

const baseFontSize = 16;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {flex:1 ,flexDirection: "column"},
  overlay: {
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    aligItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3 
  },
  
  zipCode: { flex: 1 , flexBasics : 1 , width: 50, height: baseFontSize},
  mainText: { fontSize: baseFontSize , color :"#FFFFFF"}
  
});


export default WeatherApp;

