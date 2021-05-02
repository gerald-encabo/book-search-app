import React from 'react';

const Search = (props) =>{   
    return (
        <div className="Search">
            <form onSubmit={props.searchBook}>
               <div className="InputGroup">
               <input type="text" onChange={props.handleSearch} placeholder="Enter Title" required/>
               <button type="submit">Search</button>
               <select defaultValue="Sort" onChange={props.handleSort}>
                   <option disabled value="Sort">Sort</option>
                   <option value="Newest">Newest</option>
                   <option value="Oldest">Oldest</option>
                   <option value="A-Z">A-Z</option>
                   <option value="Z-A">Z-A</option>
               </select>
               </div>
            </form>
        </div>
    )
}

export default Search
