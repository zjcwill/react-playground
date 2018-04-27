import React from "react";

const ThemeContext = React.createContext("light");

function ThemedButton(props) {
  return (
    <div>
      <ThemeContext.Consumer>
        {theme => (
          <button theme={theme} {...props}>
            {theme}
          </button>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

// An intermediate component
function Toolbar(props) {
  // The Toolbar component must take an extra theme prop
  // and pass it to the ThemedButton
  return (
    <div>
      <ThemeContext.Consumer>
        {theme => <ThemedButton theme={theme} {...props} />}
      </ThemeContext.Consumer>
    </div>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: "light"
    };
  }
  render() {
    return (
      <div>
        <input
          type="checkbox"
          onChange={e => {
            if (e.target.value) {
              this.setState({ theme: "dark" });
            }
          }}
        />
        <span>dark</span>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
