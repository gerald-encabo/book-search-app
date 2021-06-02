import React from 'react';
import { FaBookReader } from 'react-icons/fa';
import './Navbar.scss';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar-container container">
                <div className="navbar-icon">
                    Book Search App&nbsp;<FaBookReader />
                </div>
                <div className="navbar-form">
                    <form onSubmit={props.searchBook}>
                        <input type="text" onChange={props.handleSearch} placeholder="Enter Title" alt="Book search input" required/>
                        <button type="submit" alt="Submit button">Search</button >
                        <select defaultValue="Sort" onChange={props.handleSort} alt="Sort button for date and title">
                            <option disabled value="Sort">Sort</option>
                            <option value="Newest">Newest</option>
                            <option value="Oldest">Oldest</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Navbar
