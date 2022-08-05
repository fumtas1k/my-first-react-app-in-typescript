import React from 'react';

interface AppProps {
  message?: string;
  description?: string;
}
// type AppProps = {
//   message: string;
// }


const App: React.FunctionComponent<AppProps> = ({ message }) => <div>{message}</div>;


App.defaultProps = {
  message: "Hello, defaultProps!",
  description: "This is App component.",
}

export default App;
