import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import promoImage from '../assets/promo-image.jpg';

const metaInfo = {
  title: 'Web VR for Everyone | Four Kitchens',
  description:
    'Four Kitchens creates WebVR for Everyone. Explore the experiences we’ve made using the phone & computer you already have.',
  keywords:
    'immersive technology , android, ar, article, augmented, augmented reality, browser, device, experience, google, headset, phone, reality, space, technologies, virtual reality, vr, web, webar, webvr',
  url: 'https://vr.fourkitchens.com',
};

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={metaInfo.title}
      meta={[
        { name: 'description', content: metaInfo.description },
        { name: 'keywords', content: metaInfo.keywords },
        { property: 'og:title', content: metaInfo.title },
        { property: 'og:description', content: metaInfo.description },
        { property: 'og:image', content: promoImage },
        { property: 'og:url', content: metaInfo.url },
        { name: 'twitter:card', content: 'summary_large_image' },
      ]}
      link={[
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://cloud.typography.com/7738032/7783592/css/fonts.css',
        },
      ]}
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateWrapper;
