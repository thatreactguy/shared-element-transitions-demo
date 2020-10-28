import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <h2>Get this project</h2>
      <a
        href='https://github.com/thatreactguy/shared-element-transitions-demo'
        target='_blank'
        rel='noreferrer'
      >
        https://github.com/thatreactguy/shared-element-transitions-demo
      </a>
      <div className='connect'>
        <img src={process.env.PUBLIC_URL + 'twitter.svg'} alt='' />
        <div className='connect-text'>
          <h2>Find me on Twitter</h2>
          <a
            href='https://twitter.com/that_react_guy'
            target='_blank'
            rel='noreferrer'
          >
            <h3>@that_react_guy</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
