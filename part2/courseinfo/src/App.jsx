const Header = ({name}) => <h1>{name}</h1>

const Part = ({partName, exercises}) => <p>{partName} {exercises}</p>

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => 
          <Part 
            key={part.id} 
            partName={part.name} 
            exercises={part.exercises} 
          />
        )
      }
      <h4>total of {parts.reduce((total,part) => total = total + part.exercises, 0)} exercises</h4>
    </div>
  )
}

const Course = ({course}) => {
  console.log(course.name)
  return(
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App