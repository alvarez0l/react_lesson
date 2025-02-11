import React from "react";

function FormComponent(props) {
    return (
    <main>
        <form>
            <input name="fName" value={props.data.fName} onChange={props.handleSubmit} placeholder="First Name" /><br />
            <input name="lName" value={props.data.lName} onChange={props.handleSubmit} placeholder="Last Name" /><br />
            <input name="age" value={props.data.age} onChange={props.handleSubmit} placeholder="Age" /><br />
            <label>
                <input type="radio" name="gender" value="male" checked={props.data.gender === "male"} onChange={props.handleSubmit} /> Male
            </label>
            <label>
                <input type="radio" name="gender" value="female" checked={props.data.gender === "female"} onChange={props.handleSubmit} /> Female
            </label>
            <br />
            <select name="destination" value={props.data.destination} onChange={props.handleSubmit}>
                <option value="Moscow">Moscow</option>
                <option value="London">London</option>
                <option value="NY">NY</option>
            </select>
            <br />
            <label>
                <input type="checkbox" name="test1" checked={props.data.test1} onChange={props.handleSubmit} /> Diet1
            </label>
            <label>
                <input type="checkbox" name="test2" checked={props.data.test2} onChange={props.handleSubmit} /> Diet2
            </label>
            <label>
                <input type="checkbox" name="test3" checked={props.data.test3} onChange={props.handleSubmit} /> Diet3
            </label>
            <br />
            <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {props.data.fName}</p>
        <p>Your age: {props.data.age}</p>
        <p>Your gender: {props.data.gender}</p>
        <p>Your destination: {props.data.destination}</p>
        <p>
            Your dietary restrictions:
            Test 1: {props.data.test1 ? "Yes" : "No"}
            Test 2: {props.data.test2 ? "Yes" : "No"}
            Test 3: {props.data.test3 ? "Yes" : "No"}
        </p>
    </main>
    )
}

export default FormComponent