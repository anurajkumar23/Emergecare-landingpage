import home from "./image/home-img.svg"
import book from "./image/book-img.svg"
import about from "./image/about-img.svg"
// import image2 from "./image/pic-2.png"
import img2 from "./image/img2.jpg"
import img1 from "./image/img1.jpg"
import img3 from "./image/img3.jpg"
// import image1 from "./image/pic-1.png"
// import image3 from "./image/pic-3.png"
import blog1 from "./image/blog-1.jpg"
import blog2 from "./image/blog-2.jpg"
import blog3 from "./image/blog-3.jpg"
import doc7 from "./image/doc-7.jpg"
import doc8 from "./image/doc-8.jpg"
import doc9 from "./image/doc-9.jpg"
import doc1 from "./image/doc-1.jpg"
import doc4 from "./image/doc-4.jpg"
import doc5 from "./image/doc-5.jpg"


import './App.css';
import Navbutton from "./navbutton/Navbutton"

function App() {
  return (
    <div className="App">
      <header class="header">

<a href="#" class="logo"> <i class="fas fa-heartbeat"></i> EmergeCare</a>

<nav class="navbar">
    <a href="#home">home</a>
    <a href="#services">services</a>
    <a href="#about">about</a>
    <a href="#doctors">doctors</a>
    <a href="#book">book</a>
    <a href="#review">review</a>
    <a href="#blogs">blogs</a>
    
</nav>

<div id="menu-btn"><Navbutton/></div>

</header>

{/* <!-- header section ends -->

<!-- home section starts  --> */}

<section class="home" id="home">

<div class="image">
    <img src={home} alt=""/>
</div>

<div class="content">
    <h3>Emergecare,
    Technology Tackling</h3>
    <h3>Healthcare Criticalities</h3>
    <p>Access to Good Healthcare Shouldn't depend where you lived.
    Equal Access to Exceptional Healthcare: A Right, Not a Privilege.</p>
    <a href="#" class="btn"> Register now<span class="fas fa-chevron-right"></span> </a>
</div>

</section>

{/* <!-- home section ends -->

<!-- icons section starts  --> */}

<section class="icons-container">

<div class="icons">
<i class="fas fa-user-md"></i>
    <h3>140+</h3>
    <p>doctors at work</p>
</div>

<div class="icons">
    <i class="fas fa-users"></i>
    <h3>1040+</h3>
    <p>satisfied patients</p>
</div>

<div class="icons">
    <i class="fas fa-procedures"></i>
    <h3>500+</h3>
    <p>bed facility</p>
</div>

<div class="icons">
    <i class="fas fa-hospital"></i>
    <h3>80+</h3>
    <p>available hospitals</p>
</div>

</section>

{/* <!-- icons section ends -->

<!-- services section starts  --> */}

<section class="services" id="services">

<h1 class="heading"> our <span>services</span> </h1>

<div class="box-container">

   
<div class="box">
        <i class="fas fa-procedures"></i>
        <h3>bed facility</h3>
        <p>Comfort and Care in Every Room: Experience Hospitality at its Best.</p>
        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>
    <div class="box">
        <i class="fas fa-ambulance"></i>
        <h3>24/7 ambulance</h3>
        <p>Rapid Response, Anytime, Anywhere: Trust Our 24/7 Ambulance Services.</p>
        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>

    <div class="box">
        <i class="fas fa-user-md"></i>
        <h3>expert doctors</h3>
        <p>Expert Care, Exceptional Outcomes: Meet Our Team of World-Class Doctors.</p>
        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>

    <div class="box">
        <i class="fas fa-pills"></i>
        <h3>medicines</h3>
        <p>Your Health, Our Priority: Access the Latest Medicines and Treatments.</p>
        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>
    <div class="box">
        <i class="fas fa-heartbeat"></i>
        <h3>total care</h3>
        <p>Comprehensive Care for a Better Tomorrow: Experience Total Wellness with Us.</p>
        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>
    <div class="box">
        <i class="fas fa-notes-medical"></i>
        <h3>free checkups</h3>
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
        <img src={about} alt=""/>
    </div>

    <div class="content">
        <h3>we take care of your healthy life</h3>
        <p>"Welcome to EmergeCare, where your health and well-being are our top priority. Our mission is to provide accessible, high-quality healthcare services to all, regardless of their location. With a team of expert doctors, state-of-the-art facilities, and a commitment to patient-centered care, we strive to make a positive impact on the health and lives of our patients every day.</p>
        <p>Whether you're in need of a routine checkup, complex medical treatment, or 24/7 ambulance services, we're here to support you. At EmergeCare, your health is in good hands. Contact us today to learn more.</p>
        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
    </div>

</div>

</section>

{/* <!-- about section ends -->

<!-- doctors section starts  --> */}

<section class="doctors" id="doctors">

<h1 class="heading"> our <span>doctors</span> </h1>

<div class="box-container">

    <div class="box">
        <img src={doc8} alt=""/>
        <h3>Dr. Prakruthi Harihar </h3>
        <span>Dermatologist,Cosmetologist</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
        <img src={doc7} alt=""/>
        <h3>Dr Y K Mishra </h3>
        <span>Cardiac Surgeon</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
        <img src={doc9}alt=""/>
        <h3>Dr. Sandeep Vaishya </h3>
        <span>Neurosurgeon</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
        <img src={doc4} alt=""/>
        <h3>Dr Mark.</h3>
        <span>cardiologists</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
        <img src={doc1} alt=""/>
        <h3>Dr Arthur Reese</h3>
        <span>Psychiatry</span>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
    </div>

    <div class="box">
        <img src={doc5} alt=""/>
        <h3>Dr Corrie </h3>
        <span>Pediatric Anesthesiology</span>
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
        <img src={book} alt=""/>
    </div>

    <form action="">
        <h3>book appointment</h3>
        <input type="text" placeholder="your name" class="box"/>
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
        <p class="text">Had a fantastic experience at EmergeCare. The staff was friendly, facilities were clean and modern, and the doctor was knowledgeable. They took the time to listen to my concerns and provide comprehensive care. Highly recommend for anyone seeking quality healthcare services.</p>
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
        <p class="text">I was in need of emergency medical care and EmergeCare was there for me every step of the way. Their 24/7 ambulance services were prompt and the staff was incredibly professional and compassionate. The facilities were well-equipped and the doctor was knowledgeable, providing expert care to help me recover. I am so grateful for the high-quality care I received at EmergeCare. I highly recommend them to anyone in need of medical attention.</p>
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
        <p class="text">The care I received at EmergeCare was truly exceptional. The staff made me feel comfortable and valued, and the facilities were top-notch. My doctor was thorough, taking the time to explain my condition and options for treatment. With access to the latest medicines and treatments, I was able to receive the care I needed to get back to good health. I am so grateful for the comprehensive care I received at EmergeCare and would highly recommend them to anyone in need of quality healthcare services.</p>
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
                <a href="#"> <i class="fas fa-calendar"></i> 4 feb, 2023 </a>
                <a href="#"> <i class="fas fa-user"></i> by admin </a>
            </div>
            <h3>Don't neglect your health</h3>
            <p>schedule regular check-ups and screenings to stay on top of any potential health issues.</p>
            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={blog2} alt=""/>
        </div>
        <div class="content">
            <div class="icon">
                <a href="#"> <i class="fas fa-calendar"></i> 4 feb, 2023 </a>
                <a href="#"> <i class="fas fa-user"></i> by admin </a>
            </div>
            <h3>Find the right doctor for you at EmergeCare.</h3>
            <p>Our team of expert doctors is here to provide comprehensive care and support.</p>
            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={blog3} alt=""/>
        </div>
        <div class="content">
            <div class="icon">
                <a href="#"> <i class="fas fa-calendar"></i> 4 feb, 2023 </a>
                <a href="#"> <i class="fas fa-user"></i> by admin </a>
            </div>
            <h3>The Importance of Regular Check-Ups</h3>
            <p> Taking Control of Your Health.</p>
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
        <a href="#"> <i class="fas fa-chevron-right"></i> dental care </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> message therapy </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> cardioloty </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> diagnosis </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> ambulance service </a>
    </div>

    <div class="box">
        <h3>contact info</h3>
        <a href="#"> <i class="fas fa-phone"></i> +6294806963 </a>
        <a href="#"> <i class="fas fa-phone"></i> +111-222-3333 </a>
        <a href="#"> <i class="fas fa-envelope"></i> emergecare@.com </a>
        <a href="#"> <i class="fas fa-envelope"></i> helpemergecare@gmail.com </a>
        <a href="#"> <i class="fas fa-map-marker-alt"></i> bihar, india - 804423 </a>
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

<div class="credit"> created by <span><a href ="https://github.com/anurajkumar23">Anuraj kumar</a></span> | ©all rights reserved </div>

</section>
    </div>
  );
}

export default App;
