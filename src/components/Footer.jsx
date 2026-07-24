import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

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
                <li>
                    <Link
                        to="/headphones"
                        className="hover:text-blue-600 transition"
                    >
                        Headphones
                    </Link>
                </li>
              < li>
                    <Link
                        to="/earbuds"
                        className="hover:text-blue-600 transition"
                    >
                        Earbuds
                    </Link>
                </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>

            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="hover:text-red-600 cursor-pointer">
                    <Link
                        to="/support"
                        className="hover:text-blue-600 transition"
                    >
                        Help Center
                    </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>

            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="hover:text-red-600 cursor-pointer">
                <Link
                    to="/about"
                    className="hover:text-blue-600 transition"
                >
                    About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4 text-xl">
                <button
                    onClick={() => toast.info("Facebook page coming soon.")}
                    className="hover:text-blue-600 transition"
                >
                    <FaFacebook />
                </button>
                <button
                    onClick={() => toast.info("Instagram page coming soon.")}
                    className="hover:text-pink-500 transition"
                >
                    <FaInstagram />
                </button>
                <button
                    onClick={() => toast.info("X page coming soon.")}
                    className="hover:text-sky-500 transition"
                >
                    <FaTwitter />
                </button>
                <button
                    onClick={() => toast.info("YouTube channel coming soon.")}
                    className="hover:text-red-600 transition"
                >
                    <FaYoutube />
                </button>
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