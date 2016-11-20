const React = require('react');
const Pet = require('./Pet');
const { getAll } = require('../data/pets');
const ALL_PETS = getAll();



class PetBrowser extends React.Component {
  constructor(){
    super();
    
  }

 

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

module.exports = PetBrowser;
