import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
/**
 * @class Landing Page 
 * Landing Page of the application
*/

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    }
    render() {
        return(
            <div>
                Shubham
            </div>
        );
    }
}
/**
 * Maps the state of the component to the state of the redux store
 * @param {object} state. State of the application
 */

const mapState = (state) => { 
  console.log(state);
    return {
        messages: state.messages,
    }
};


export default connect(mapState)(Home);
