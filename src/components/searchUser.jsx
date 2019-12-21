import React from 'react'
import PropTypes from 'prop-types'; 

class SearchUsers extends React.Component {
    static propTypes = {
        setEnterName: PropTypes.func.isRequired
    }

    handleClick = () => {
        const name = this.input.value.trim();
        //console.log(name);
        if(name){
            this.props.setEnterName(name);
        }
    }

    render() {
        return (
            <div>
                <h1 className='title'>search</h1>
                input : <input type="text" placeholder='please input user' ref={(input) => this.input = input}/>
                <p></p>
                <button onClick={this.handleClick} >submit</button>
            </div>
        )
    }
}

export default SearchUsers;