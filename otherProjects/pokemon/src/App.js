import React, {Component} from 'react';
import logo from "./assets/pokemon-logo.png"
import axios from 'axios';
import './App.css';
import PokemonCards from './PokemonCards';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      maxPages: 55,
      componentData: []
    };

    this.switchPage = this.switchPage.bind(this);
  }

  switchPage(event) {
    var notUnselected = !event.target.classList.contains("unselected");
    var newPage = this.state.page;
    var target = event.target;

    if(notUnselected) {
      (target.id === "prev") ? newPage-- : newPage ++;
      this.fetchData(newPage);
    }
  }

  componentDidMount() {
    this.fetchData(this.state.page);
  }

  fetchData(newPage) {
    if(newPage > this.state.maxPages) {
      newPage = this.state.maxPages;
    } else if (newPage < 0) {
      newPage = 0;
    }

    var offset = newPage * 20;

    axios.get("https://pokeapi.co/api/v2/pokemon/?offset="+ offset + "&limit=20")
    .then(res => this.setState({ 
      componentData: res.data.results,
      maxPages: Math.floor(res.data.count / 20),
      page: newPage
    }));
  }

  render() {
    return (
      <>
        <div id="centered-items">
          <img id="pokemon-logo" src={logo} alt="Pokemon Logo" />
          <p id="title">Pagina: {this.state.page + 1}</p>
          <div>
            <button className={this.state.page === 0 ? 'btn unselected' : 'btn'} onClick={this.switchPage} id="prev">Vorige</button>
            <button className={this.state.page === this.state.maxPages ? 'btn unselected' : 'btn'} onClick={this.switchPage} id="next">Volgende</button>
          </div>
        </div>
        <div id="cards">
          {this.state.componentData.map((el) => <PokemonCards key={el.name} props={el} /> )}
        </div>
      </>
    );
  }
}

export default App;
