import React from 'react';
import Counter from "./Counter";

interface AppProps {
  message?: string;
  description?: string;
}
// type AppProps = {
//   message: string;
// }


const App: React.FunctionComponent<AppProps> = ({ message }) => <div><Counter /></div>;


App.defaultProps = {
  message: "Hello, defaultProps!",
  description: "This is App component.",
}

export default App;
