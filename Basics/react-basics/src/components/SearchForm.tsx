import { useEffect, useState } from "react"

function SearchForm(){
    const [animal, setAnimal] = useState("");
    let [counter, setCounter] = useState(0)
    console.log(animal, counter);

    useEffect(() => {
        document.title = `Changes time ${counter}`
    },[animal, counter])
    
    return (
        <div className="form-container">
            <form className="search-form">
                <label htmlFor="animal">
                    Animal 
                    <input type="text" 
                    value={animal} 
                    onChange={(e) => setAnimal(e.target.value)} // updates as you type
                    onBlur={() => setCounter(prev => prev + 1)} // increments when you leave
                    />
                </label>
            </form>
        </div>
    )
}

export default SearchForm;