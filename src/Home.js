import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import { Button } from '@material-ui/core';

const Home = () => {
  return (
    <div className='home'>
      {/* <h1>Home component</h1> */}
      <Banner />
      <div className='home__section'>
        <Card
          src='https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720'
          title='Online Experiences'
          description='Unique activities we can do together, led by a world of hosts.'
        />
        <Card
          src='https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720'
          title='Unique stays'
          description='Spaces that are more than just a place to sleep.'
        />
        <Card
          src='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720'
          title='Entire homes'
          description='Comfortable private places, with room for friends or family.'
        />
      </div>
      <div className='home__experiences'>
        <div className='home__container'>
          <div className='home__header'>
            <div className='home__title'>
              <h2>Online Experiences: Field Trips</h2>
              <p>
                Join interactive, global adventures with inspiring, kid-friendly
                hosts.
              </p>
            </div>

            <Button variant='outlined'>Explore all</Button>
          </div>

          <div className='home__section'>
            <Card
              src='https://a0.muscache.com/im/pictures/4e1d29d2-5148-444d-945d-c278121675a3.jpg?im_w=720'
              title='Decode the science of 2020 with Bill Nye'
              inverse
            />
            <div className='home__secondarySection'>
              <div className='home__section'>
                <Card
                  src='https://a0.muscache.com/im/pictures/c4975e3c-32c2-4bca-9bc7-25a3e69ea341.jpg?im_w=720'
                  title='Go on a leopard safari in Sri Lanka'
                  inverse
                />
                <Card
                  src='https://a0.muscache.com/im/pictures/5d6ee25d-0d8e-472a-b8e7-56bb498b1403.jpg?im_w=720'
                  title='Discover Buenos Aires street art and sketch'
                  inverse
                />
              </div>
              <Card
                src='https://a0.muscache.com/im/pictures/99897df7-97c9-4a14-aa4e-baa5324db825.jpg?im_w=720'
                title='Dive under the sea with a shark scientist'
                inverse
              />
            </div>
          </div>
        </div>
      </div>
      <div className='home__section'>
        <Card
          src='https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg'
          title='3 Bedroom Flat in Bournemouth'
          description='Superhost with a stunning view of the beachside in Sunny Bournemouth'
          price='£130/night'
        />
        <Card
          src='https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg'
          title='Penthouse in London'
          description='Enjoy the amazing sights of London with this stunning penthouse'
          price='£350/night'
        />
        <Card
          src='https://media.nomadicmatt.com/2018/apartment.jpg'
          title='1 Bedroom apartment'
          description='Superhost with great amenities and a fabolous shopping complex nearby'
          price='£70/night'
        />
      </div>
    </div>
  );
};

export default Home;
