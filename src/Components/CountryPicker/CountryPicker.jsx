import React, { Component,useEffect,useState } from 'react';
import {NativeSelect , FormControl} from '@material-ui/core';
import styles from './Country.module.css'
import {fetchCountries} from '../../api/'


const CountryPickers =  ({handleCountryChange}) => {

    const [ fetchedCountries , setFetchCountries] = useState([]);

    //不能在useEffect使用async , 需另外在裡面寫
    useEffect(() =>{   

        const fatchAPI = async () =>{

            setFetchCountries(await fetchCountries());

        }

        fatchAPI();

    },[setFetchCountries]);


        console.log(fetchedCountries)
    return (
        <FormControl className={styles.formControl}>

            <NativeSelect defaultValue="" onChange={(e) =>  handleCountryChange(e.target.value) }>
                <option value="globel">Globe</option>
                {/* react 中 用map 需要給key值 */}
                {fetchedCountries.map((country, i ) => <option  key={i} value = {country}>{country}</option>)}

            </NativeSelect>


        </FormControl>


    );

}

export default CountryPickers;