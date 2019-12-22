import React from 'react';
import "./search.css";

class Search extends React.Component {

    state = {
        city: ""
    };

    getCity = (e) => {
        this.setState({
            city: e.target.value
        })
    };
    
    onGetCity = () => {
        this.props.onFindCity(this.state.city);
    };

    
    render() {
        // console.log(this.props)
        return(
            <div className="box d-flex justify-content-center">
                <div className="container-1">
                    <input type="search" id="search" placeholder="Search..." onChange={this.getCity} />
                    <button type="button" className="icon" onClick={this.onGetCity}><i className="fa fa-search"></i></button>
                </div>
            </div>
        )
    }
}

export default Search;