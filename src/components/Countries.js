import React from 'react'

const  Countries = (props) => {
  return( 
    <section className={style.countries}>
    {props.countries.map((country) =>{
        const countryNew = {country, id: uuidv4() };
        return <Country 
        {...countryNew}
        key={countryNew.id}
        onRemoveCountry={props.onRemoveCountry}/>;
    })}
   </section>
  );
};

export default Countries;
