  import React,{Component} from 'react';
  import ReactDOM from 'react-dom';
  import SearchBar from './Components/search_bar';
  import YTSearch from 'youtube-api-search';
  import VideoList from './Components/video_list';
  import VideoDetail from './Components/video_detail';
  //import _ from 'loadash-es';

  const API_KEY = 'AIzaSyAZbcHvfb7_T0IZc_822pRwWH1Nk0kVg04';

  //One way to create a component is through functions. Here App is a component and we can create instances of it also.
  //const App = function(){
  class App extends React.Component{
    constructor(props){
      super(props);
      //const videos=this.state.videos;
      this.state = {videos: [], selectedVideo: null};
      this.videoSearch("shahrukh khan");
      this.videoSearch=this.videoSearch.bind(this);
          //console.log(videos);

    }
    videoSearch(searchTerm){
      YTSearch({key : API_KEY, term : searchTerm}, (videos) => {   //here (videos) is a callback function called when search is completed..it takes parameter as videos..jo sara data lega
          this.setState({videos:videos, selectedVideo : videos[0]});
            });

    }

    render(){
      //const throttledSearch = _.debounce((term) =>(this.videoSearch(term)),380);
      return (
        <div>
           <SearchBar onSearchTermChange={this.videoSearch} />

           <VideoDetail video={this.state.selectedVideo} />
           <VideoList videos={this.state.videos}
                      onVideoSelect={(VideoSelected) =>this.setState({
                        selectedVideo:VideoSelected
                      })}

           />
        </div>
      );
    }
  }

/*YTSearch({key:API_KEY,term : 'surfboards'},function(data){
  console.log(data);*/
//});
  //Babel converts ES6 to ES5 and viceversa
  //Now we will tell this to our react-dom.'.' is because container is a class..if it was an id, we would have used '#'.
  //<App /> is an instance of component.Go to index.html and see the class of div as 'container'.
ReactDOM.render(<App />,document.querySelector('.container'));






  /*class Button extends Component{
    constructor(props){
      super(props);
      this.state = {count : 0}
      this.Increment = this.Increment.bind(this); //override my increment function to bind it with the context of Button
    }
    Increment(){
      const count = this.state.count;
      this.setState({count : count+1})
    }
    render(){
      return(
        <div>
          <h1>{this.state.count}</h1>

          <button onClick = {this.Increment} >Click me</button>
      </div>
    );
    }
  }
  ReactDOM.render(<Button />,document.querySelector('.container'));*/
