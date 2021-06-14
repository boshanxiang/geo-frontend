import { Component } from 'react'
import Show_review from './Show_review'
import Update_review from './Update_review'
import New_review from './New_review'

class Right_panel extends Component {
    render() {
        return (
            <div>
                < Show_review />
                < Update_review />
                < New_review />
            </div>
        )
    }
}

export default Right_panel