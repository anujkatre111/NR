import React from 'react';

class UseClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count1 : 1,
            count2 : 0
        }
    }
    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.state.count1}</h1>
                <button onClick={() => {
                    this.setState({
                        count1: this.state.count1 + 1
                    })
                }}>increase</button>
                <button onClick={() => {
                    this.setState({
                        count1: this.state.count1 - 1
                    })
                }}>decrease</button>
            </div>
        )
    }
}

export default UseClass;