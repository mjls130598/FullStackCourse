const Countries = ({countries, showCountry}) => {

    return(
        <div>
            {countries.map(country => 
            <div key={country}>
                <p>{country}</p>
                <button onClick={() => showCountry(country)}>Show</button>
            </div>)
            }
        </div>
    )
}

export default Countries