import type { NextPage } from 'next';
import { useEffect } from 'react'

function Index() {
  useEffect(() => {
    const el = document.getElementById('comingSoon')
    setInterval(() => {
      el.style.opacity = (el.style.opacity === "" || el.style.opacity === "0") ? "1" : "0";
    }, 1e3);
  }, []);

  return (
    <>
      <div id="logo" />
      <p id="comingSoon">WE ARE COMING SOON...</p>
    </>
  );
}

export default Index;
