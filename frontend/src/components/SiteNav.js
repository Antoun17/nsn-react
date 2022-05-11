import React from "react";
import { Link } from 'react-router-dom'

export default function SiteNav() {
    return (
        <div className="site-nav">
            <Link to="/"><h1>North Shore Now</h1></Link>
        </div>
    )
}