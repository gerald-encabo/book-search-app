import React from 'react';

const Search = (props) =>{   
    return (
        <div className="Search">
            <form onSubmit={props.searchBook}>
               <div className="InputGroup">
               <input type="text" onChange={props.handleSearch} placeholder="Enter Title" alt="Book search input" required/>
               <button type="submit" alt="Submit button">Search</button >
               <select defaultValue="Sort" onChange={props.handleSort} alt="Sort button for date and title">
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
