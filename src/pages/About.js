import React, { Component } from 'react'; 
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

class About extends Component {
   render() {
       return (
           <div>
               <Navbar />
               <div className="container">
                     <h2>About Page</h2>
                     <p>
                         It is a long established fact that a reader will be distracted by the readable content of a page when looking 
                         at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                          as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
                           packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                            will uncover many web sites still in their infancy. 
                     </p>
               </div>
               <Footer />
           </div>
       );
   }
}


export default About;