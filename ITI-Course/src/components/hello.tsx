export default function Hello({name, age}: {name: string, age: number}) {
    return (
    <div>
        <h2>hello from component hello</h2>
        <p>now you get this paragraph from component</p>
        <p>My name is {name} and I am {age} years old.</p>
        <button onClick={() => console.log("button clicked")}>Click</button> 
    </div>
    );
}