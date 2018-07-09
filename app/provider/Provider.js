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
      type: "video"
    },
    videos: {},
    handleChange: textInput => {
      return this.setState({
        inputValue: textInput,
        queryParameters: {
          part: "snippet",
          q: textInput,
          key: API_KEY,
          maxResults: 30,
          type: "video"
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
      <Context.Provider
        value={{
          state: this.state,
          isModalOpen: this.state.isModalOpen,
          toggleModal: this.state.toggleModal,
          setModalSource: this.state.setModalSource,
          changeLayout: this.state.changeLayout,
          flex: this.state.flex
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default ContextProvider;
export { Context };
