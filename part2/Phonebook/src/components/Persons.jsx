const Persons = ({persons}) => {
    return(
        <div>
            {persons.map(
                person => <div key={person.name + Math.random()}>
                    {person.name} {person.number}
                </div>
            )}
        </div>
    )
}

export default Persons