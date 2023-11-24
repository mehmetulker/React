import "./App";
import Header from "./components/Header";
import User from "./components/User"


const friends2=[
  {
    id:1,
    name: "Ahmet",
  },
  { id:2,
    name: "Yusuf",
  },
  { id:3,
    name: "Zehra",
  },
];

function App() {
  return (
    <div>
      <User name="Mehmet" surname="Ülker" isLoggedIn={true} age={29} friends={["Ahmet", "Mehmet", "Yusuf","Ahmet", "Mehmet", "Yusuf"]} friends2={friends2} ></User>
      <h1>Hello React</h1>
      <Header></Header>
    </div>
  );
}

export default App;