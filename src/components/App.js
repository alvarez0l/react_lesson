import React from "react";
import Header from "../Header";
import MainContent from "../MainContent";
import Footer from "../Footer";

// function App() {
//     return (
//         <div>
//           <Header />
//           <MainContent />
//           <Footer />
//         </div>
//     )
// };

// export default App;

// class App extends React.Component { 
//   constructor() { 
//       super() 
//       this.state = { 
//           count: 0 
//       } 
//       this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }
//   render() { 
//       return ( 
//           <div> 
//               <h1>{this.state.count}</h1> 
//               <button onClick={this.handleClick}>Change!</button> 
//           </div> 
//       ) 
//   } 
// } 

// class App extends React.Component { 
//   constructor() { 
//       super() 
//       this.state = {
//         loading: false,
//         character: {}
//       } 
//   } 

//   componentDidMount() {
//     this.setState({loading: true})
//     fetch("https://swapi.dev/api/films/1/") 
//     .then(response => response.json()) 
//     .then(data => {
//       this.setState({
//         loading: false,
//         character: data
//       })
//     }) 
//   }

//   render() { 
//       const text = this.state.loading ? "Идет загрузка, подождите.." : `${this.state.character.title} ${this.state.character.characters}`
//       return ( 
//           <div> 
//               <span>{text}</span>
//           </div> 
//       ) 
//   } 
// }

// class App extends React.Component { 
//   constructor() { 
//       super() 
//       this.state = {
//         firstName: "",
//         lastName: "",
//         textArea: "Some text",
//         isFriendly: false,
//         gender: "",
//         favColor: ""
//       }
//       this.handleChange = this.handleChange.bind(this) 
//   }

//   handleChange(event) {
//     const {name, value, type, checked} = event.target
//     type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
//   }

//   render() { 
//       const out = this.state.isFriendly ? <h2>{this.state.textArea}</h2> : "";
//       const genderCh = this.state.gender ? <h2>You are a {this.state.gender}</h2> : "";
//       const favColor = this.state.favColor ? <h2>Your favorite color is a {this.state.favColor}</h2> : "";
//       return ( 
//           <form>
//             <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange} />
//             <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} />
//             <br />
//             <textarea name="textArea" value={this.state.textArea} onChange={this.handleChange} />
//             <br />
//             <label>
//               <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange} /> textbox?
//             </label>
//             <br />
//             <label>
//               <input type="radio" name="gender" value="male" checked={this.state.gender == "male"} onChange={this.handleChange} /> Male
//             </label>
//             <br />
//             <label>
//               <input type="radio" name="gender" value="female" checked={this.state.gender == "female"} onChange={this.handleChange} /> Female
//             </label>
//             <h1>{this.state.firstName} {this.state.lastName}</h1><br />
//             {genderCh}
//             {out}
//             <label>Favorite color:</label>
//             <select value={this.state.favColor} onChange={this.handleChange} name="favColor">
//               <option value="Blue">Blue</option>
//               <option value="Green">Green</option>
//               <option value="Red">Red</option>
//               <option value="Orange">Orange</option>
//               <option value="Yellow">Yellow</option>
//             </select>
//             {favColor}
//           </form>
//       ) 
//   } 
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      fName: "",
      lName: "",
      age: "",
      gender: "",
      destination: "Moscow",
      test1: false,
      test2: false,
      test3: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    const {type, name, value, checked} = event.target
    type === "checkbox" ? this.setState( {[name]: checked} ) : this.setState({ [name]: value })
  }
  render() {
    console.log(this.state.test1, this.state.test2, this.state.test3)
    return (
      <main>
        <form>
          <input name="fName" value={this.state.fName} onChange={this.handleSubmit} placeholder="First Name" /><br />
          <input name="lName" value={this.state.lName} onChange={this.handleSubmit} placeholder="Last Name" /><br />
          <input name="age" value={this.state.age} onChange={this.handleSubmit} placeholder="Age" /><br />
          <label>
            <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleSubmit} /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleSubmit} /> Female
          </label>
          <br />
          <select name="destination" value={this.state.destination} onChange={this.handleSubmit}>
            <option value="Moscow">Moscow</option>
            <option value="London">London</option>
            <option value="NY">NY</option>
          </select>
          <br />
          <label>
            <input type="checkbox" name="test1" checked={this.state.test1} onChange={this.handleSubmit} /> Diet1
          </label>
          <label>
            <input type="checkbox" name="test2" checked={this.state.test2} onChange={this.handleSubmit} /> Diet2
          </label>
          <label>
            <input type="checkbox" name="test3" checked={this.state.test3} onChange={this.handleSubmit} /> Diet3
          </label>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.fName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          Test 1: {this.state.test1 ? "Yes" : "No"}
          Test 2: {this.state.test2 ? "Yes" : "No"}
          Test 3: {this.state.test3 ? "Yes" : "No"}
        </p>
      </main>
    )
  }
}

export default App