import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./SuccessStories.css";

class SuccessOpossum extends Component {
  render() {
    const handleClick = (path) => (event) => {
      this.props.history.push(path);
    };

    return (
      <div className="bg-img-ss">
        <h3>
          Orphaned Opossums Get A Foster Family, Recover And Get Released!
        </h3>
        <div className=" columns">
          <img className="ss-img" alt="Opossums" src="../Images/WR3.jpg"></img>
          <p className="ss-desc">
            All Things Wild Rehabilitation in Texas were introduced to the baby
            opossums when their mother was hit and killed by a car. Named Sting
            and Trudy after the British musician, they seemed to have no trouble
            growing, continuing to do so until they were lapping formula and
            starting to wean. Then, Sting continued growing, but Trudy stopped
            thriving.
          </p>
          <p className="ss-desc">
            Sting grew to be almost 5 times the size of Trudy, while Trudy
            continued to lose ground rapidly. Fortunately, they rehabilitation
            was able to entice Trudy to lap up some meal replacements. After
            only a couple weeks, Trudy was back to thriving. Even though she
            will never grow to the size of her pouch-mate, Sting, she will be
            released back into the wild with him.
          </p>
        </div>

        <button className="go-back-btn" onClick={handleClick("/admin")}>
          Go Back
        </button>
      </div>
    );
  }
}

export default withRouter(SuccessOpossum);
