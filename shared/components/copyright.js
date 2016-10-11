import React from 'react';
import {Link} from 'react-router';

const Copyright = () => (
  <div className="copyright">
    &copy; Copyright 2016 <Link to="/about">Leonardo Quixadá</Link>. All rights reserved.
    <a href="https://travis-ci.org/lquixada/boggle">
      <img src="https://travis-ci.org/lquixada/boggle.svg?branch=master" className="build-status" />
    </a>
  </div>
);

export default Copyright;
