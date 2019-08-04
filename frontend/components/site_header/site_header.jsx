import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class SiteHeader extends React.Component {
    constructor(props) {
        super(props);

        
    }

    searchQuestion() {
        
        return (e) => {
            this.props.search(this.props.questions, e.target.value)
        }
    }
    

    render() {

        const navHead = () => {
            return (<div className="siteHeader">
                <div className="headerInner">
                    <div className="headerLogo">
                        <a href="/">
                            <span>Muses</span>
                        </a>
                    </div>
                    <div className="headerContents">
                        <div className="headerNav">
                            <button onClick={this.props.logout}>Log Out</button>
                        </div>
                    </div>
                    <div className="rightContents">
                        <div className="askBar">
                            <div className="lookupBarSelector">
                                <input onChange={this.searchQuestion()} className="selectorInput" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="headerProfile"></div>
                    <div className="askWrapper"></div>
                </div>
    
            </div>)
        }

        return this.props.currentUser === undefined ? <div></div> : navHead()
    }
    
}

export default SiteHeader
/*
const SiteHeader = (props) => {

    const navHead = () => {
        return (<div className="siteHeader">
            <div className="headerInner">
                <div className="headerLogo">
                    <a href="/">
                        <span>Muses</span>
                    </a>
                </div>
                <div className="headerContents">
                    <div className="headerNav">
                        <button onClick={props.logout}>Log Out</button>
                    </div>
                </div>
                <div className="rightContents">
                    <div className="askBar">
                        <div className="lookupBarSelector">
                            <input className="selectorInput" type="text" />
                        </div>
                    </div>
                </div>
                <div className="headerProfile"></div>
                <div className="askWrapper"></div>
            </div>

        </div>)
    }

    return props.currentUser === undefined ? <div></div> : navHead()
}

export default SiteHeader

*/