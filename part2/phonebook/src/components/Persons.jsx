import Person from "./Person"

const Persons = ({persons, handleRemove}) => {

    return(
        <div>
            {persons.map(person => 
                <Person 
                    key={person.id} 
                    id={person.id}
                    name={person.name} 
                    number={person.number}
                    handleRemove={handleRemove}
                    />)}
        </div>
    )
}

export default Persons