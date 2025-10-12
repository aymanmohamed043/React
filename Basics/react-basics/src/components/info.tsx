interface Information {
    name: string,
    age: number,
    graduated: boolean
}

function Info({name, age, graduated }:Information){
    return(
        <div className="info">
            <h1>{name}</h1>
            <h2>my age is: {age}</h2>
            <h2>{graduated? "I'm graduates": "I'm student"}</h2>
        </div>
    );
}

export default Info;