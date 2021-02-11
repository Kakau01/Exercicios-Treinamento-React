import './styles.css';

import React, { Component } from 'react';

interface Props {
    initialDate: any
}

interface State {
    date: any
}



class Clock extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            date: this.props.initialDate
        };

        this.mudartempo = this.mudartempo.bind(this);

    }

    mudartempo(){
        this.setState({
            date: new Date().toLocaleTimeString()
        })
    }

    componentDidMount() {
        setInterval(this.mudartempo,1000)
    }

    render() {
        return (
            <div className="app-clock">
                <h1>Hello Claudia!</h1>
                <h2>It is: {this.state.date}</h2>
            </div>
        )
    }
}

export default Clock;
