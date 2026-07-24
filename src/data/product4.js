import xb910n1 from "../assets/images/related/xb910n-1.jpg";
import xb910n2 from "../assets/images/related/xb910n-2.jpg";
import xb910n3 from "../assets/images/related/xb910n-3.jpg";
import xb910n4 from "../assets/images/related/xb910n-4.jpg";
import xb910n5 from "../assets/images/related/xb910n-5.jpg";

import front from "../assets/images/sony/sony-front.jpg";
import ch720n1 from "../assets/images/related/ch720n-1.jpg";
import ultWear1 from "../assets/images/related/ultwear-1.jpg";
import wf1000xm51 from "../assets/images/related/wf1000xm5-1.jpg";


const product4 = {
  id: 4,

  title: "Sony WH-XB910N EXTRA BASS Wireless Headphones",

  brand: "Sony",

  category: "Wireless Headphones",

  price: {
  },

  rating: {
    average: 4.6,
    totalReviews: 265,
},

  description:
"Feel deep, punchy bass with the Sony WH-XB910N EXTRA BASS Wireless Headphones. Featuring powerful EXTRA BASS sound, Dual Noise Sensor technology, long-lasting battery life, and a comfortable over-ear design for immersive listening.",

  images: [
    xb910n1,
    xb910n2,
    xb910n3,
    xb910n4,
    xb910n5,
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
            items: "Headphones only",
            currentPrice: 13990,
            originalPrice: 16990,
            discount: 18,
        },
        {
            id: 2,
            name: "Premium Bundle",
            available: true,
            items: "Headphones + Carry Case",
            currentPrice: 15990,
            originalPrice: 18990,
            discount: 16,
        },
    ],

  specifications: [
    { label: "Connectivity", value: "Bluetooth 5.2" },
    { label: "Battery Life", value: "Up to 30 Hours" },
    { label: "Noise Cancellation", value: "Dual Noise Sensor ANC" },
    { label: "Charging", value: "USB-C Fast Charging" },
    { label: "Weight", value: "252 g" },
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
        id: 5,
        name: "Sony WF-1000XM5",
        image: wf1000xm51,
        rating: 4.9,
        price: 21990,
    },
],

};

export default product4;