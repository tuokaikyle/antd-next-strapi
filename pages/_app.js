import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';
import UniversalLayout from '../components/UniversalLayout';

export default function MyApp({ Component, pageProps }) {
  return (
    <UniversalLayout>
      <Component {...pageProps} />
    </UniversalLayout>
  );
}
