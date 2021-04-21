import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/free-brands-svg-icons';
import { faUtensils, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faUtensils, faBars);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
