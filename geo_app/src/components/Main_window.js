import { Component } from 'react'
import Left_scroll from './Left_scroll'
import Center_maps from './Center_maps'
import Right_panel from './Right_panel'

class Main_window extends Component {
    render() {
        return (
            <div>
                < Left_scroll />
                < Center_maps />
                < Right_panel />
            </div>
        )
    }
}

export default Main_window