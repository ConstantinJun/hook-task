import classes from "../component/App.module.css";
import NoteContextProvider from "../context/NoteContext";
import Footer from "./Footer";
import Header from "./Header";
import ContainerList from "./ContainerList";
import Search from "./Search";

function App() {
  return (
    <NoteContextProvider>
      <div className={classes.app}>
        <Header />
        <Search />
        <ContainerList />
        <Footer />
      </div>
    </NoteContextProvider>
  );
}

export default App;
