import React from 'react';
import { AboutStyle } from './About.style';

const About = () => (
  <AboutStyle>
    <h2>Ideea behind this app</h2>
    <ul>
      <li>The reason for this app is to create a database with parking spots suitable for truck drivers.</li>
      <li>Each driver can add a place where is safe to stop for rest, food, toilet and other facilities.</li>
      <li>Most truck drivers uses coordinates to reach a certain destination, so coordinates are a requirement when addind a parking spot. In order to do so, a user must be created and logged in.</li>
    </ul>
  </AboutStyle>
)

export default About