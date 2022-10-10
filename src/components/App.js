import React from 'react';
 import {data} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies} from '../actions';



class  App extends React.Component{
  componentDidMount(){
    // make an api call
    //  dispatch ACTION
  const {store}=this.props

  store.subscribe(()=>{
    console.log("UPDATING");
    this.forceUpdate();
  })
store.dispatch(addMovies(data));
//


console.log('state',store.getState());


  }

 render(){
  console.log("render",this.props.store.getState());
    const  {list}  = this.props.store.getState();// getState return obj {list:[],favourites:[]}
    return (
      <div className="App">

        <Navbar />
        <div className='main'>
          <div className='tabs'>
            <div className='tab'>Movies</div>
            <div className='tab'>Favourites</div>


          </div>
          <div className='list' >
            {list.map((movie, index) => {

              return <MovieCard movie={movie} key={`movies-${index}`} />
            })}
          </div>

        </div>
      </div>
    );
  
}
}
export default App;
