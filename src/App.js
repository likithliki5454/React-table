import "./App.css";
let details = [
  {
    Employeeid: 1,
    name: "Likhith",
    age: 24,
    gender: "Male",
    State: "Karnataka",
    Country: "India",
  },

  {
    Employeeid: 2,
    name: "Pradumna",
    age: 23,
    gender: "Male",
    State: "Odisha",
    Country: "India",
  },

  {
    Employeeid: 3,
    name: "Hash",
    age: 20,
    gender: "Female",
    State: "Uttar pradesh",
    Country: "India",
  },

  {
    Employeeid: 4,
    name: "Syed",
    age: 22,
    gender: "Male",
    State: "Karnataka",
    Country: "India",
  },
  ,
];

function App() {
  return (
    <div className="tab">
      <h1>
        Employee Table <hr></hr>
      </h1>

      <table>
        <tr id="head">
          <th>Employee id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>State</th>
          <th>Country</th>
        </tr>
        {details.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Employeeid}</td>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td>{val.State}</td>
              <td>{val.Country}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
