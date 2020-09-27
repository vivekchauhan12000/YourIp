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
     axios.get('https://ip-api.com/json/')
      .then((response) => {
        const advice = response.data.country;
        const ip = response.data.query;
        const zipcode=response.data.zip;
        const lat=response.data.lat;
        const log=response.data.lon;
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
          <h2 className="cont">Zipcode: {this.state.zipcode}</h2>
          <h2 className="cont">Latitude: {this.state.lat}</h2>
          <h2 className="cont">Longitude: {this.state.log}</h2>
          
        </div>
      </div>
    );
  }
}

export default App;
