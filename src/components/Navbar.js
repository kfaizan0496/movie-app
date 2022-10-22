import React from 'react';
// import {data} from '../data';
import {addMovieToList,handleMovieSearch} from '../actions';
// import {connect} from '../index'
import {connect}  from 'react-redux';






class Navbar extends React.Component {
    constructor(props){
        super(props)
       this.state={
        searchText:''
       };

    }
      handleAddToMovies=(movie)=>{
        this.props.dispatch(addMovieToList(movie));
       

    }
    handleSearch=()=>{
        const{searchText}=this.state;
        // how to fetch an api but we are not fetching here bcz component is basically used for UI and logic is 
        // is separated from these files
        this.props.dispatch(handleMovieSearch(searchText))

    };
    handleChange=(e)=>{
        this.setState(
            {
            searchText:e.target.value // realtime update of input text
        }
            )
        

    }



    render() {
        // const{showSearchResults}=this.state;
      
        const {result,showSearchResults}=this.props.search;
        return (


            <div className='nav' >
                <div className='search-container' >
                <input onChange={this.handleChange}/>
                <button id='search-btn' onClick={this.handleSearch}> Search </button>
                 {
                    showSearchResults && 
                    <div className='search-results'> 
                     <div className='search-result'> 
                        <img src={result.Poster} alt="search-pic"/>
                        <div className='movie-info'> 
                        <span>{result.Title}</span>
                        <button  onClick={()=>this.handleAddToMovies(result)}> Add to Movies </button>

                        
                        </div>
                     </div>


                    </div>
                 }
                </div>





            </div>





        )







    }





}


// class NavbarWrapper extends React.Component{
//     render(){
//       return(
//     <StoreContext.Consumer>
//        {(store)=>{
//           return <Navbar dispatch={store.dispatch} search={this.props.search}/>
//        }
//     }
//      </StoreContext.Consumer>
//       )
//     }
//   }
// function mapStateToProps(state){
//     return{
//       movies:state.movies,
//       search:state.search,
//     }
//   }
//   const connectedNavbarComponent=connect(mapStateToProps)(Navbar);
//   export default connectedNavbarComponent;

      //   OR OR OR

  function mapStateToProps({search}){  //destructure search in curly braces
    return{
     search  // use Shortend property
    }
  }
  export default connect(mapStateToProps)(Navbar);