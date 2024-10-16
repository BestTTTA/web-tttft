import React from 'react';     
import Image from 'next/image';

const Page4 = () => {
  return (
    <section className="bg-black text-white py-16 relative flex justify-center items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 items-center justify-center">
        {/* Text section */}
        <div className="space-y-16 text-center relative z-10">
          <h2 className="text-5xl font-bold leading-snug">
            Best <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-400">feature</span> info
            <br /> goes just here
          </h2>
          <p className="text-gray-400">
            When Im with you, everything feels right.. When im with you, nothing else matters. Do you have any idea how much I adore you? You’ve been a blessing to my life. All love is sweet, but ours is the sweetest. When I’m feeling lost
          </p>

          {/* Feature List */}
          <ul className="grid grid-cols-2 gap-8 justify-center">
            {/* Feature 1 */}
            <li className="flex items-center space-x-3 justify-center">
              <span className="rounded-full p-2">
                <Image src="/Icons-feature.png" alt="Feature 1" width={32} height={32} className="w-8 h-8" />
              </span>
              <span>nothatIvefoundyou,Imnever</span>
            </li>

            {/* Feature 2 */}
            <li className="flex items-center space-x-3 justify-center">
              <span className="rounded-full p-2">
                <Image src="/Icons-feature.png" alt="Feature 2" width={32} height={32} className="w-8 h-8" />
              </span>
              <span>Evenafterallthistime,youstillkii</span>
            </li>

            {/* Feature 3 */}
            <li className="flex items-center space-x-3 justify-center">
              <span className="rounded-full p-2">
                <Image src="/Icons-feature.png" alt="Feature 3" width={32} height={32} className="w-8 h-8" />
              </span>
              <span>Becauseyoreinmylife,Iknow</span>
            </li>

            {/* Feature 4 */}
            <li className="flex items-center space-x-3 justify-center">
              <span className="rounded-full p-2">
                <Image src="/Icons-feature.png" alt="Feature 4" width={32} height={32} className="w-8 h-8" />
              </span>
              <span>Youhavemademeanincredibly</span>
            </li>
          </ul>
        </div>

        {/* Image section */}
        <div className="flex justify-center">
          <Image
            src="/Frame 2.png"
            alt="Feature illustration"
            width={540}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Additional Image section on the left */}
      <div className="absolute top-0 left-0 transform translate-y-40 ml-0">
        <Image
          src="/Group.png"
          alt="Additional illustration"
          width={841.39}
          height={442}
        />
      </div>
    </section>
  );
};

export default Page4;
