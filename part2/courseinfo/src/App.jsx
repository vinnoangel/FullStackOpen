const Header = ({name}) => <h2>{name}</h2>

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
  console.log(course)
  return(
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return(
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
}

export default App