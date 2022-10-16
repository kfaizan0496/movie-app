import React from 'react';
import { addFavourites ,removeFromFavourites} from '../actions';



class MovieCard extends React.Component {

    handleClickFavourite = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavourites(movie));
    }
    handleClickUnFavourite = () => {
       const {movie}=this.props;
       this.props.dispatch(removeFromFavourites(movie));

    }

    render() {
        const { movie, isFavourite } = this.props;
        return (

            <div className='movie-card' >
                <div className='left' >
                    <img alt='movie poster' src={movie.Poster} />

                </div>
                {/* <div className='left' ></div> */}
                <div className='right' >
                    <div className='title' >{movie.Title}</div>
                    <div className='plot' >{movie.Plot}</div>
                    <div className='footer'>
                        <div className='rating' >{movie.imdbRating}</div>
                        {
                            isFavourite 

                              ?  <button onClick={this.handleClickUnFavourite} className='unfavourite-btn '>UnFavourite</button>
                              : <button onClick={this.handleClickFavourite} className='favourite-btn '>Favourite</button>
                             
                       
                       }


                    </div>


                </div>


            </div>





        )







    }





}

export default MovieCard;
