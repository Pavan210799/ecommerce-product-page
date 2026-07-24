import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="mt-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto p-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          <div>
            <h2 className="text-3xl font-black tracking-[0.25em]">
              SONY
            </h2>

            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-6">
              Premium audio experiences with industry-leading sound quality,
              immersive noise cancellation, and innovative technology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Shop</h3>

            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="hover:text-red-600 cursor-pointer">Headphones</li>
              <li className="hover:text-red-600 cursor-pointer">Earbuds</li>
              <li className="hover:text-red-600 cursor-pointer">Speakers</li>
              <li className="hover:text-red-600 cursor-pointer">Accessories</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>

            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="hover:text-red-600 cursor-pointer">Help Center</li>
              <li className="hover:text-red-600 cursor-pointer">Warranty</li>
              <li className="hover:text-red-600 cursor-pointer">Track Order</li>
              <li className="hover:text-red-600 cursor-pointer">Returns</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>

            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="hover:text-red-600 cursor-pointer">About Us</li>
              <li className="hover:text-red-600 cursor-pointer">Careers</li>
              <li className="hover:text-red-600 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-red-600 cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4 text-xl">
              <FiFacebook className="cursor-pointer hover:text-red-600 transition" />
              <FiInstagram className="cursor-pointer hover:text-red-600 transition" />
              <FiTwitter className="cursor-pointer hover:text-red-600 transition" />
              <FiYoutube className="cursor-pointer hover:text-red-600 transition" />
            </div>
          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          © 2026 Sony Store. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;