import React, { PureComponent } from "react";

import InputProvider, {Context} from "../provider/Provider";
import SearchBar from "./Input";
import VideoList from "./VideosList";
import Modal from "./Modal";
import "../scss/base.scss";

// Render main structure of the app.
class App extends PureComponent {
  render() {
    return (
      <InputProvider>
        <SearchBar />
        <Context.Consumer>
          {data => (
            <div className={data.flex ? 'group_flex' : 'group_grid'}>
              <VideoList />
            </div>
          )}
        </Context.Consumer>
        <Modal />
      </InputProvider>
    );
  }
}

export default App;
