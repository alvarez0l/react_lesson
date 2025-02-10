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

class App extends React.Component { 
  constructor() { 
      super() 
      this.state = {
        firstName: "",
        lastName: "",
        textArea: "Some text",
        isFriendly: true 
      }
      this.handleChange = this.handleChange.bind(this) 
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() { 
      const out = this.state.isFriendly ? <h2>{this.state.textArea}</h2> : ""
      return ( 
          <form>
            <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange} />
            <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} />
            <br />
            <textarea name="textArea" value={this.state.textArea} onChange={this.handleChange} />
            <br />
            <label>
              <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange} /> is friendly?
            </label>
            <h1>{this.state.firstName} {this.state.lastName}</h1><br />
            {out}
          </form>
      ) 
  } 
}

export default App