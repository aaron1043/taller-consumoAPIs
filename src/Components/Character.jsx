/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Character({ character }) {
    return (
        <div className="text-center p-5">
            <h3>{character.name}</h3>
            <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
            <p>{character.origin.name}</p>
        </div>
    );
}

export default Character 
