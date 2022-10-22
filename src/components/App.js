import React from 'react';
import { data as movieList} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies,setShowFavourites } from '../actions';
//  import {connect}  from '../index';
 import {connect}  from 'react-redux';




class App extends React.Component {
  componentDidMount() {
    //make an api call
   //  dispatch ACTION
  //   const { store } = this.props

  // this.props.store.subscribe(() => {
  //     console.log("UPDATING");
  //     this.forceUpdate();
  //   })
    this.props.dispatch(addMovies(movieList));
    //


   // console.log('state', store.getState());


  }
  isMovieFavourite=(movie)=>{
    const {movies}=this.props
    
    const index=movies.favourites.indexOf(movie);
    if(index != -1){
      return true;// movie found in favourites
    }
    return false;
  }

  onChangeTab=(val)=>{
    this.props.dispatch(setShowFavourites(val))
  }
  

  render() {
   // console.log('StoreContext',StoreContext)
   // console.log("render", this.props.store.getState());
    const {movies,search}=this.props // getState return movies:{},search:{}
   // console.log("movies", this.props.store.getState());

    const { list,favourites,showFavourites } =movies;
   const displayMovies=showFavourites ? favourites:list;
  //  return(
  //   <StoreContext.Consumer>
  //   {(store)=>{

  //   }}

  //   </StoreContext.Consumer>
  //  )
    return (
      <div className="App">

        <Navbar 
                //  dispatch={this.props.store.dispatch}
                //  search={search}
        
        />
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
                dispatch={this.props.dispatch}
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


// class AppWrapper extends React.Component{
//   render(){
//     return(
//   <StoreContext.Consumer>
//      {(store)=>{
//         return <App store={store}/>
//      }
//   }
//    </StoreContext.Consumer>
//     )
//   }
// }

function mapStateToProps(state){
  return{
    movies:state.movies,
    search:state.search,
  }
}
const connectedAppComponent=connect(mapStateToProps)(App);
export default connectedAppComponent;
