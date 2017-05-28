import React,{Component} from 'react';
/*const SearchBar = function(){
  return <input />
}*/
class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state={term:""}
  }
//install the package, npm install --save youtube-api-search.
  onInputChange(event){
    this.setState({
      term: event.target.value
    });
    this.props.onSearchTermChange(this.state);
  }

  render(){
    return (
      <div className="search-bar">
      <input
        value = {this.state.term}
        onChange = {this.onInputChange}
      />
      </div>
    );
  }
}
export default SearchBar;
