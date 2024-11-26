import { useTheme } from 'context/ThemeContext';
import HeroImgOrange from '../images/hero_img_orange.png';
import HeroImgGreen from '../images/hero_img_green.png';
import HeroImgBlue from '../images/hero_img_blue.png';
import HeroImgPink from '../images/hero_img_pink.png';
import HeroImgPeach from '../images/hero_img_red.png';

export const HeroImg = () => {
  const { theme } = useTheme();

  const getHeroImg = () => {
    switch (theme) {
      case 'orange':
        return HeroImgOrange;
      case 'green':
        return HeroImgGreen;
      case 'blue':
        return HeroImgBlue;
      case 'pink':
        return HeroImgPink;
      case 'red':
        return HeroImgPeach;
      default:
        return HeroImgGreen;
    }
  };
  return (
    <div className=" rounded-[30px] w-full  md:w-[704px] md:h-[658px] lg:w-[568px] lg:h-[530px]">
      <img className="w-full h-full " src={getHeroImg()} alt="hero" />
    </div>
  );
};
