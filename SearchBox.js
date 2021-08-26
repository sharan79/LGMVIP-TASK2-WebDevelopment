import React from 'react';
import '../containers/styles.css';


const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2'>
                <input 
                className='pa3 ba b--white bg-white  b--dark-pink
                '
                 type="search" 
                 placeholder='Search By Name' 
                 onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;