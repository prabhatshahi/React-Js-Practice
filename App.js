import React from "react";
import ReactDOM from "react-dom";


{/** Header:-Logo,
                     cart
                    Nav Item

         Body:-Search bar
          restraunt-image, name, rating,  cusine list) ,
        Footer-:
                copyright
        */

            }

// header Component
const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://policenewsvarieties.com/wp-content/uploads/2020/07/35F88449-D5B8-4778-BD20-A607751179DE.jpeg"
      />
    </a>
  );
  


const Header = () => {
  return (
    <div className="header">
      {<Title />}
      <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            
            <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body =()=>{
    return(
        <h4>Body</h4>
    )
}
const Footer =()=>{
    return(
        <h4>Footer</h4>
    )
}




const AppLayout = () => {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  };
  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
