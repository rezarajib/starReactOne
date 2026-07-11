import React from 'react';

const Banner = () => {
  // ES6 Object Destructuring-এর ব্যবহার (কোড স্ট্যান্ডার্ড করার জন্য)
  const bannerData = {
    tagline: "Premium Auto Parts & Accessories",
    titleMain: "Find the Perfect Parts",
    titleSub: "For Your Vehicle",
    description: "Explore our massive inventory of high-quality OEM and aftermarket automobile parts. Engineered for performance, built to last.",
    buttonText: "Explore All Products",
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop" // একটি স্ট্যান্ডার্ড ব্রেক রোটার/পার্টসের ইমেজ
  };

  const { tagline, titleMain, titleSub, description, buttonText, imageUrl } = bannerData;

  return (
    <div className="bg-gradient-to-r from-gray-950 to-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      {/* প্রধান Flex কন্টেইনার: মোবাইলে উপর-নিচে, বড় স্ক্রিনে পাশাপাশি */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* বাম পাশ: টেক্সট কন্টেন্ট (মোবাইলে সেন্টারে থাকবে, বড় স্ক্রিনে বামে) */}
        <div className="flex-1 text-center md:text-left space-y-6 max-w-xl">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm block">
            {tagline}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            {titleMain} <br />
            <span className="text-blue-500">{titleSub}</span>
          </h1>

          <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
            {description}
          </p>

          <div className="pt-2">
            {/* অ্যারো ফাংশন ব্যবহার করে বাটন ক্লিক ইভেন্ট (ভবিষ্যতে রাউটিং-এর জন্য) */}
            <button 
              onClick={() => console.log('Navigating to products...')}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5"
            >
              {buttonText}
            </button>
          </div>
        </div>

        {/* ডান পাশ: প্রোডাক্ট ইমেজ কন্টেইনার */}
        <div className="flex-1 w-full max-w-md md:max-w-none flex justify-center md:justify-end">
          <div className="relative group">
            {/* ইমেজের পেছনে একটি সুন্দর গ্লোয়িং ইফেক্ট */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            
            {/* প্রোডাক্ট ইমেজ */}
            <img 
              src={imageUrl} 
              alt="Automobile Part" 
              className="relative rounded-2xl shadow-2xl w-full object-cover max-h-[400px] border border-gray-800 transform hover:scale-[1.02] transition duration-300"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;