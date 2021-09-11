import React from 'react';
import "firebase/firestore";
import Loader from '../components/Load'

class App extends React.Component {
    state = {
        isLoading : false,
    };

    render() {
        const { isLoading } = this.state;
        return (
            <section>
              <h1> How to connect Firebase ?</h1>
              { isLoading
              ? (
                <Loader />
              )
              : (
                <h1>11</h1>
              )}
            </section>
          )
    }
}

export default App;