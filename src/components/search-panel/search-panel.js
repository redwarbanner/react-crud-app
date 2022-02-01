import { Component } from 'react/cjs/react.production.min';
import './search-panel.css'

class SearhPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render(){
        return (
            <input
                 type="text"
                 className="form-control search-input"
                 placeholder="Find an employee" 
                 value = {this.state.term}
                 onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearhPanel;