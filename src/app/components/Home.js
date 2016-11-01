import React from "react";

export default class Home extends React.Component
{
    constructor(props)
    {
        super();
        this.state = {
            age: props.initialAge,
            name: props.initialName
        }

    }

    MakeMeOlderWasPressed() {
        this.setState({
            age: this.incrementAge(this.state.age)
        });
    }

    incrementAge(age)
    {
        return age + 1;
    }

    render()
    {
        return(
            <div>
                <p>In a new component!</p>
                <p>Your name is {this.state.name}, and your age is {this.state.age}</p>
                <p>Passed user name is {this.props.userobject.name}, and their age is {this.props.userobject.age}</p>
                <p>Hobbies include:</p>
                <ul>
                    { this.props.userobject.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>) }
                </ul>
                <br/>
                {this.props.children}
                <hr/>
                <button onClick={() => this.MakeMeOlderWasPressed()} className="btn btn-primary">Make me older</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object
}