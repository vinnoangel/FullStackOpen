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

export default Course;