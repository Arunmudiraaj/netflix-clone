import "./App.css";
import { Banner } from "./Components/Banner";
import { Nav } from "./Components/Nav";
import ROW from "./Components/ROW";
import requests from "./requests";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <ROW
        title="Netflix Originals"
        url={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <ROW title="Trending Now" url={requests.fetchTrending} />
      <ROW title="Top Rated" url={requests.fetchTopRated} />
      <ROW title="Action Movies" url={requests.fetchActionMovies} />
      <ROW title="Comedy Movies" url={requests.fetchComedyMovies} />
      <ROW title="Horror Movies" url={requests.fetchHorrorMovies} />
      <ROW title="Romantic Movies" url={requests.fetchRomanceMovies} />
      <ROW title="Documentaries" url={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
