import {useEffect, useState} from 'react';
import {Link, Navigate} from 'react-router-dom';

import Button from '@/components/Button';
import AnimationLogo from '@/parts/AnimationLogo';

const SPLASH_KEY = 'd3mj2aom9hmfz7v';

function Logo() {
  const [isShowSplash] = useState(() => {
    const splash = JSON.parse(localStorage.getItem(SPLASH_KEY));
    return splash ? true : false;
  });

  useEffect(() => {
    if (!isShowSplash) {
      localStorage.setItem(SPLASH_KEY, JSON.stringify(true));
    }
  }, [isShowSplash]);

  if (isShowSplash) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <div className="bg-primary-600 w-[576px] h-[740px] text-center flex justify-center items-center relative">
        <AnimationLogo />
        <Link to="/home" className="absolute bottom-10">
          <Button className="goToHomepage lgFontButton hover:hoverGoToHomepage">
            홈페이지로 가기
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Logo;