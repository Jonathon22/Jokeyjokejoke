import React from 'react';
import jokeData from '../Helpers/Data/jokeData';
import Setup from '../Components/Setup';
import Punchline from '../Components/Punchline';
import './App.css';

class App extends React.Component {
  state = {
    joke: {},
    startButton: true,
    startSetup: false,
    startPunchline: false,
  }

  componentDidMount() {
    jokeData.getJoke().then((resp) => {
      this.setState({
        joke: resp,
      });
    });
  }

  updateJokeButton = () => {
    this.setState({
      startButton: false,
    });
  }

  updateSetup = () => {
    this.setState({
      startSetup: !this.state.startSetup,
    });
  }

  updatePunchline = () => {
    this.setState({
      startPunchline: !this.state.startPunchline,
    });
  }

  render() {
    const { startButton, startSetup, startPunchline } = this.state;
    return (
      <div className="App">
        <div id='container' className="">
          <img src='https://user-images.githubusercontent.com/29741570/98047811-372e3b80-1df2-11eb-9bb6-3e8845e92d9e.png'
          alt='header'/><br></br>
          {startButton ? (
          <>
          <button className="btn btn-outline-dark btn-lg" onClick={() => { this.updateSetup(); this.updateJokeButton(); }}>GET A JOKE</button>
          </>) : (
          <>
          <div></div>
          </>
          )}
          {startSetup ? (
          <>
          <Setup setup={this.state.joke.setup} />
          <button className="btn btn-outline-dark btn-lg" onClick={() => { this.updatePunchline(); this.updateSetup(); }}>Punchline</button>
          </>
          ) : (
          <>
          <div></div>
          </>
          )}
          {startPunchline ? (
          <>
          <Setup setup={this.state.joke.setup} />
          <Punchline punchline={this.state.joke.punchline} />
          <button className="btn btn-outline-dark btn-lg" onClick={() => window.location.reload(false)}>I want another one</button>
          </>) : (
          <>
          <div></div>
          </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
