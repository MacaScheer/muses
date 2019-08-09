import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect, withRouter } from "react-router";

class SiteHeader extends React.Component {
    constructor(props) {
        super(props);
        
        
    }

    searchQuestion() {
       
        return (e) => {

            if (this.props.history.location.pathname !== '/'){
                this.props.history.push('/')
                // this.setState({})
            }
            // this.props.search(this.props.questions, e.target.value)
            let params;

            if (e.target.value.includes(':')){
                let wildCard = e.target.value.split(':')
                    params = {
                        field: wildCard[0],
                        value: wildCard[1]
                    }

            } else {
                params = {
                    field: 'question',
                    value: e.target.value
                }
            }
            this.props.fetchQuestions(params)
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
                            <button className="submitButton" style={{marginTop: '10px'}} onClick={this.props.logout}>Log Out</button>
                        </div>
                    </div>
                    <div className="rightContents">
                        <div className="askBar">
                            <div className="lookupBarSelector">
                                <input id="headerSearchBar" onChange={this.searchQuestion()} placeholder="Search Muses" className="selectorInput" type="text" />
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

export default withRouter(SiteHeader)
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