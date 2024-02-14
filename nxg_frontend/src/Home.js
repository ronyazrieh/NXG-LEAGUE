import React from "react";
import './Home.css';

function Home() {
    return (
        <div className="home">

            <div className="home-header">
                <div className="hero-section">
                    <div className="triangles">
                        <svg width="3400.5" height="1400" viewBox="0 0 3644.5 1557">
                            <defs>
                                <filter id="Polygon_1" x="1157.5" y="0" width="2487" height="1557" filterUnits="userSpaceOnUse">
                                    <feOffset dx="31" dy="8" input="SourceAlpha" />
                                    <feGaussianBlur stdDeviation="13.5" result="blur" />
                                    <feFlood flood-opacity="0.161" />
                                    <feComposite operator="in" in2="blur" />
                                    <feComposite in="SourceGraphic" />
                                </filter>
                            </defs>
                            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Polygon_1)">
                                <path id="Polygon_1-2" data-name="Polygon 1" d="M1203,0,2406,1476H0Z" transform="translate(1167 32.5)" fill="#313329" />
                            </g>
                            <path id="Polygon_2" data-name="Polygon 2" d="M1203,0,2406,1468H0Z" transform="translate(3597 1508.5) rotate(180)" fill="#24261f" />
                            <path id="Polygon_3" data-name="Polygon 3" d="M1197,0,2394,1468H0Z" transform="translate(0 40.5)" fill="#24261f" />
                        </svg>
                    </div>
                    <div className="overlay">
                        <h1>NexGen League</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam leo nec urna fermentum, ultricies imperdiet urna suscipit.</p>
                        <button>Join Our League</button>
                    </div>
                </div>
                <div id="subbar">
                    <p>subbar</p>
                </div>
            </div>

            <div className="home-info">

            </div>

        </div>

    );
}

export default Home