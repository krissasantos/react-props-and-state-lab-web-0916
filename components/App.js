const React = require('react');
const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');
const { getAll } = require('../data/pets');
const ALL_PETS = getAll();

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets:ALL_PETS,
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

  this.onAdoptPet = this.onAdoptPet.bind(this)
  }
  onAdoptPet(id){
    this.setState({adoptedPets: [...this.state.adoptedPets, id]}) 

    console.log(this.state.adoptedPets)
  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} onAdoptPet = {this.onAdoptPet} adoptedPets = {this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const MALE_DOG = {
//   "id": "9e7cc723-d7f5-440d-8ead-c311e68014ee",
//   "type": "dog",
//   "gender": "male",
//   "age": 8,
//   "weight": 6,
//   "name": "Kennedy"
// };

module.exports = App;
