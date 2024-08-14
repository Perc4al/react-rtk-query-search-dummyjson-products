import "./App.css";
import { ItemList } from "./components/ItemList.js";
import { store } from "./store";
import { Provider } from "react-redux";
import {
  DarkModeProvider,
  DarkModeContext,
} from "./context/DarkModeContext.js";
import { Theme } from "@radix-ui/themes";
import SearchBar from "./components/SearchBar.js";
import Header from "./components/Header.js";

function App() {
  return (
    <Provider store={store}>
      <DarkModeProvider>
        <DarkModeContext.Consumer>
          {({ isDarkMode }) => (
            <Theme
              accentColor="blue"
              grayColor="slate"
              appearance={isDarkMode ? "dark" : "light"}
            >
              <div className="App">
                <Header />
                <SearchBar />
                <ItemList />
              </div>
            </Theme>
          )}
        </DarkModeContext.Consumer>
      </DarkModeProvider>
    </Provider>
  );
}

export default App;
