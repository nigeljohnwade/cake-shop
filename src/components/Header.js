import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
    return (
        <header className="header">
            <h1 className="title">Welcome to Cake Rater</h1>
            <nav>
                <Link to="/">All Cakes</Link>
                <Link to="/new">Create Cake</Link>
            </nav>
        </header>
    );
}
