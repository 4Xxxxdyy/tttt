import React from'react';

const QAnythingPage = () => {
  return (
    <iframe
      src="QAnything提供的HTML问答页面的URL"
      width="100%"
      height="600"
      sandbox="allow - scripts"
      loading="lazy"
      frameborder="0"
      style={{ border: 0 }}
      allowfullscreen
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  );
};

export default QAnythingPage;