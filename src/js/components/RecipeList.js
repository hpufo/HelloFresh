
import React from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import '../../scss/RecipeList.scss';

//I will leave this to you to replace after it expires.
const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTIxNDExNjcsImp0aSI6IjkwZjJiZDg5LWNmYzYtNGY0Yy1hMTkxLWQ2NTAzZmM0MmIxMiIsImlhdCI6MTUwOTUxMTQyNCwiaXNzIjoiaGVsbG9mcmVzaC1kZXYtdGVzdCJ9.B1E_kiEeDZG87YhDTf9sagAD5TSeJ-3qvSsDRH5bEq8";

export default class RecipeList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message: "",
      recipes: []
    }
  }
  componentWillMount(){
    if(sessionStorage.getItem("auth")){
      const url = "https://gw.hellofresh.com/api/recipes/search?country=us&locale=en-US&limit=9&cuisine=italian&order=-rating";
      axios.get(url, {"headers": {"Authorization": `Bearer ${access_token}`}})
      .then((response) => {
        let array = []; 
        for(const item of response.data.items){
          //Get Calories from the item.nutrition array and index 0 since filter returns an array
          let calObj = item.nutrition.find((obj) => {
            return obj.name==="Calories";
          });
          //Getting the data I want from the response object
          const obj = {
            id: item.id,
            name: item.name,
            imageLink: item.imageLink,
            headline: item.headline,
            prepTime: item.prepTime,
            calories: calObj.amount
          }
          //Pushing the object to the array
          array.push(obj);
        }
        //Updating the state with the new array
        this.setState({recipes: array});
      })
      .catch((error) => { 
        this.setState({message: "Something went wrong with the api call"})
      });
    }
    else{
      this.props.history.push('/login');
    }
  }
  onLogout = () =>{
    sessionStorage.removeItem('auth');
    this.props.history.push('/login');
  }
  renderRecpies(){
    if(this.state.recipes.length > 0){
      return this.state.recipes.map((item,i) => {
        return <Recipe recipe={item} key={i} />;
      });
    }
    else{
      if(this.state.message){
        return <h2 className="message">{this.state.message}</h2>
      }
      else{
        return <h2 className="message">Nothing to display</h2>
      }
    }
  }
  render(){
    return (
      <div className="recipeList">
        <h1 className="header">Top nine Italian recipes</h1>
        <div className="listContainer">
          {this.renderRecpies()}
        </div>
        <input type="button" value="Logout" className="logout" onClick={this.onLogout} />
      </div>
    );
  }
}