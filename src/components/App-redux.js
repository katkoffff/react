import React, {Fragment} from "react";
import "../styles/App.css";
import Header from "./header";
import Main from "./main";
import { connect } from "react-redux";

function Appredux(props) {
    console.log(props)
    return (
        <Fragment>
            <Header />
            <Main />
            <input type="text"/>
            <button>Click me</button>
            <ul>
                {props.testStore.map(item =>
                    <li key={item}>
                        {item}
                    </li>
                )}
            </ul>
        </Fragment>
        );
}

export default connect(
    //mapStateToProps
    state => ({
        testStore: state
    }),
    //mapDispatchToProps
    dispatch => ({})
)(Appredux)