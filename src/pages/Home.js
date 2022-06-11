import React,{Component} from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import CTASection from "../components/CTASection";

class Home extends Component{
    componentDidMount(){
      if(window.localStorage && localStorage.user_addr){
        window.location.href = "/dashboard";
      }
    }

    render(){
        return (
                <React.Fragment>
                  <Hero/>
                  <Featured/>
                </React.Fragment>);    
    }
}

export default Home;