import React from 'react';
import "./search.css";

class Search extends React.Component {

    
    render() {
        return(
            <div className="box d-flex justify-content-center">
                <div className="container-1">
                    <input type="search" id="search" placeholder="Search..." />
                    <button className="icon"><i className="fa fa-search"></i></button>
                </div>
            </div>
        )
    }
}

export default Search;