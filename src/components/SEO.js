import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{`PTway - ${title} `}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
