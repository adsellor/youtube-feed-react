import React, { PureComponent } from "react";
import { API_KEY } from "../api/index";

// Create Context Provider To pass the input value as a search query

const Context = React.createContext();

class ContextProvider extends PureComponent {
  state = {
    inputValue: "",
    queryParameters: {
      part: "snippet",
      q: "",
      key: API_KEY,
      type: "video",
      maxResult: 30
    },
    videos: {},
    handleChange: textInput => {
      return this.setState({
        inputValue: textInput,
        queryParameters: {
          ...this.state.queryParameters,
          q: textInput
        }
      });
    },
    storeData: data => {
      return this.setState({ videos: data });
    },
    isModalOpen: false,
    toggleModal: _ => this.setState({ isModalOpen: !this.state.isModalOpen }),
    modalSource: "",
    setModalSource: source => this.setState({ modalSource: source }),
    flex: false,
    changeLayout: _ => this.setState({ flex: !this.state.flex })
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default ContextProvider
export { Context }
