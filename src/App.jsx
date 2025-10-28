import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import entryData from "./assets/journal-data";

function App() {
  const entryElements = entryData.map((entry) => {
    return (
      <Entry
        img={entry.img}
        country={entry.country}
        destinationName={entry.destinationName}
        date={entry.date}
        description={entry.description}
      />
    );
  });

  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}

export default App;
