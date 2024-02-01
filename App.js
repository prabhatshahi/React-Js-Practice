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

    const wowmomo={
        name:"Wow-Momo",
        image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5a148e63e9c54942e37627da1aa156be",
        cusines :["Tibbetian", "American"],
        rating: "4.2",
    };

const RestrauntCart=()=>{
    return(
        <div className="card">
            <img src={wowmomo.image}/>
            <h2>{wowmomo.name}</h2>
            
            <h3>{wowmomo.cusines.join(",")}</h3>

            <h4>{wowmomo.rating} Stars</h4>

        </div>
    )
}

const Body =()=>{
    return(
        <div class="restaurent-list">
            <RestrauntCart />
            <RestrauntCart />
            <RestrauntCart />
            <RestrauntCart />
            <RestrauntCart />
            <RestrauntCart />
            <RestrauntCart />
            <RestrauntCart />
            <RestrauntCart />
            <RestrauntCart />
            <RestrauntCart />
        </div>
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
