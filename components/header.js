import Link from 'next/link';
import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.collapseNav = this.toggleNav.bind(this);
        this.state =  {
            isCollapsed: true
        };
    }

    toggleNav() {
        console.log("clicked");
        this.setState({
            isCollapsed: !this.state.isCollapsed,
        });
    }

    render() {
        const classCollapseNavbar = 'hamburger-menu--' + (this.state.isCollapsed ? 'collapsed' : '');
        const classOpenNavbar = 'row list-state' + (this.state.isCollapsed ? '--closed' : '--open');
        return (
            <header>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-padding-right--none">
                            <div class="hamburger-menu-button" onClick={this.collapseNav}>

                                <svg width="65" height="64" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <title>Hamburger-Menu</title>
                                        <rect stroke="#e6b31e" rx="5" id="svg_3" height="10" width="65" y="0.000000" x="0" stroke-width="0" fill="#e6b31e"/>
                                        <rect stroke="#e6b31e" rx="5" id="svg_4" height="10" width="44" y="22" x="21" stroke-width="0" fill="#e6b31e"/>
                                        <rect stroke="#e6b31e" rx="5" id="svg_5" height="10" width="31" y="44" x="34" stroke-width="0" fill="#e6b31e"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={classOpenNavbar}>
                        <div class="col-12 d-flex justify-content-center headline-margin-top--double">
                            <Link
                                href="/"><a className="link button">Home</a>
                            </Link>
                        </div>
                        <div class="col-12 d-flex justify-content-center headline-margin-top--double">
                            <Link
                                href="/projects/"><a className="link button">Projects</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header