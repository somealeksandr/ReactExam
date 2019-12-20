import React from 'react';
import "./search.css";

class Search extends React.Component {

    getCity(){
        // console.log("input", this.findCity.value);
        this.props.onFindCity(this.findCity.value)
    }

    
    render() {
        return(
            <div className="box d-flex justify-content-center">
                <div className="container-1">
                    <input type="search" id="search" placeholder="Search..." ref={(input) => {this.findCity=input}} />
                    <button className="icon" onClick={this.getCity.bind(this)}><i className="fa fa-search"></i></button>
                </div>
            </div>
        )
    }
}

export default Search;