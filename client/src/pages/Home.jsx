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
          <form action="" id="newsLetter">
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
            <button htmlFor="newsLetter">SUBMIT</button>
          </form>
        </section>

        <section className="storeTour">
          <video autoPlay loop muted>
            <source src="client/src/assets/video.mp4" type="video/mp4" />
          </video>
          <div className="textContent">
            <h3>Rift Toronto Flagship</h3>
            <p>
              Take a first look inside of the Rift Toronto Flagship location.
            </p>
            <a href="">VIEW THE BLOG</a>
          </div>
        </section>

        <section className="storePanel">
          <ul>
            <li>
              <img src="client/src/assets/demo1.jpg" alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
            <li>
              <img src="client/src/assets/demo2.jpg" alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
            <li>
              <img src="client/src/assets/demo3.jpg" alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
            <li>
              <img src="client/src/assets/demo4.jpg" alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
            <li>
              <img src="client/src/assets/demo5.jpg" alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
            <li>
              <img src="client/src/assets/demo6.jpg" alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
            <li>
              <img src="client/src/assets/demo7.jpg" alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
            <li>
              <img src="client/src/assets/demo8.jpg" alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}
