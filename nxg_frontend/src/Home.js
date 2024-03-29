import React from "react";
import SocialMedia from './SocialMedia';
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

                <div className="subbar">

                    <div className="subbar-left">
                        <h1>Divisions</h1>
                
                    </div>

                    <div className="subbar-right">
                        <button>DIV A</button>
                        <button>DIV B</button>
                        <button>COMING SOON</button>
                    </div>
                </div>
            </div>

            <div className="home-info">
                <div className="row">

                    <div className="info block-1"><div class="square"></div></div>

                    <div className="info block-2">
                        <h2>About the League</h2> <br />
                        <h1>Explore Our Mission</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim, eros nec elementum facilisis, nibh purus ornare libero, nec bibendum lorem enim eget velit. Sed a mi justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam a purus non purus porttitor rutrum. Etiam in suscipit erat. </p>
                        <ul>
                            <p>- Suspendisse egestas arcu non ultricies dictum</p>
                            <p>- Phasellus pharetra diam accumsan erat  </p>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam a purus non purus porttitor rutrum. Etiam in suscipit erat. Suspendisse egestas arcu non ultricies dictum.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="info block-3">
                    <h2>News and Announcements</h2> <br />
                        <h1>Get the Latest Scoop</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim, eros nec elementum facilisis, nibh purus ornare libero, nec bibendum lorem enim eget velit. Sed a mi justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam a purus non purus porttitor rutrum. Etiam in suscipit erat. </p>
                        <ul>
                            <p>- Suspendisse egestas arcu non ultricies dictum</p>
                            <p>- Phasellus pharetra diam accumsan erat  </p>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam a purus non purus porttitor rutrum. Etiam in suscipit erat. Suspendisse egestas arcu non ultricies dictum.</p>
                    </div>
                        <div className="info block-4"><div class="square"></div></div>
                </div>
            </div>
            <div className="gap"></div>
            <div className="social-media-bar">
                <SocialMedia platform="Tiktok" />
                <SocialMedia platform="Twitter" />
                <SocialMedia platform="Instagram" />
            </div>


        </div>

    );
}

export default Home