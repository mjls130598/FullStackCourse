const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return(
    <p>
        {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.content[0].name} exercises={props.content[0].exercises}/>
      <Part part={props.content[1].name} exercises={props.content[1].exercises}/>
      <Part part={props.content[2].name} exercises={props.content[2].exercises}/>
    </div>
  )
}

const Footer = (props) => {
  return(
    <p>Number of exercises {props.number}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const content = [
    part1, part2, part3
  ]

  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <Footer number={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App