import Image from 'next/image';

import Header from '../../components/Header';

export default function Home() {
  return (
    <div style={{ width: '100%', margin: 0, padding: 0 }}>
      <Header/>
      <img src="/marketplace1.svg" alt="Logo" />
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '64px' }}>TRENDING PRODUCTS</p>
      <img src="/marketplace2.svg" alt="Logo" />
      <img src="/marketplace3.svg" alt="Logo" />
      <img src="/marketplace4.svg" alt="Logo" />
      <img src="/marketplace5.svg" alt="Logo" />
      <img src="/marketplace6.svg" alt="Logo" />
    </div>
  );
}