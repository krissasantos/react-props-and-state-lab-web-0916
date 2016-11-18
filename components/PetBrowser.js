const React = require('react');
const Pet = require('./Pet');
const { getAll } = require('../data/pets');
const ALL_PETS = getAll();



class PetBrowser extends React.Component {
  constructor(){
    super();
    // this.petFormatter = this.petFormatter.bind(this)
  }

  // petFormatter(all_the_pets){
  //   let that = this
  //   let petsFormatted = all_the_pets.map((animal){
  //
  //     return <Pet pet={animal} isAdopted={that.props.adoptedPets.includes(animal.id)} onAdoptPet = {that.props.onAdoptPet}/>
  //   })
  //   return petsFormatted
  // }

  render() {
    console.log(this.props.adoptedPets)
    
    var petComps = this.props.pets.map((petObj) =>{
      return <Pet pet={petObj} isAdopted={this.props.adoptedPets.includes(petObj.id)} onAdoptPet = {this.props.onAdoptPet}/>
    })

    return (
      <div className="ui cards">
        <p>THIS IS WHERE THE CARDS GO</p>
        {petComps}
      </div>
    );
  }
}
// <Pet pet={MALE_DOG} isAdopted={false} onAdoptPet = {this.props.onAdoptPet}/>

// const MALE_DOG = {
//   "id": "9e7cc723-d7f5-440d-8ead-c311e68014ee",
//   "type": "dog",
//   "gender": "male",
//   "age": 8,
//   "weight": 6,
//   "name": "Kennedy",
//
// };
module.exports = PetBrowser;
