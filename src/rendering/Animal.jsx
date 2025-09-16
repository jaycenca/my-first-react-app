function ListItem(props ) {
    return <li>{props.animal}</li>;
}

function List(props) {
    return (
        <ul>
            {
                props.animals.map((animal) => <ListItem key={animal} animal={animal} />)
            }
        </ul>
    )
}

function ListWithConditional(props) {
    return (
        <ul>
            {
                props.animals.map((animal) => {
                    return animal.startsWith('L') &&
                    <ListItem key={animal} animal={animal} /> 
                })
            }
        </ul>
    )
}

function ListWithLoadingRender(props) {
    if (!props.animals.length) {
        return <div>Loading...</div>;
    }

    if( props.animals.length === 0 ) {
        return <div>There are no animals in the list!</div>;
    }
    return (
        <ul>
            {
                props.animals.map((animal) => <ListItem key={animal} animal={animal} />)
            }
        </ul>
    )
}

function ListWithMixedTenaries(props) {
    return (
        <>
          { !props.animals && <div>Loading...</div> }
          { props.animals && props.animals.length > 0 && (
            <ul>
                {
                    props.animals.map((animal) => {
                        return <li key={animal}>{animal}</li>;
                    })
                }
            </ul>
          )}
          { props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div> }
        </>
    )
}
export default function Animal() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    // Using map to create an array of JSX elements
    const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>);

    return (
        <div>
            <h1>Animals:</h1>
            <ListWithMixedTenaries animals={animals} />  
        </div>
    )
}