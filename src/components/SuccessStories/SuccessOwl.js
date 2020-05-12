import React, { Component } from "react";

class SuccessOwl extends Component {
  render() {
    const handleClick = (path) => (event) => {
      this.props.history.push(path);
    };

    return (
      <div>
        <h4>Barred Owl Hit By A Car, Recovers From Injuries</h4>

        <img alt="Owl" src="../images/WR1.jpg"></img>
        <p>
          In January of 2020, Woodford Cedar Run Wildlife Refuge in New Jersey
          received a Barred Owl that was in awful shape. Before being rescued,
          the owl had been hit by a car and suffered from ocular damage and
          severe head trauma. His initial exam showed a significant amount of
          blood behind his right ear, mouth, and nares (two circular holes which
          lead to the nasal cavities within the bird's skull, and thus to the
          rest of the respiratory system).{" "}
        </p>
        <p>
          The refuge staff administered supportive care with fluid therapy, pain
          medication, anti-inflammatory medication, and antibiotics. The owl was
          placed into the ICU for three days, where he showed significant
          improvements. After two days of fluids, they introduced EmerAid IC
          Carnivore slurry as his reintroduction to nutrition. After a few days
          of carnivore slurry, they continued with our emaciation protocol.
        </p>
        <p>
          Woodford Cedar Run Wildlife Refuge are happy to report that he is
          currently self-feeding and doing well. They hope for a successful
          outcome and release.
        </p>
        <button onClick={handleClick("/admin")}>Go Back</button>
      </div>
    );
  }
}

export default SuccessOwl;
