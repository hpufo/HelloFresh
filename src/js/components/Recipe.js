import React from 'react';
import '../../scss/Recipes.scss';

export default class Recipe extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      stars: 0,
      favorite: false
    }
  }
  onRating(rating){
    this.setState({stars: rating});
  }
  onFavorite = () => {
    this.setState({
      favorite: !this.state.favorite
    });
  }
  rednerRating(){
    let stars = [];
    for(let i=0; i<4; i++){
      let fill = this.state.stars >= i+1 ? "gold": "#b0aba3";
      stars.push(
        <svg width="16px" height="16px" onClick={() => this.onRating(i+1)} key={i}>
          <g fill="none">
            <path fill={fill} d="M8 11.646L11.708 14l-.981-4.44L14 6.576l-4.315-.39L8 2 6.315 6.185 2 6.575l3.273 2.986L4.292 14z" />
          </g>
        </svg>
      );
    }
    return stars;
  }
  render(){
    const {name,imageLink,headline,prepTime,calories} = this.props.recipe;
    const favSrc = this.state.favorite ? "filledStar" : "blankStar";
    
    return (
      <div className="recipe">
        <div className="imageContainer">
          <img className="image" src={imageLink} alt={name} />
          <img className="favorite" src={`images/${favSrc}.png`} onClick={this.onFavorite} alt="favorte recipe" />
        </div>
        <div className="recipeInfo">
          <h4>{name}</h4>
          <p className="headline">{headline}</p>
          <div className="metaInfo">
            <div className="infoContainer">
              <div className="calories">{calories} kcal</div>
              <div className="prepTime">{prepTime.match(/[0-9]*/g).join('')} minutes</div>
            </div>
            <div className="rating">{this.rednerRating()}</div>
          </div>
        </div>
      </div>
    );
  }
}