import Image from 'next/image';

import Header from '../../components/Header';

export default function Home() {
  return (
    <div style={{ width: '100%', margin: 0, padding: 0 }}>
      <Header/>
      <img src="/marketplace5.svg" alt="Logo" />
    </div>
  );
}