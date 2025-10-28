import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import entryData from "./assets/journal-data";

function App() {
  // creating an array of jsx elements
  const entryElements = entryData.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });

  return (
    <>
      <Header />
      <main>{entryElements}</main>
    </>
  );
}

export default App;
