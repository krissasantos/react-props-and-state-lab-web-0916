
const React = require('react');
// const allPets = require('../data/pets')
const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets:[],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };


  this.onAdoptPet = this.onAdoptPet.bind(this)
  this.onChangeType = this.onChangeType.bind(this)
  this.onFindPetsClick = this.onFindPetsClick.bind(this)

  
  }

onFindPetsClick(){
    // this.setState({})

    let url = '/api/pets';

    if (this.state.filters.type !== 'all'){
     url += `?type=${this.state.filters.type}` //why backticks???
    }
        
    // else{
    //  url = `/api/pets`
    // }

    // fetch(url)

    // return fetch(url)
    //   .then((response) => response.json())
    //   .then((response) => {
    //   // return responseJson.movies;
    //    this.setState({pets: response})
    //   })
    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
     
  }



  onChangeType(value){
    // this.setState({filters: {type: value}})
     this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: value,
      })
    });
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
              <Filters filters={this.state.filters} 
              onChangeType={this.onChangeType} 
              onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



module.exports = App;
