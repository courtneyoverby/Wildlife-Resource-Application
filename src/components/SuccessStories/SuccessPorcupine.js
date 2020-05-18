import React, { Component } from "react";

class SuccessPorcupine extends Component {
  render() {
    const handleClick = (path) => (event) => {
      this.props.history.push(path);
    };
    return (
      <div>
        <h4>A Porcupine With Mange</h4>
        <img alt="Porcupine" src="../images/WR2.jpg"></img>
        <p>
          As a one year old wildlife center, All Things Wild Rehabilitation in
          Texas still sees a huge amount of firsts. On Christmas Eve, a wild
          porcupine arrived with severe sarcoptic mange, primarily on her head
          and tail. She also suffered with secondary skin infections and an
          upper respiratory tract infection. On top of all this, she was
          emaciated and dehydrated.
        </p>
        <p>
          The rehabilitation center's first priority was to get her hydrated and
          nourished. Once the porcupine, later named 'Noelle', was stabilized,
          they began treating the mites causing her mange. After hours and hours
          of cleaning Noelle’s badly crusted skin and a regimen of antibiotics
          for the infections, the wildlife vet tech was finally able to announce
          that Noelle was free of mites and on the mend.
        </p>
        <button onClick={handleClick("/admin")}>Go Back</button>
      </div>
    );
  }
}

export default SuccessPorcupine;
