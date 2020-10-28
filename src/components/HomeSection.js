import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';

const HomeSection = ({ data }) => {
  let history = useHistory();

  const handleOnClick = (item) => {
    history.push('/info/' + item.id);
  };
  return (
    <div className='app'>
      <header>
        <h1>Shared Element Transitions Demo</h1>
      </header>
      <section>
        {data.map((item) => (
          <motion.div
            className='card'
            key={item.id}
            layoutId={`card-container-${item.id}`}
            onClick={() => handleOnClick(item)}
          >
            <motion.div
              className='card-img'
              layoutId={`card-image-container-${item.id}`}
            >
              <img src={process.env.PUBLIC_URL + item.img} alt='card' />
            </motion.div>
            <motion.div
              className='card-title'
              layoutId={`title-container-${item.id}`}
            >
              <span>{item.name}</span>
            </motion.div>
          </motion.div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default HomeSection;
