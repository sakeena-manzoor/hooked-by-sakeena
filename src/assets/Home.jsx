import '../App.css';

// Products ki list (har product ek object hai, neeche .map() se cards ban jayenge)
const products = [
  { img: "Bird keychain.jpg", title: "Amigurumi Toys", desc: "Cute handmade crochet toys and characters.", price: "Rs. 500" },
  { img: "rose.jpg", title: "Crochet Roses & Bouquets", desc: "Beautiful handmade crochet roses and floral arrangements.", price: "Rs. 1,800" },
  { img: "tops.jpg", title: "Garments", desc: "Tops, hats, cardigans and sweaters, made to order.", price: "Rs. 2,500" },
  { img: "bow keychain.jpg", title: "Bow keychain", desc: "Adorable handmade bow keychains for your keys.", price: "Rs. 500" },
  { img: "hand bag.jpg", title: "Crochet Hand Bags", desc: "Stylish and functional crochet handbags for everyday use.", price: "Rs. 2,200" },
  { img: "sunflower keychain.jpg", title: "Sunflower Keychain", desc: "Adorable handmade sunflower keychains for your keys.", price: "Rs. 600" },
  { img: "cherry keychain.jpg", title: "Cherry Keychain", desc: "Adorable handmade cherry keychains for your keys.", price: "Rs. 500" },
  { img: "lilly.jpg", title: "Crochet Lilly Flower", desc: "Beautiful handmade lily flowers for decoration or as a gift.", price: "Rs. 1,300" },
];

function Home() {
  return (
    <>
      {/* ============ NAVBAR ============ */}
      <nav id="top" className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm site-navbar">
        <div className="container navbar-layout">
          <a className="navbar-brand logo-text" href="#top">Hooked by Sakeena</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav primary-nav gap-lg-4 text-center">
              <li className="nav-item"><a className="nav-link" href="#top">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#site-footer">Contact</a></li>
            </ul>
            <div className="navbar-actions">
              <a className="nav-link shop-link" href="#patterns">Shop</a>
              <a className="nav-icon" href="#patterns" aria-label="Search products" title="Search products">
                <i className="bi bi-search"></i>
              </a>
              <a className="nav-icon" href="#patterns" aria-label="Shopping cart" title="Shopping cart">
                <i className="bi bi-bag"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ============ HERO (CAROUSEL) ============ */}
      <section className="hero-wrapper">
        <div id="heroCarousel" className="carousel slide hero-carousel" data-bs-ride="carousel" data-bs-interval="4000">
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <img src="/pic1.png" className="hero-bg-img" alt="" />
            </div>
            <div className="carousel-item h-100">
              <img src="/pic 2.jpg" className="hero-bg-img" alt="" />
            </div>
            <div className="carousel-item h-100">
              <img src="/pic 3.png" className="hero-bg-img" alt="" />
            </div>
          </div>
        </div>

        {/* Text photos ke upar fixed rehta hai */}
        <div className="hero-content text-center text-white">
          <p className="mb-2 small letter-spacing">HANDMADE WITH LOVE</p>
          <h1 className="fw-bold hero-title">Hooked by Sakeena</h1>
          <a href="#patterns" className="btn btn-brand btn-lg mt-3 px-4">Shop Now</a>
        </div>
      </section>

      {/* ============ SHOP SECTION ============ */}
      <section id="patterns" className="py-5 bg-light-pink">
        <div className="container">
          <h2 className="text-center fw-bold mb-2">Shop Our Crochet Collection</h2>
          <p className="text-center text-muted mb-5">Handmade crochet pieces, made with love and ready to ship</p>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {/* .map() = list ke har product ka ek card banao */}
            {products.map((p) => (
              <div className="col" key={p.title}>
                <div className="pattern-card text-center h-100">
                  <img src={"/" + p.img} className="pattern-img" alt={p.title} />
                  <div className="p-3">
                    <h5 className="fw-bold">{p.title}</h5>
                    <p className="text-muted small mb-1">{p.desc}</p>
                    <p className="fw-bold mb-2">{p.price}</p>
                    <a href="#" className="btn btn-brand w-100">Add to Cart</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">About</h2>
              <p>
                Hooked by Sakeena is more than just a shop for me — it's a small
                dream turned into something real. Every piece is handmade with
                care, one stitch at a time. What started as a hobby slowly grew
                into a little business I'm proud of, and I'm so glad you're here
                to be part of that journey.
              </p>
              <a href="#patterns" className="btn btn-outline-dark mt-3">Read More</a>
            </div>
            <div className="col-lg-6">
              <img src="/about image.jpg" className="about-img" alt="About Hooked by Sakeena" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer id="site-footer" className="footer py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-4">
              <h6>Welcome</h6>
              <p className="small">Welcome to this creative space where you can find handmade crochet pieces made with love, one stitch at a time.</p>
              <div className="mt-3">
                <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-pinterest"></i></a>
              </div>
            </div>

            <div className="col-md-4">
              <h6>Quick Links</h6>
              <a href="#about">About</a>
              <a href="#patterns">Shop</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms ; Conditions</a>
              <a href="#">Shipping ; Returns</a>
              <a href="#">Contact Us</a>
            </div>

            <div className="col-md-4">
              <h6>Newsletter</h6>
              <p className="small">Sign up for exclusive offers, new arrivals and more.</p>
              <input type="email" placeholder="Your email" />
              <a href="#" className="btn btn-brand w-100">Subscribe</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom text-center py-3">
        <p className="mb-0 small">; 2026 Hooked by Sakeena — Handmade with love.</p>
      </div>
    </>
  );
}

export default Home;