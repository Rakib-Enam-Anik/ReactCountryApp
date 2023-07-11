import React from 'react'

const  Countries = (props) => {
  return <sectioon> 
    {props.countries.map((country) =>{
        const countryNew = {country, id: uuidv4()};

        return <Country {...countryNew} Key={countryNew.id}/>;
    })}
  
  </sectioon>;
};

export default Countries;
