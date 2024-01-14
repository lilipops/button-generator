import Layout from '../app/layout.client';
import Button from '../components/floatingbutton';
import React, { useEffect } from 'react';

const IndexPage = () => {
  useEffect(() => {
    const fetchScript = async () => {
      try {
        const response = await fetch('https://scripts.soultech.co/soultech_acme.js');
        const script = await response.text();
        const scriptElement = document.createElement('script');
        scriptElement.innerHTML = script;
        document.body.appendChild(scriptElement);
      } catch (error) {
        console.error('Failed to fetch script:', error);
      }
    };

    fetchScript();
  }, []);

  return (
    <Layout>
      <Button />
    </Layout>
  );
};

export default IndexPage;