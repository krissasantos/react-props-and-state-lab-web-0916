const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        <Pet pet={MALE_DOG} isAdopted={false}/>
      </div>
    );
  }
}

const MALE_DOG = {
  "id": "9e7cc723-d7f5-440d-8ead-c311e68014ee",
  "type": "dog",
  "gender": "male",
  "age": 8,
  "weight": 6,
  "name": "Kennedy",

};
module.exports = PetBrowser;
