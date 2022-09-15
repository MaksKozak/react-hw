import {characters} from "./data";
import Character from "./Character"


function Characters (props) {
    return (
        <div>
            {
                characters.map((character, index) => <Character key={index} character={character}/>)
            }
        </div>
    );

}

export default Characters;