import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-neutral text-neutral-content grid grid-cols-1 md:grid-cols-4 gap-8">
  <nav class="flex flex-col gap-2">
    <div class="flex items-center gap-2 text-2xl font-bold text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
      <span>AUTO<span class="text-white">PARTS</span></span>
    </div>
    <p class="text-sm text-gray-400 mt-2">আপনার গাড়ির সঠিক এবং ১০০% জেনুইন পার্টস পাবেন আমাদের কাছে। নির্ভরযোগ্যতা আমাদের মূল লক্ষ্য।</p>
  </nav>

  <nav>
    <h6 class="footer-title text-white opacity-100 font-bold border-b-2 border-primary pb-1 mb-2">জনপ্রিয় ক্যাটাগরি</h6> 
    <a class="link link-hover text-gray-300 hover:text-primary">ইঞ্জিন পার্টস (Engine)</a>
    <a class="link link-hover text-gray-300 hover:text-primary">ব্রেক সিস্টেম (Brakes)</a>
    <a class="link link-hover text-gray-300 hover:text-primary">সাসপেনশন (Suspension)</a>
    <a class="link link-hover text-gray-300 hover:text-primary">লুব্রিকেন্টস ও অয়েল</a>
  </nav>

  <nav>
    <h6 class="footer-title text-white opacity-100 font-bold border-b-2 border-primary pb-1 mb-2">গুরুত্বপূর্ণ লিংক</h6> 
    <a class="link link-hover text-gray-300 hover:text-primary">আমাদের সম্পর্কে</a>
    <a class="link link-hover text-gray-300 hover:text-primary">যোগাযোগ করুন</a>
    <a class="link link-hover text-gray-300 hover:text-primary">ওয়ারেন্টি পলিসি</a>
    <a class="link link-hover text-gray-300 hover:text-primary">ডেলিভারি ইনফো</a>
  </nav>

  <div>
    <h6 class="footer-title text-white opacity-100 font-bold border-b-2 border-primary pb-1 mb-2">যোগাযোগ ও অফার</h6>
    <p class="text-sm text-gray-300 mb-2">📍 ঢাকা, বাংলাদেশ</p>
    <p class="text-sm text-gray-300 mb-4">📞 +01819976046</p>
    <form class="form-control w-full">
      <div class="join">
        <input type="text" placeholder="আপনার ইমেইল" class="input input-bordered join-item input-sm text-black w-full" /> 
        <button class="btn btn-primary join-item btn-sm">সাবস্ক্রাইব</button>
      </div>
    </form>
  </div>
</footer>

<footer class="footer px-10 py-4 border-t bg-neutral text-neutral-content border-gray-700 flex flex-col sm:flex-row justify-between items-center">
  <aside class="items-center grid-flow-col">
    <p>© ২০২৬ AutoParts Ltd. সর্বস্বত্ব সংরক্ষিত।</p>
  </aside> 
  <nav class="md:place-self-center md:justify-self-end">
    <div class="grid grid-flow-col gap-4 text-xl">
      <a class="hover:text-primary cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
      <a class="hover:text-primary cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"></path></svg></a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;