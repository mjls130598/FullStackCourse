const Person = ({id, name, number, handleRemove}) => {

    return(
        <div>
            <p>{name} {number}</p>
            <button onClick={() => handleRemove(id, name)}>delete</button>
        </div>
    )
}

export default Person