import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUtensils,
  faBars,
  faSpinner,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(faUtensils, faBars, faSpinner, faArrowRight);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>New York Indonesian Food Bazaar</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='New York Indonesian Food Bazaar serves the best of Indonesian food, fresh made and crafted from recipes passed down through generations of family chefs.'
        />
        <meta
          name='keywords'
          content='food, indonesian, indonesian food, food bazaar'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
