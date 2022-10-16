import React from 'react';
import { data } from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies,setShowFavourites } from '../actions';



class App extends React.Component {
  componentDidMount() {
    // make an api call
    //  dispatch ACTION
    const { store } = this.props

    store.subscribe(() => {
      console.log("UPDATING");
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
    //


    console.log('state', store.getState());


  }
  isMovieFavourite=(movie)=>{
    const {movies}=this.props.store.getState();
    
    const index=movies.favourites.indexOf(movie);
    if(index != -1){
      return true;// movie found in favourites
    }
    return false;
  }

  onChangeTab=(val)=>{
    this.props.store.dispatch(setShowFavourites(val))
  }
  

  render() {
    console.log("render", this.props.store.getState());
    const {movies}=this.props.store.getState(); // getState return movies:{},search:{}
    console.log("movies", this.props.store.getState());

    const { list,favourites,showFavourites } =movies;
   const displayMovies=showFavourites ? favourites:list;
   
    return (
      <div className="App">

        <Navbar />
        <div className='main'>
          <div className='tabs'>
            <div className= {`tab ${showFavourites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites?'active-tabs':''}`}onClick={()=>this.onChangeTab(true)}>Favourites</div>


          </div>
          <div className='list' >
            {displayMovies.map((movie, index) => {
              
              console.log('index', index);

              return <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}

              />
            })}
          </div>
          {displayMovies.length==0 ? <div className='no-movies '> No Movies To Display!! </div> :null}

        </div>
      </div>
    );

  }
}
export default App;
