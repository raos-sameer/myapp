import React from 'react';
import { connect } from 'react-redux';

class Todo extends React.Component {
    render() {
        const {
            name,
        } = this.props;
        console.log(this.props);
        return (
            <div>{name} is here<br /> 
            
                <button onClick={() => {this.props.changeName("Suresh")}}>Change Name</button>
            
            </div>
        
        );
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeName:(name) =>{ dispatch({type:'CHANGE_NAME',payload:name})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);