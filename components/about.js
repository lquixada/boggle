import React from 'react';
import { Link } from 'react-router';


class About extends React.Component {
  render() {
    return (
      <main>
        <header>
          <div className="container">
            <h1><Link to="/">BOGGLE</Link></h1>
          </div>
        </header>

        <section>
          <div className="container">
            <div className="about">
              <span className="box">
                <img src="https://s.gravatar.com/avatar/a0ac79788f87ca12cda519b3a1bb2a7c?s=100" />
              </span>

              <h2>About me</h2>

              <p>Loving Software, Delivering Product.</p>

              <p>I believe technology is a means to an end. Every tool, every language or technique we learn throughout
              our career serves to higher purposes: improve the company culture, enable clients' ambitions and push
              mankind forward. Everything a software engineer touch has an impact in his user's lives, including his
              peers and superiors. That's why software excellence is so crucial.</p>

              <p>Solving complex problems isn't just about the right tools or the right algorithms. It is about hearing
              users, providing new perspectives and delivering real value to the ecosystem in sustainable and scalable
              way. The only way to achieve that is making things different.</p>

              <p>Innovation is key. To create new ideas or to make old things better is to reassess the pre-established
              paradigms. I believe my multidisciplinary education and thirteen years of experience in the Internet
              industry have put me in a position able to provide that. Having a broad base of technical skills can bring
              new perspectives to the table and unlock distinct ways of thinking.</p>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="copyright">
              &copy; Copyright 2016 <Link to="/about">Leonardo Quixadá</Link>. All rights reserved.
              <a href="https://travis-ci.org/lquixada/boggle">
                <img src="https://travis-ci.org/lquixada/boggle.svg?branch=master" className="build-status" />
              </a>
            </div>

            <div className="social">
              <ul>
                <li><a href="https://github.com/lquixada/"><img src="images/logo-github.png" /></a></li>
                <li><a href="https://facebook.com/lquixada/"><img src="images/logo-facebook.png" /></a></li>
                <li><a href="https://twitter.com/lquixada/"><img src="images/logo-twitter.png" /></a></li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    );
  }
}

export default About;
