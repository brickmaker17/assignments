import React, { Component } from 'react';
import BlogList from "./BlogList";
import Footer from "./Footer";
import Header from "./Header";

function App(props) {
    return (
        <div>
            <Header></Header>
            <BlogList></BlogList>
            <Footer></Footer>
        </div>
    )
}
export default App;
