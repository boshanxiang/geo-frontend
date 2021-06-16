import { Component } from 'react'
import Login from './Login'
class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="inline">Header</h1>
                &nbsp;&nbsp;
                <Login />
            </div>
        )
    }
}

export default Header