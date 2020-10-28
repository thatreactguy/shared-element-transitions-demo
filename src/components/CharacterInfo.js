import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

const CharacterInfo = ({ data }) => {
  let history = useHistory();
  let { id } = useParams();
  let characInfo = data.find((item) => item.id.toString() === id);
  return (
    <motion.div className='char-info'>
      <motion.div layoutId={`card-image-container-${characInfo.id}`}>
        <img src={process.env.PUBLIC_URL + characInfo.img} alt='' />
      </motion.div>
      <motion.div layoutId={`title-container-${characInfo.id}`}>
        <h1>{characInfo.name}</h1>
      </motion.div>
      <p>{characInfo.description}</p>
      <button onClick={() => history.goBack()}>Back</button>
    </motion.div>
  );
};

export default CharacterInfo;
