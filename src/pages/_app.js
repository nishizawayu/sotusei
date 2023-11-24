import { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3秒後にスプラッシュスクリーンを非表示にする

    return () => clearTimeout(timer);
  }, []);

  return loading ? <SplashScreen /> : <Component {...pageProps} />;
  return <Component {...pageProps} />
}
