import React, { Component } from 'react';
import { TimelineMax, Power2, Expo, Power3, Back } from 'gsap';
import './App.css';

import bg from './amp-and-gat.png';

class App extends Component {
  componentDidMount() {
    var tl = new TimelineMax({repeat: 3});
    tl.to('.wrapper1 .bg-image', 0.9, {autoAlpha: 0.8, ease: Power2.easeInOut})
      .staggerTo('.wrapper1 h1 span', 1.2, {autoAlpha: 1, ease: Power2.easeInOut}, 0.1,'-=0.6')
      .staggerFromTo('.wrapper1 p span', 0.8, {x: 300}, {x: 0, ease: Expo.easeOut}, 0.2, '-=0.4')
      .staggerTo('.wrapper1 p span', 1.2, {autoAlpha: 1, ease: Power3.easeInOut}, 0.2, '-=1.6')
      .fromTo('.wrapper1 button', 0.7, {autoAlpha: 0, scale: 0}, {autoAlpha: 1, scale: 1, ease: Back.easeInOut}, '-=0.2')
      .staggerTo('.wrapper1 .hide', 0.3, {delay: 2, autoAlpha: 0}, 0.05);

    var tl2 = new TimelineMax({repeat: 3});
    tl2.to('.wrapper2 .bg-image', 0.9, {autoAlpha: 0.8, ease: Power2.easeInOut})
      .staggerTo('.wrapper2 h1 span', 1.2, {autoAlpha: 1, ease: Power2.easeInOut}, 0.1,'-=0.6')
      .staggerFromTo('.wrapper2 p span', 0.8, {x: 300}, {x: 0, ease: Expo.easeOut}, 0.2, '-=0.4')
      .staggerTo('.wrapper2 p span', 1.2, {autoAlpha: 1, ease: Power3.easeInOut}, 0.2, '-=1.6')
      .fromTo('.wrapper2 button', 0.7, {autoAlpha: 0, scale: 0}, {autoAlpha: 1, scale: 1, ease: Back.easeInOut}, '-=0.2')
      .staggerTo('.wrapper2 .hide', 0.3, {delay: 2, autoAlpha: 0}, 0.05);
  }
  render() {
    return (
      <div>
        <div class="wrapper wrapper1">
          <div class="title">
            <h1><span class="hide">BAGNALL</span> <span class="hide">HILL</span></h1>
            <p><span class="hide">Boutique</span> <span class="hide">Recording</span> <span class="hide">Studio,</span> <span class="hide">NZ</span></p>
          </div>
          <button class="hide">CHECK US OUT</button>
          <img class="bg-image hide" src={bg} alt="amplifier and guitar"/>
        </div>

        <div class="wrapper wrapper2">
          <div class="title">
            <h1><span class="hide">BAGNALL</span> <span class="hide">HILL</span></h1>
            <p><span class="hide">Boutique</span> <span class="hide">Recording</span> <span class="hide">Studio,</span> <span class="hide">NZ</span></p>
          </div>
          <button class="hide">CHECK US OUT</button>
          <img class="bg-image hide" src={bg} alt="amplifier and guitar"/>
        </div>
      </div>
    );
  }
}

export default App;
