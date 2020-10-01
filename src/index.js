import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Footer, Section, SingleStory, CreateStoryForm } from './components'
import "@babel/polyfill";

import Amplify, { API } from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const [stories, setStories] = useState([])
    async function fetchStories() {
      const stories = await API.get('readStories', '/stories')
      console.log("stories: "+JSON.stringify(stories))
      let stories_with_orient = []
      let prev_orient = "orient-left"
      for (let story of stories["stories"]) {
        let orient = prev_orient === "orient-right" ? "orient-left" : "orient-right"
        story["orient"] = orient
        stories_with_orient.push(story)
        prev_orient = orient
      }
      setStories(stories_with_orient)
    }
    useEffect(() => {
      fetchStories()
    }, [])
    
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/story/:id" component={ SingleStory }/>
        </Switch>
    </Router>
    );
}

const Home = () => {
    const [stories, setStories] = useState([])
    async function fetchStories() {
      const stories = await API.get('readStories', '/stories')
      console.log("stories: "+JSON.stringify(stories))
      let stories_with_orient = []
      let prev_orient = "orient-left"
      for (let story of stories["stories"]) {
        let orient = prev_orient === "orient-right" ? "orient-left" : "orient-right"
        story["orient"] = orient
        stories_with_orient.push(story)
        prev_orient = orient
      }
      setStories(stories_with_orient)
    }
    useEffect(() => {
      fetchStories()
    }, [])
    return (
    <div id="wrapper" className="divided">
        <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
            <div className="content">
                <h1>Seattle News Bulletin</h1>
                <p className="major">Learn more about Covid 19 stats, local news, country-wide social reforms and Seattle's upcoming local businesses here! </p>
                <ul className="actions stacked">
                    <li><a href="#first" className="button big wide smooth-scroll-middle">Get Started</a></li>
                </ul>
            </div>
            <div className="image">
                <img src="images/seattle.jpg" alt="" />
            </div>
        </section>
        {
        stories.map(story => {
              return <Section orient={story.orient} title={story.title} content={story.content} id={story.id} />
        })}

        <section className="wrapper style1 align-center">
            <div className="inner">
                <h2>Local Businesses</h2>
                <p>Find out more about new businesses opening up near you! From beautiful cloth mask vendors to freelance writers, we have details about them all!</p>
                <div className="items style1 medium onscroll-fade-in">
                    <section>
                        <span className="icon style2 major fa-gem"></span>
                        <h3>Get Italian Food Delivered at Home</h3>
                        <p>We serve traditional pasta dishes such as baked chicken or beef pot dumplings, truffled cheese croquettes or salamis olives – all made fresh to order on a wooden platter which can be shared!</p>
                    </section>
                    <section>
                        <span className="icon solid style2 major fa-save"></span>
                        <h3>Outdoor Event Spaces</h3>
                        <p>It creates a safe and inspirational space for everyone. We are a tech conference which focuses not only on technology but also on design and their social impact. It creates a safe and inspiring space for everyone.</p>
                    </section>
                    <section>
                        <span className="icon solid style2 major fa-chart-bar"></span>
                        <h3>Bellevue Personal Trainer</h3>
                        <p>I am experienced in working with a variety of clients in a variety of specialties. Whether its strength, cardio, stretching, or functional training, I am able to meet those unique needs each time. With my versatility, you can expect a customized program that is both effective and compassionate.</p>
                    </section>
                    <section>
                        <span className="icon solid style2 major fa-wifi"></span>
                        <h3>North Beacon Hill Bakery</h3>
                        <p>In addition to our bakery specialty, we offer a wide variety of baked goods. We are a part of the small and innovative food movement that is based on innovation, quality, and service. We believe that the best way to bring out the best in all people is to be generous with ourselves and our limited offerings. We believe that everyone should be given the opportunity to taste delicious food on a wide variety of tastes and levels.</p>
                    </section>
                    <section>
                        <span className="icon solid style2 major fa-cog"></span>
                        <h3>Yoga Classes at Downtown Seattle</h3>
                        <p>We offer our clients the opportunity for regular, weekly classes of Vinyasa flow as well Ashtanga/Hatha practice and more. Our dedication to excellence inspires students to reach new levels of strength and flexibility while raising awareness of what it means not only physically, but mentally to live your best life.</p>
                    </section>
                    <section>
                        <span className="icon style2 major fa-paper-plane"></span>
                        <h3>Wallace Falls Bed & Breakfast</h3>
                        <p>We are a family-run business and enjoy the added benefits of having a working holiday home that allows us to work from our garage and live our own adventure spirit. The family has been happily operating the Walsh B&B in the Herts area of South Wales for over 25 years. We are proud to have had its name for over 30 years, we’ve used it as a base for all kinds of travel and adventure for almost as long as we’ve been in business.</p>
                    </section>
                    <section>
                        <span className="icon solid style2 major fa-desktop"></span>
                        <h3>Kirkland Nail Salon</h3>
                        <p>We are a boutique salon offering a variety of services to our clients, from nail art, to pedicure, pedicure waxing, to manicure, pedicure waxing, to make-up, nail polish, nail art, pedicure waxing, to manicure, manicure waxing, to make-up. We are committed to providing the highest quality services to our customers.</p>
                    </section>
                    <section>
                        <span className="icon solid style2 major fa-sync-alt"></span>
                        <h3>Mercer Island Art Gallery</h3>
                        <p>Our Art Gallery is located on the first floor of my parents house in the heart of the city. The space is surrounded by lush greenery, with a couple of windows and a big open space, and you can walk through the front door in to the gallery.</p>
                    </section>
                    <section>
                        <span className="icon solid style2 major fa-hashtag"></span>
                        <h3>Organic Produce</h3>
                        <p>We are an international fruit and vegetable wholesale and retail company, which started with a single objective in mind, to promote healthy and nutritious food in the market. We are not just a wholesaler, we are a brand that promotes healthy eating and helps people reach their health and fitness goals.</p>
                    </section>
                    <section>
                        <span className="icon solid style2 major fa-bolt"></span>
                        <h3>Alki Live Music Band</h3>
                        <p>We are a small band of guitar, bass and drums with a love of music. We love playing at weddings, parties, bars and events. We’ve got experience of playing at all types of events and venues from small intimate soirees to grand scale concerts, we can provide ideal music venues for your music event.</p>
                    </section>
                    <section>
                        <span className="icon solid style2 major fa-envelope"></span>
                        <h3>Shoreline Outdoor Music Venue</h3>
                        <p>In addition to a variety of music venues, we also provide catering services. We have been in business for over 20 years and have been awarded 'Best Catering Company' by The Association of British Catering Companies.</p>
                    </section>
                    <section>
                        <span className="icon solid style2 major fa-leaf"></span>
                        <h3>Seattle's Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
                    </section>
                </div>
            </div>
        </section>

        <CreateStoryForm />

        <Footer />

        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"));