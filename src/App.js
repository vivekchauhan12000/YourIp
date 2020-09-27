import React from 'react'
import './App.css';
import axios from 'axios';
//import { Navbar } from 'react-bootstrap';
import Navbar from './Navbar';

class App extends React.Component {
  state = {
    advice: '',
    ip:'',
    zipcode:'',
    lat:'',
    log:'',
  }

   componentDidMount() {
     this.fetchAdvice();
  }

   fetchAdvice(){
     axios.get('https://ipapi.co/json/')
      .then((response) => {
        const advice = response.data.country_name;
        const ip = response.data.ip;
        const zipcode=response.data.region;
        const lat=response.data.latitude;
        const log=response.data.longitude;
        this.setState({ advice });
        this.setState({ ip });
        this.setState({ zipcode });
        this.setState({ lat });
        this.setState({ log });
        //console.log(response.data.country);
        console.log(advice);
        console.log(ip);
        console.log(zipcode);
        console.log(lat);
        console.log(log);


      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
       

      <div className="app">
        
        <Navbar/>
       
       
        <div className="card">
        <h2 className="cont">IP: {this.state.ip}</h2>
          <h2 className="cont">Country: {this.state.advice}</h2>
          <h2 className="cont">State: {this.state.zipcode}</h2>
          <h2 className="cont">Latitude: {this.state.lat}</h2>
          <h2 className="cont">Longitude: {this.state.log}</h2>
          
          
        </div>
      </div>
    );
  }
}

export default App;
