/*
import React from 'react'; */
import imageSrc from '../../assets/images/Ustlogo.jpg'; 
import imageSrcOne from '../../assets/images/Image1.jpg';
import imageSrcTwo from '../../assets/images/Imagetwo.jpg';
import imageSrcThree from '../../assets/images/Imagethree.jpg';
import imageSrcFour from '../../assets/images/Imagefour.jpg';
import imageSrcFive from '../../assets/images/Imagefive.jpg';
import imageSrcSix from '../../assets/images/Imagesix.jpg';
import imageSrcSeven from '../../assets/images/Imageseven.jpg';
import imageSrcEight from '../../assets/images/Imageeight.jpg';
import imageSrcNine from '../../assets/images/Imagenine.jpg';
import imageSrcTen from '../../assets/images/Imageten.jpg';
import imageSrcEleven from '../../assets/images/Imageeleven.jpg';

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto py-8" >
        <div className="p-8 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center">
            <img src={imageSrc} alt="UST logo" className="mx-auto my-4 rounded-full w-60 h-60" />
          </div>
          <div className="flex justify-center" >
            <img src={imageSrcOne} alt="President" className="mx-auto my-4 rounded-lg shadow-md object-cover w-20 h-20" />
            <img src={imageSrcTwo} alt="Secretary" className="mx-auto my-4 rounded-lg shadow-md object-cover w-20 h-20" />
            <img src={imageSrcThree} alt="Treasurer" className="mx-auto my-4 rounded-lg shadow-md object-cover w-20 h-20" />
          </div>
          <div className="flex justify-center" >
            <img src={imageSrcFour} alt="PRO" className="mx-auto my-4 rounded-lg shadow-md object-cover w-20 h-20" />
            <img src={imageSrcFive} alt="Auditor" className="mx-auto my-4 rounded-lg shadow-md object-cover w-20 h-20" />
            <img src={imageSrcSix} alt="VP (NSW)" className="mx-auto my-4 rounded-lg shadow-md object-cover w-20 h-20" />
          </div>
          <div className="flex justify-center" >
            <img src={imageSrcSeven} alt="VP (ACT)" className="mx-auto my-4 rounded-lg shadow-md object-cover w-20 h-20" />
            <img src={imageSrcEight} alt="VP (QLD)" className="mx-auto my-4 rounded-lg shadow-md object-cover w-20 h-20" />
            <img src={imageSrcNine} alt="VP (WA)" className="mx-auto my-4 rounded-lg shadow-md object-cover w-20 h-20" />
          </div>
          <div className="flex justify-center" >
            <img src={imageSrcTen} alt="Coordinator for SA" className="mx-auto my-4 rounded-lg shadow-md object-cover w-20 h-20" />
            <img src={imageSrcEleven} alt="Adviser" className="mx-auto my-4 rounded-lg shadow-md object-cover w-20 h-20" />
          </div>

          <h1 className="text-2xl font-bold mb-2 text-center">Officers</h1>
          <h1 className="text-2xl font-bold mb-2 text-center">Connecting Thomasians Down Under</h1>
          <a href="mailto:info@ustaa.org.au" className="text-gray-700 underline text-center block mb-4">Contact Us: info@ustaa.org.au</a>
        </div>
      </div>
    </div>
  );
};

export default About;

