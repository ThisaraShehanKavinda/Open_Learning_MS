import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import pi1 from '../assets/pi1.png';
import pi2 from '../assets/pi2.png';
import pi4 from '../assets/pi4.jfif';
import pi3 from '../assets/pp3.png';
import './testimonials.css';

// Testimonial Data
const testimonialsData = [
  {
    id: 1,
    name: 'Shavini Dissanayake',
    avatar: { pi1 },
    message:
      'This program transformed my career! The modules are well-designed, and the support is phenomenal.',
  },
  {
    id: 2,
    name: ' Navodya sri malee',
    avatar: { pi2 },
    message:
      'I gained practical skills through the hands-on exercises. I feel ready to take on real-world projects!',
  },
  {
    id: 3,
    name: 'Dithmi lakrandi',
    avatar: { pi3 },
    message:
      'The course materials were accessible and easy to follow. Highly recommended!',
  },
  {
    id: 4,
    name: 'Kanuja dilshan',
    avatar: { pi4 },
    message:
      'I never thought I could learn so much in such a short time. Great experience!',
  },
];

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className='testimonials-container'>
      <h2 className='testimonials-title'>What Our Students Say</h2>
      <Slider {...sliderSettings}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className='testimonial-slide'>
            <div className='chat-bubble'>
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className='chat-avatar'
              />
              <div className='chat-content'>
                <p className='chat-message'>{testimonial.message}</p>
                <span className='chat-name'>- {testimonial.name}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
