import React from 'react'
import PropTypes from 'prop-types';
import axios from 'axios'

class ShowUsers extends React.Component {
    static propTypes = {
        enterName: PropTypes.string.isRequired
    }

    state = {
        initName: true,
        loading: false,
        users: null,
        error: null
    }

    UNSAFE_componentWillReceiveProps = (newProps) => {
        console.log(newProps);
        const enterName = newProps.enterName;
        //console.log(String(enterName))
        this.setState({
            initName: false,
            loading: true
        })
        const url = 'https://api.github.com/search/users?q=' + String(enterName);
        console.log(url)
        axios.get(url).then(response => {
            const result = response.data;
            console.log(result);
            const users = result.items.map(item => {
                return { name: item.login, url: item.html_url, avatar: item.avatar_url }
            })
            this.setState({ loading: false, users: users });
        }).catch(error => {
            this.setState({ loading: false, error: error.messgae });
        })
    }

    render() {
        const { initName, loading, users, error } = this.state;
        console.log({users});
        if (initName) {
            return <h3>please input user name</h3>
        }
        else if (loading) {
            return <h3>loading</h3>
        }
        else if (error) {
            return <h3>{error}</h3>
        } else {
            return (
                <div className="row">{
                    users.map((user,index) => (
                        <div className="column" key={index}>
                            <div className="card">
                                <a href={user.url}>
                                    <img src={user.avatar} alt="react" />
                                </a>
                                <p>{user.name}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            )
        }
    }
}

export default ShowUsers;