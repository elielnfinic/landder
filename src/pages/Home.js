import React,{Component} from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import CTASection from "../components/CTASection";

class Home extends Component{
    render(){
        return (
                <React.Fragment>
                  <Hero/>
                  <Featured/>
                  <CTASection/>
                </React.Fragment>);    
    }
}

export default Home;