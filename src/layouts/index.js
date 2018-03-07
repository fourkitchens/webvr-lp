import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Web VR for Everyone | Four Kitchens"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
      link={[
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cloud.typography.com/7738032/7783592/css/fonts.css"
        }
      ]}
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default TemplateWrapper;
