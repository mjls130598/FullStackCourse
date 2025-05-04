import Part from "./Part"

const Content = ({parts}) =>{
    return(
        <div>
            {parts.map(part => <Part key={part.id} part={part}/>)}
            <p>
                <strong>
                    total of {parts.reduce((sum, part) => {return(sum + part.exercises)}, 0)} exercises
                </strong>
            </p>
        </div>
    )
}

export default Content