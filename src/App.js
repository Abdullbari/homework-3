import "./App.css";
import Friends from "./components/friends";
import friends from "./friends.json";
function App() {
  return (
    <>
      <Friends friends={friends} />
    </>
  );
}

export default App;
