import React, {Component} from 'react';
import axios from 'axios';

class PokemonCards extends Component {
    constructor(props) {
        super(props);

        const upperCaseName = this.uppercase(props.props.name)

        this.state = {
            name: upperCaseName,
            url: props.props.url
        };
        this.fetchData();
    }

    uppercase(name) {
        return name[0].toUpperCase() + name.substring(1, name.length)
    }

    fetchData() {
        axios.get(this.state.url)
        .then(r => {
            const abilityData = r.data.abilities.map((el) => {
                return this.uppercase(el.ability.name) + ', ';
            });
            this.setState({
                sourceImage: r.data.sprites.front_default,
                moveCount: r.data.moves.length,
                abilities: abilityData,
                weight: r.data.weight
            })
        });
    }
  
    render() {
        return (
            <div className='card'>
                <p className='title'>{this.state.name}</p>
                <img className='imageOfPokemon' src={this.state.sourceImage} alt={this.state.name}/>
                <p className='moveCount'>Moves: <span>{this.state.moveCount}</span></p>
                <p className='weight'>Weight: <span>{this.state.weight}</span></p>
                <p>Abilities:</p>
                <p><span>{this.state.abilities}</span></p>
            </div>
        );
    }
}

export default PokemonCards;