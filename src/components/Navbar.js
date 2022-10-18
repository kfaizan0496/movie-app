import React from 'react';
import {data} from '../data';
import {addMovieToList,handleMovieSearch} from '../actions';





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
            searchText:e.target.val
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

export default Navbar;
