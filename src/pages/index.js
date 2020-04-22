import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
    <div style={{ color: `purple` }}>
        <Header headerText="Hello Gatsby"></Header>
        <Link to="/contact/">Contafct</Link>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
);
