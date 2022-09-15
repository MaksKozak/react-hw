function Character(props) {
    let {character} = props;
    return (
        <div>
            <h3>{character.id} -- {character.name} </h3>
            <h3>{character.status} -- {character.species}</h3>
            <p>Gender -- {character.gender}</p>
            <img src={character.image} alt={character.name}/>




        </div>
    )
}

export default Character;