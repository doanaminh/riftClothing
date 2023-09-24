export default function () {
  return (
    <>
      <section className="Home">
        <main className="landingImage">
          <div>
            <h2>Rift for Nike Collection</h2>
            <p>
              Discover the Rift for Nike in two Canadian-inspired colorways
              celebrating our new flagship location.
            </p>
            <a href="">READ THE BLOG</a>
          </div>
        </main>

        <section className="emailListing">
          <form action="">
            <span>&mdash; Coming Soon &mdash;</span>
            <h4>Rift for Nike - Toronto</h4>
            <p>
              Sign up to receive updates on upcoming Rift releases and other
              Rift news.
            </p>
            <div>
              <input type="checkbox" id="termsCondition" />
              <label htmlFor="termsCondition">
                I agree to the terms and conditions, privacy policy and cookie
                policy.
              </label>
            </div>
            <input type="email" placeholder="ENTER YOUR EMAIL" />
            <button>SUBMIT</button>
          </form>
        </section>

        <section className="storeTour">
          <video autoPlay loop muted>
            <source
              src="src/assets/pexels-cottonbro-5741120 (720p).mp4"
              type="video/mp4"
            />
          </video>
          <div className="textContent">
            <h3>Rift Toronto Flagship</h3>
            <p>
              Take a first look inside of the Rift Toronto Flagship location.
            </p>
            <a href="">view the blog</a>
          </div>
        </section>

        <section className="storePanel">
          <ul>
            <li>
              <img
                src="src/assets/hamza-nouasria-sEEB0CtXsyI-unsplash.jpg"
                alt=""
              />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}
