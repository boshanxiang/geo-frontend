import { Component } from 'react'
import Login from './Login'
class Header extends Component {
    render() {
        return (
            <div className="header inline">
                <h1 className="inline">Header</h1>
                <Login />
            </div>
        )
    }
}

export default Header