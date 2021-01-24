import React, { Component } from 'react';
// import Cards from './Components/Cards/Cards';
// import Chart from './Components/Chart/Chart';
// import Cards from './Components/CountryPicker/CountryPicker';

import {Cards , Chart , CountryPicker} from './Components'
import styles from './App.module.css';
import { fetchData } from './api';


class App extends Component {
  


  state = {

    data : {},
    country:'',


  }

  //拉遠端資料時，可用DidMount將資料掛載
  async componentDidMount(){

    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
    // console.log(fetchedData)
  }

  handleCountryChange = async(country) =>{


    // fetch data
    const fetchedData = await fetchData(country);
    console.log(fetchedData )

    // set the state

    this.setState({data: fetchedData, country :country});
  }


  render() { 
    const { data , country} = this.state;


    return ( 
      <div className = {styles.container}> 
        
          <Cards data = {data}/>
          <Chart data = {data} country = {country}/>
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
        

      </div>


     );
  }
}
 
export default App;