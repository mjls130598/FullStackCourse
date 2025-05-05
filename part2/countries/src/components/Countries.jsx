const Countries = ({countries}) => {

    return(
        <div>
            {countries.map(country => 
                <p key={country}>{country}</p>)}
        </div>
    )
}

export default Countries