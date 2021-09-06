import React, {Fragment} from "react";
import "../styles/App.css";
import Header from "./header";
import Main from "./main";
import Footer from "./footer"

function App() {
    return (
        <Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
        );

}

export default App