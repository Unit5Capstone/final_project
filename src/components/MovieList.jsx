// import React from "react";
// import axios from "axios";

// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
//   headers: {
//     "X-RapidAPI-Key": "84de910d50mshe4756b30e6b038bp1ae807jsn41d4f38e0837",
//     "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

// export default class PersonList extends React.Component {
//   state = {
//     persons: [],
//   };

//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
//       const persons = res.data;
//       this.setState({ persons });
//     });
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.persons.map((person) => (
//           <li key={person.id}>{person.name}</li>
//         ))}
//       </ul>
//     );
//   }
// }
