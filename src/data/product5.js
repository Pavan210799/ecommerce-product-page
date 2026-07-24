import wf1000xm51 from "../assets/images/related/wf1000xm5-1.jpg";
import wf1000xm52 from "../assets/images/related/wf1000xm5-2.jpg";
import wf1000xm53 from "../assets/images/related/wf1000xm5-3.jpg";
import wf1000xm54 from "../assets/images/related/wf1000xm5-4.jpg";
import wf1000xm55 from "../assets/images/related/wf1000xm5-5.jpg";

import front from "../assets/images/sony/sony-front.jpg";
import ch720n1 from "../assets/images/related/ch720n-1.jpg";
import ultWear1 from "../assets/images/related/ultwear-1.jpg";
import xb910n1 from "../assets/images/related/xb910n-1.jpg";


const product5 = {
  id: 5,

  title: "Sony WF-1000XM5 Truly Wireless Noise-Cancelling Earbuds",

  brand: "Sony",

  category: "Wireless Headphones",

  price: {
  },

  rating: {
    average: 4.9,
    totalReviews: 421,
},
  description:
"Experience premium wireless audio with the Sony WF-1000XM5 Truly Wireless Earbuds. Featuring industry-leading noise cancellation, exceptional Hi-Res sound, crystal-clear calls, and a lightweight design for all-day comfort.",

  images: [
    wf1000xm51,
    wf1000xm52,
    wf1000xm53,
    wf1000xm54,
    wf1000xm55,
  ],

  colors: [
    {
      id: 1,
      name: "Black",
      code: "#111111",
      available: true,
    },
    {
      id: 2,
      name: "Platinum Silver",
      code: "#D9D9D9",
      available: true,
    },
    {
      id: 3,
      name: "Midnight Blue",
      code: "#274C77",
      available: false,
    },
  ],
  packages: [
    {
        id: 1,
        name: "Standard",
        available: true,
        items: "Earbuds only",
        currentPrice: 21990,
        originalPrice: 24990,
        discount: 12,
    },
    {
        id: 2,
        name: "Premium Bundle",
        available: true,
        items: "Earbuds + Protective Case",
        currentPrice: 23990,
        originalPrice: 26990,
        discount: 11,
    },
],

   specifications: [
    { label: "Connectivity", value: "Bluetooth 5.3" },
    { label: "Battery Life", value: "Up to 36 Hours (with Case)" },
    { label: "Noise Cancellation", value: "Adaptive ANC" },
    { label: "Charging", value: "USB-C & Wireless Charging" },
    { label: "Weight", value: "5.9 g (each earbud)" },
    { label: "Warranty", value: "1 Year Manufacturer Warranty" },
], 

  delivery: {
    shipping: "Free Delivery",
    returns: "7 Days Replacement",
    cod: true,
    serviceablePincodes: {
        "530016": {
            available: true,
            estimatedDays: 3,
        },
        "560037": {
            available: true,
            estimatedDays: 4,
        },
        "110001": {
            available: true,
            estimatedDays: 5,
        },
        
    },
  },

  offers: [
    "10% Instant Discount on HDFC Bank Credit Cards",
    "Use coupon SONY500 and get ₹500 OFF",
    "Free Shipping across India",
    "No Cost EMI available for up to 12 months",
  ],

  reviews: [
      {
          id: 1,
          name: "Rahul Sharma",
          rating: 5,
          comment:
              "Excellent sound quality and industry-leading noise cancellation. The battery easily lasts throughout my workday.",
          date: "18 Jul 2026",
      },
      {
          id: 2,
          name: "Priya Verma",
          rating: 4,
          comment:
              "Very comfortable to wear for long hours. The ANC performs exceptionally well during flights and commutes.",
          date: "15 Jul 2026",
      },
      {
          id: 3,
          name: "Arjun Patel",
          rating: 5,
          comment:
              "Premium build quality with crystal-clear audio. Definitely worth the investment for music lovers.",
          date: "12 Jul 2026",
      },
  ],
  relatedProducts: [
    {
        id: 1,
        name: "Sony WH-1000XM6",
        image: front,
        rating: 4.8,
        price: 34990,
    },
    {
        id: 2,
        name: "Sony WH-CH720N",
        image: ch720n1,
        rating: 4.5,
        price: 9990,
    },
    {
        id: 3,
        name: "Sony ULT Wear",
        image: ultWear1,
        rating: 4.7,
        price: 16990,
    },
    {
        id: 4,
        name: "Sony WH-XB910N",
        image: xb910n1,
        rating: 4.6,
        price: 13990,
    },
],
};

export default product5;