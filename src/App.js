// import "./App.css";
import Left from "./Left";
import Right from "./Right";
import SplitScreen from "./SplitScreen";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SplitScreen leftweight={2} rightweight={3}>
          <Left name="ved"></Left>
          <Right name="patel"></Right>
        </SplitScreen>
      </header>
    </div>
  );
}

export default App;
