import Header from "./components/Header";
import Holidays from "./components/Holidays";
import DataSource from "./components/data";

function App() {
    const postHolidays = DataSource.map((item) => {
      return (
        <Holidays 
            id={item.id}
            items={item}
        />
      )
    })

  return (
    <div className="App">
      <Header />
      {postHolidays}
      
      
    </div>
  );
}

export default App;
