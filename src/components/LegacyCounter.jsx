import { Component } from "react";

class LegacyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0};
    }

    render() {
        return (
            <div style={{ border: '2px dashed orange', padding: '15px', margin: '10px'}}>
                <h3>This is a Class component</h3>
                <p>Count: {this.state.count}</p>
                <button style={{ background: '#121212', color: '#fff', padding: '10px'}}
                    onClick={() => this.setState({ count: this.state.count + 1})}>
                    Increment class count
                </button>
            </div>
        )
    }
}

export default LegacyCounter