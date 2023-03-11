import home from "./image/home.gif"
import guide from "./image/Guide.png"
import home2 from "./image/home.png"
import doc1 from "./image/image1.jpg"
import doc2 from "./image/image2.jpeg"
import doc3 from "./image/image3.webp"
import doc4 from "./image/image4.jpg"  
import doc5 from "./image/image5.jpg"
import doc6 from "./image/image6.jpg"
import img1 from "./image/img1.jpg"
import img2 from "./image/img2.jpg"
import img3 from "./image/img3.jpg"
import blog1 from "./image/blog1.jpg"
import blog2 from "./image/blog2.jpg"
import blog3 from "./image/blog3.jpg"




import { SiYourtraveldottv } from "react-icons/si";


import './App.css';
import Navbutton from "./navbutton/Navbutton"

function App() {
  return (
    <div className="App">
      <header class="header">

<a href="#" class="logo" > <SiYourtraveldottv /> Tourismo</a>

<nav class="navbar">
    <a href="#home">home</a>
    <a href="#services">services</a>
    <a href="#about">about</a>
    <a href="#doctors">guide</a>
    <a href="#book">Contact</a>
    <a href="#review">review</a>
    <a href="#blogs">blogs</a>
    
</nav>

<div id="menu-btn"><Navbutton/></div>

</header>

{/* <!-- header section ends -->

<!-- home section starts  --> */}

<section class="home" id="home">

<div class="image">
    <img src={home2} alt=""/>
</div>

<div class="content">
    <h3>Explore the Beauty 
    With Us</h3>

    <p>Discover your favorite city like a local with our expert guides.
Explore the hidden gems of your favorite city with our knowledgeable guides.
Let us be your personal guide as you travel to your favorite city...</p>
    <a href="#" class="btn"> Explore Now<span class="fas fa-chevron-right"></span> </a>
</div>

</section>

{/* <!-- home section ends -->

<!-- icons section starts  --> */}

<section class="icons-container">

<div class="icons">
<i class="fas fa-user-tie"></i>
    <h3>1000+</h3>
    <p>Guide </p>
</div>

<div class="icons">
    <i class="fas fa-users"></i>
    <h3>1040+</h3>
    <p>satisfied patients</p>
</div>

<div class="icons">
    <i class="fas fa-user-graduate"></i>
    <h3>3-10+</h3>
    <p>Years Experenice</p>
</div>

<div class="icons">
    <i class="fas fa-language "></i>
    <h3>06+</h3>
    <p>known Language</p>
</div>

</section>

{/* <!-- icons section ends -->

<!-- services section starts  --> */}

<section class="services" id="services">

<h1 class="heading"> our <span>services</span> </h1>

<div class="box-container">

   
<div class="box">
   <i class="fas fa-map-marked-alt"></i>
        <h3>Personalized tour planning</h3>
        <p>Helping your customers plan a customized itinerary for their trip based on their preferences and interests.</p>
        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>
    <div class="box">
        <i class="fas fa-route"></i>
        <h3>Guided tours</h3>
        <p>Offering guided tours to popular attractions, historical sites, and cultural experiences in the destination.</p>
        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>

    <div class="box">
        <i class="fas fa-utensils"></i>
        <h3>Local knowledge</h3>
        <p>Providing insider knowledge on the best restaurants, bars, shops, and other local favorites in the destination.</p>
        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>

    <div class="box">
        <i class="fas fa-user-check"></i>
        <h3>24/7 customer support</h3>
        <p>Being available to assist customers with any questions or issues they may have during their trip.</p>
        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>
    <div class="box">
        <i class="fas fa-heartbeat"></i>
        <h3>Safety and security advice</h3>
        <p>Offering advice on staying safe and secure while traveling in the destination, including guidance on local laws and customs.</p>
        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>
    <div class="box">
        <i class="fas fa-gopuram"></i>
        <h3>Cultural experiences</h3>
        <p>Invest in Your Health: Take Advantage of Our Free Checkups and Screenings.</p>
        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>
</div>

</section>

{/* <!-- services section ends -->

<!-- about section starts  --> */}

<section class="about" id="about">

<h1 class="heading"> <span>about</span> us </h1>

<div class="row">

    <div class="image">
        <img src={home} alt=""/>
    </div>

    <div class="content">
        <h3>Expert Guides with Local Perspectives</h3>
        <p>Our online travel guide offers personalized and informative experiences for travelers. Our expert guides are knowledgeable about the destination and can provide unique insights and local perspectives. We work with travelers to create customized itineraries based on their interests and preferences.</p>
        <p>Our online guide service offers a convenient and easy way to plan and book travel arrangements, prioritizing the safety and well-being of travelers. We also promote sustainable travel practices, encouraging travelers to respect the local environment and culture. Our commitment to excellent customer service and support ensures that travelers have a stress-free and enjoyable trip.</p>
        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>

</div>

</section>

{/* <!-- about section ends -->

<!-- doctors section starts  --> */}

<section class="doctors" id="doctors">

<h1 class="heading"> our <span>Guides</span> </h1>

<div class="box-container">

    <div class="box">
        <img src={doc1} alt=""/>
        <h3>Santosh kumar </h3>
        <span>Uttar pradesh</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
        <img src={doc2} alt=""/>
        <h3>Y K Mishra </h3>
        <span>Varanasi</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
        <img src={doc3}alt=""/>
        <h3>Sandeep Chatterjee </h3>
        <span>Kolkata</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
        <img src={doc4} alt=""/>
        <h3>Aravind Subramanian</h3>
        <span>Chennai</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
        <img src={doc5} alt=""/>
        <h3>Mishu Verma</h3>
        <span>Patna</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
        <img src={doc6} alt=""/>
        <h3>Javed Agrewala </h3>
        <span>Agra</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

</div>

</section>

{/* <!-- doctors section ends -->

<!-- booking section starts   --> */}

<section class="book" id="book">

<h1 class="heading"> <span>book</span> now </h1>    

<div class="row">
    <div class="image">
        <img src={guide} alt=""/>
    </div>

    <form action="">
        <h3>book Guide</h3>
        <p>Mentation your details and date you want to book travel guide</p>
        <input type="text" placeholder="your name" class="box"/>
        <input type="text" placeholder="Location" class="box"/>
        <input type="number" placeholder="your number" class="box"/>
        <input type="email" placeholder="your email" class="box"/>
        <input type="date" class="box"/>
        <input type="submit" value="book now" class="btn"/>
    </form>

</div>

</section>

{/* <!-- booking section ends -->

<!-- review section starts  --> */}

<section class="review" id="review">

<h1 class="heading"> client's <span>review</span> </h1>

<div class="box-container">

    <div class="box">
        <img src={img1} alt=""/>
        <h3>Anuraj</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <p class="text">"This traveling guide website has been a lifesaver for my trip planning! The detailed destination guides and budget planning tools have helped me to create the perfect itinerary and save money. I am so impressed with this website's dedication to sustainable travel! The guides on eco-friendly accommodations and reducing plastic waste have inspired me to be a more responsible traveler"</p>
    </div>

    <div class="box">
        <img src={img2} alt=""/>
        <h3>Aditya Raj</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <p class="text">"The travel community on this website is fantastic! I have connected with so many other travelers and received great tips and advice for my upcoming trips."

"The cultural immersion guides on this website are excellent. They have helped me to better understand and appreciate the local customs and traditions of the places I have visited."</p>
    </div>

    <div class="box">
        <img src={img3} alt=""/>
        <h3>Rajdeep</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <p class="text">"I stumbled upon this website while planning my first solo trip, and I am so glad I did! The safety tips and emergency advice gave me the confidence I needed to explore new places on my own."

"I am a photography enthusiast and was blown away by the photography guides on this website. The tips and techniques I learned have greatly improved the quality of my travel photos."</p>
    </div>

</div>

</section>

{/* <!-- review section ends -->

<!-- blogs section starts  --> */}

<section class="blogs" id="blogs">

<h1 class="heading"> our <span>blogs</span> </h1>

<div class="box-container">

    <div class="box">
        <div class="image">
            <img src={blog1} alt=""/>
        </div>
        <div class="content">
            <div class="icon">
                <a href="#"> <i class="fas fa-calendar"></i> 11 march, 2023 </a>
                <a href="#"> <i class="fas fa-user"></i> by admin </a>
            </div>
            <h3>Holy city of Varanasi</h3>
            <p>"Good morning from the holy city of Varanasi, where the Ganges River flows and spirituality fills the air. Join me as we discover the traditions and rituals of this ancient city."</p>
            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={blog2} alt=""/>
        </div>
        <div class="content">
            <div class="icon">
                <a href="#"> <i class="fas fa-calendar"></i> 11 march, 2023 </a>
                <a href="#"> <i class="fas fa-user"></i> by admin </a>
            </div>
            <h3>experience the grandeur of the Taj Mahal!</h3>
            <p>"It's time to experience the grandeur of the Taj Mahal! Join me as we explore this iconic monument of love and its beautiful surroundings in Agra."</p>
            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={blog3} alt=""/>
        </div>
        <div class="content">
            <div class="icon">
                <a href="#"> <i class="fas fa-calendar"></i> 11 march, 2023 </a>
                <a href="#"> <i class="fas fa-user"></i> by admin </a>
            </div>
            <h3>fall in love with the beautiful landscapes of Ladakh</h3>
            <p> "If you're a nature lover, you'll fall in love with the beautiful landscapes of Ladakh. Join me as we explore the stunning Himalayan region and learn about its unique culture."</p>
            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
        </div>
    </div>

</div>

</section>

{/* <!-- blogs section ends -->

<!-- footer section starts  --> */}

<section class="footer">

<div class="box-container">

    <div class="box">
        <h3>quick links</h3>
        <a href="#"> <i class="fas fa-chevron-right"></i> home </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> services </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> about </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> doctors </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> book </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> review </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> blogs </a>
    </div>

    <div class="box">
        <h3>our services</h3>
        <a href="#"> <i class="fas fa-chevron-right"></i> Destination guides </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> Budget planning </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> Travel news and updates </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> Cultural immersion </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> Travel safety </a>
    </div>

    <div class="box">
        <h3>contact info</h3>
        <a href="#"> <i class="fas fa-phone"></i> +6294806963 </a>
        <a href="#"> <i class="fas fa-phone"></i> +111-222-3333 </a>
        <a href="#"> <i class="fas fa-envelope"></i> Tourismo@.com </a>
        <a href="#"> <i class="fas fa-envelope"></i> tourismo@gmail.com </a>
        <a href="#"> <i class="fas fa-map-marker-alt"></i>Bihar,india - 804423 </a>
    </div>

    <div class="box">
        <h3>follow us</h3>
        <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
        <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
        <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
        <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
        <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
        <a href="#"> <i class="fab fa-pinterest"></i> pinterest </a>
    </div>

</div>

<div class="credit"> created by <span><a href ="https://github.com/anurajkumar23">Anuraj kumar, Aditya Raj, Rajdeep Jash</a></span> | ©all rights reserved </div>

</section>
    </div>
  );
}

export default App;
