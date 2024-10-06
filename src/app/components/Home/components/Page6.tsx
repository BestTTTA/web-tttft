import React from 'react';

const Page5 = () => {
    return (
        <section className="bg-gray-900 text-white py-16 min-h-screen">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">
                    Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-600">Partners</span>
                </h2>
            </div>

            {/* Partners logos */}
            <div className="relative max-w-6xl mx-auto">
                <img
                    src="https://img.pikbest.com/wp/202346/grey-world-3d-map-against-a-backdrop_9733205.jpg!w700wp"
                    alt="World map"
                    className="w-[1246px] h-[629px] object-cover mb-8 opacity-80"
                />

                {/* เส้นสีขาวระหว่างแผนที่และ footer */}
                <div className="border-t border-white w-[180%] mx-auto relative left-[-40%]"></div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-950 py-12 mt-0 w-full h-[300px]">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <img src="/logo-tiger-team.png" alt="Tiger Team Logo" className="h-16" />
                    </div>
                    <div>
                        <p className="text-gray-400">+66 (0)98 916 2690</p>
                        <p className="text-gray-400">thetigerteamacademy@gmail.com</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="h-8 w-8" /></a>
                        <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="h-8 w-8" /></a>
                        <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="h-8 w-8" /></a>
                    </div>
                </div>
                <div className="text-center text-gray-500 mt-8">
                    <p>© 2023. All rights reserved.</p>
                </div>
            </footer>
        </section>
    );
};

export default Page5;
