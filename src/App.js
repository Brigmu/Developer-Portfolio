import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Container from './Components/Container/Container';
import Wrapper from './Components/Wrapper/Wrapper';
import Card from './Components/Card/Card';
import CardImg from './Components/CardImg/index';
import CardInfo from './Components/CardInfo';
import Navlink from './Components/Navlink/Navlink';
import Title from './Components/Title/Title';
import ViewBtn from './Components/ViewBtn/ViewBtn';

function App() {
  const [shareishCard, setShareishCard] = useState({class: 'card-img', active: false})
  const [craveItCard, setCraveItCard] = useState({class: 'card-img', active: false})
  const [headcountCard, setHeadcountCard] = useState({class: 'card-img', active: false})
  const [employeeDirectoryCard, setEmployeeDirectoryCard] = useState({class: 'card-img', active: false})
  const [googleBooksCard, setGoogleBooksCard] = useState({class: 'card-img', active: false})

  const handleCardImgClassChange = (e) => {
    const card = e.target.getAttribute('data-card');
    switch(card){
      case 'shareish':
        if(shareishCard.active){
          setShareishCard({class: 'card-img', active: false})
        } else {
          setShareishCard({class: 'card-img-active', active: true})
        }
      break;
      case 'headcount':
        if(headcountCard.active){
          setHeadcountCard({class: 'card-img', active: false})
        } else{
          setHeadcountCard({class: 'card-img-active', active: true})
        }
      break;
      case 'craveit':
        if(craveItCard.active){
          setCraveItCard({class: 'card-img', active: false})
        } else {
          setCraveItCard({class: 'card-img-active', active: true})
        }
      break;
      case 'googlebooks':
        if(googleBooksCard.active){
          setGoogleBooksCard({class: 'card-img', active: false})
        } else {
          setGoogleBooksCard({class: 'card-img-active', active: true})
        }
      break;
      case 'employeedirectory':
        if(employeeDirectoryCard.active){
          setEmployeeDirectoryCard({class: 'card-img', active: false})
        } else {
          setEmployeeDirectoryCard({class: 'card-img-active', active: true})
        }
      break;
      default:
        console.log('oops');
    }
  }
  return (
    <div className="App">
        <Nav>
          <Navlink link='#about' title='About' />
          <Navlink link='#portfolio' title='Portfolio' />
          <Navlink link='#contact' title='Contact' />
        </Nav>
        <Container>
          
          <Wrapper name='about-wrapper' id='about'>
            <Title title='About' />
            <div className='inner-wrapper'>
            <img src='/images/Portfolio-photo.jpg' alt='profile'></img>
            <div className='p-div'>
            <p>My name is Brigham Mueller and this website was made to tell a little bit about myself and show what
                    I can do. I am a full-stack web developer, gamer, home chef, and dad joke extraordinaire.
                    Coding and designing have always been something that have peaked my interest as a way to explore my
                    creative side while still being a relevant way to make a living. Outside of my time learning and
                    growing my coding experience you can find me, as mentioned, two places: on the computer gaming or in
                    the kitchen.
                    Gaming for me has always been a way to be competitive and enjoy myself at the same time. It was also
                    how I connected with a lot of my siblings and gave us a means to spend time together.
                    My time in the kitchen is often spent trying new recipes or perfecting ones I already know. I get a
                    lot of satisfactin out of the enjoyent that other people get when they eat what I have made.
                </p>
                <p>Aside from my 3 main interests I love to play soccer, travel, and hang out with my family. Family is
                    super important to me and I try to spend as much time with them as I can. We love to play board
                    games, word games, video games, or pretty much anything where we can have a good time together.
                    I have traveled many places around the world including: China, Ukraine, Costa Rica, Belize, Mexico,
                    and Canada. My family is really into soccer and I personally played for about 13 years growing up on
                    very competitive teams.
                </p>
                <p>Beyond my personal interests, I am a very logical person who likes to think through pretty much
                    everything I do. I believe in being a kind person to everyone around me and try to help out as much
                    as I can.</p>
                  </div>
              </div>
          </Wrapper>
          <Wrapper name='portfolio-wrapper' id='portfolio'>
            <Title title='Portfolio' />
            <div className='cards-wrapper'>
            <Card>
              <CardImg className={shareishCard.class} source='images/shareishsnipped.png' />
              <CardInfo title='Shareish' text='Shareish is an app that allows users to rent out and rent unused items such as tools, electronics, yard equipment, etc.' gihub='https://github.com/Brigmu/Sharemasters' deployed='https://ancient-crag-34328.herokuapp.com/' />
              {shareishCard.active ? <ViewBtn card='shareish' name='button view-less' text='View less' handleCardClick={handleCardImgClassChange}/> : <ViewBtn card='shareish' name='button view-more' text='View info' handleCardClick={handleCardImgClassChange}/> }
            </Card>
            <Card>
              <CardImg className= {craveItCard.class} source='images/craveitsnipped.png' />
              <CardInfo title ='Crave it' text='Crave it is an app that allows users to search for food recipes by category' github='https://github.com/crispysodium/crave_masters' deployed='https://crispysodium.github.io/crave_masters/'/>
              {craveItCard.active ? <ViewBtn card='craveit' name='button view-less' text='View less' handleCardClick={handleCardImgClassChange}/> : <ViewBtn card='craveit' name='button view-more' text='View info' handleCardClick={handleCardImgClassChange}/> }
            </Card>
            <Card>
              <CardImg className={headcountCard.class} source='images/Headcountmanagersnipped.png' />
              <CardInfo title='Headcount Manager' text='Headcount manager is an app for tracking headcount at a company by country and department' github='https://github.com/macheson/headcount-tracker/' deployed='https://dry-waters-35769.herokuapp.com/'/>
              {headcountCard.active ? <ViewBtn card='headcount' name='button view-less' text='View less' handleCardClick={handleCardImgClassChange}/> : <ViewBtn card='headcount' name='button view-more' text='View info' handleCardClick={handleCardImgClassChange}/> }
            </Card>
            <Card>
              <CardImg className={googleBooksCard.class} source='images/googlebookssnipped.png' />
              <CardInfo title='Google Books Search' text='An app that allows the users to search google books and then save books they like to a database' github ='https://github.com/Brigmu/Google-books-search' deployed='https://mygooglebookssearch.herokuapp.com/' />
              {googleBooksCard.active ? <ViewBtn card='googlebooks' name='button view-less' text='View less' handleCardClick={handleCardImgClassChange}/> : <ViewBtn card='googlebooks' name='button view-more' text='View info' handleCardClick={handleCardImgClassChange}/> }
            </Card>
            <Card>
              <CardImg className={employeeDirectoryCard.class} source='images/employeedirectorysnipped.png' />
              <CardInfo title='Employee Directory' text='This is a practice app testing out react state to manage an directory of employees' github='https://github.com/Brigmu/Employee-Directory' deployed='https://brigmu.github.io/Employee-Directory/' />
              {employeeDirectoryCard.active ? <ViewBtn card='employeedirectory' name='button view-less' text='View less' handleCardClick={handleCardImgClassChange}/> : <ViewBtn card='employeedirectory' name='button view-more' text='View info' handleCardClick={handleCardImgClassChange}/> }
            </Card>
            </div>
          </Wrapper>
          <Wrapper name='contact-wrapper' id='contact'>
            <Title title='Contact' />
            <div className = 'contact-wrapper'>
            <h3>Personal Info</h3>
                <p>Email: brigmu@gmail.com</p>
                <p>Phone: 206-734-8405</p>
                <a href = "https://docs.google.com/document/d/1opgLrcQpAW3ns2WTNB-I0QWtOADd9Hpc9dRN0SPXduI/edit?usp=sharing">Resume</a>
                <h3>Socials</h3>
                <img src="images/GitHub-Mark-32px.png" id='Github' alt='gitub-logo'/>
                <a href="https://github.com/Brigmu">brigmu</a>
                <img src="images/LI-Logo.png" id='linkedin' alt='linkedin-logo'/>
                <a href="https://www.linkedin.com/in/brigham-mueller-709817197/">Brigham Mueller</a>
            </div>
          </Wrapper>
        </Container>
    </div>
  );
}

export default App;
