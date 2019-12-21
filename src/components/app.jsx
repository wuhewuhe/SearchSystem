import React from 'react'
import SearchUsers from './searchUser'
import ShowUsers from './showUsers'

class App extends React.Component {
    state = {
        enterName: ''
    }

    setEnterName = (enterName) => {
        this.setState({enterName : enterName})
    }

    render() {
        return (
            <div>
                <SearchUsers setEnterName={this.setEnterName} />
                <ShowUsers enterName={this.state.enterName}/>
            </div>
        )
    }
}
export default App;