import {Component} from 'react'

const baseURL = 'http://localhost:3003'
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            showLogin: false,
            showSignup: false,
            userLoggedIn: false,
            loggedInUser: '',
            username: '',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({[e.currentTarget.id]: e.currentTarget.value})
    }

    logInUser = (e) => {
        e.preventDefault()
    
        fetch(`${baseURL}/auth/signin`, {
            method: "POST",
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                upvotes: [],
                downvotes: [],
                bookmarks: [],
                userReviews: []    
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(resJson => {
            console.log(resJson)
            this.setState({
                userLoggedIn: true,
                showLogin: false,
                showSignup: false,
                loggedInUser: resJson.username,
                username: '',
                password: ''
            })
        }).catch(error => console.log({"Error": error}))
    }

    submitNewUser = (e) => {
        e.preventDefault()

        fetch(`${baseURL}/auth/register`, {
            method: "POST",
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password 
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(resJson => {
            this.setState({
                username: '',
                password: ''
            })
        }).catch(error => console.log({"Error": error}))
    }

    // logout = () => {
    //     fetch(`${baseURL}/sessions`, {
    //         method: "DELETE",
    //         body: JSON.stringify({
    //             username: this.state.username,
    //             password: this.state.password,
    //         }),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(res => res.json())
    //     .then(resJson => {
    //         this.setState({
    //             userLoggedIn: false,
    //             loggedInUser: '',
    //             username: '',
    //             password: ''
    //         })
    //     }).catch(error => console.log({"Error": error}))
    // }

    toggleShowLogin = () => {
        this.setState({
            showLogin: !this.state.showLogin,
            showSignup: false,
            username: '',
            password: ''
        })
    }

    toggleShowSignup = () => {
        this.setState({
            showSignup: !this.state.showSignup,
            showLogin: false,
            username: '',
            password: ''
        })
    }

    render() {
        
        return (
            <div className="rightalign">
                <div className="login inline rightalign">

                    {
                        (this.state.userLoggedIn)

                        ?

                        ''

                        :

                        <div className="login buttons inline" onClick={() => this.toggleShowLogin()}>Log In &nbsp; | &nbsp; </div>

                    }
                    
                    {
                        (this.state.userLoggedIn)
                        
                        ?
                        
                        ''
                        
                        :

                        <div className="login buttons inline" onClick={() => this.toggleShowSignup()}>Sign Up</div>

                    }
                </div>
                &nbsp;
                
                <div>

                    {
                        (this.state.showLogin)
                        
                        ?
                        
                        <div className="inline">
                            <form className="inline" onSubmit={(e) => this.logInUser(e)}>
                                <input type="text" id="username" onChange={(e) => this.handleChange(e)}  value={this.state.username}/>
                                <input type="password" id="password" onChange={(e) => this.handleChange(e)} value={this.state.password}/>
                                <input type="submit" value="Log In"/>
                            </form>
                        </div>
                        
                        :

                        ''

                    }

                    {
                        (this.state.showSignup)
                        
                        ?
                        <div className="inline">
                            <form className="inline" onSubmit={(e) => this.submitNewUser(e)}>
                                <input type="text" id="username" onChange={(e) => this.handleChange(e)} value={this.state.username}/>
                                <input type="password" id="password" onChange={(e) => this.handleChange(e)} value={this.state.password}/>
                                <input type="submit" value="Sign Up"/>
                            </form>
                        </div>
                        
                        :

                        ''

                    }
                </div>

                <div className="rightalign">
                    {
                        (this.state.userLoggedIn)
                        
                        ?
                        <span className="rightalign inline">
                            <p className="inline">Welcome {this.state.loggedInUser} &nbsp; | &nbsp;</p>
                            &nbsp; &nbsp;
                            <div className="inline" /*onClick={() => this.logout()}*/>Log Out</div>
                        </span>
                        
                        :

                        ''

                    }
                </div>
            </div>
        )
    }
}

export default Login;