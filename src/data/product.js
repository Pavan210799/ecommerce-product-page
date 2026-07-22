import front from "../assets/images/sony/sony-front.jpg";
import side from "../assets/images/sony/sony-side.jpg";
import folded from "../assets/images/sony/sony-folded.jpg";
import cover from "../assets/images/sony/sony-cover.jpg";
import lifestyle from "../assets/images/sony/sony-lifestyle.jpg";

import ch720n from "../assets/images/related/ch720n.jpg";
import ultWear from "../assets/images/related/ultwear.jpg";
import xb910n from "../assets/images/related/xb910n.jpg";
import inzone from "../assets/images/related/inzone.jpg";
import wf1000xm5 from "../assets/images/related/wf1000xm5.jpg";
import whch520 from "../assets/images/related/whch520.jpg";


const product = {
  id: 1,

  title: "Sony WH-1000XM6 Wireless Noise-Cancelling Headphones",

  brand: "Sony",

  category: "Wireless Headphones",

  price: {
  },

  rating: {
        average: 4.8,
        totalReviews: 243,
  },

  description:
  "Experience premium sound with the Sony WH-1000XM6 Wireless Noise-Cancelling Headphones. Featuring industry-leading noise cancellation, crystal-clear audio, up to 30 hours of battery life, and all-day comfort, these headphones are designed to deliver an immersive listening experience whether you're travelling, working, or relaxing.",

  images: [
    front,
    side,
    folded,
    cover,
    lifestyle,
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
      items : "Headphones only",
      currentPrice: 34990,
      originalPrice: 39990,
      discount: 13
    },
    {
      id: 2,
      name: "Premium Bundle",
      available: true,
      items : "Headphones + Case",
      currentPrice: 37990,
      originalPrice: 42990,
      discount: 12
    },
  ],

  specifications: [
  { label: "Connectivity", value: "Bluetooth 5.3" },
  { label: "Battery Life", value: "Up to 30 Hours" },
  { label: "Noise Cancellation", value: "Active Noise Cancellation" },
  { label: "Charging", value: "USB-C Fast Charging" },
  { label: "Weight", value: "254 g" },
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
          name: "Sony WH-CH720N",
          image: ch720n,
          rating: 4.5,
          price: 9990,
      },
      {
          id: 2,
          name: "Sony ULT Wear",
          image: ultWear,
          rating: 4.7,
          price: 16990,
      },
      {
          id: 3,
          name: "Sony WH-XB910N",
          image: xb910n,
          rating: 4.6,
          price: 13990,
      },
      {
          id: 4,
          name: "Sony INZONE H9",
          image: inzone,
          rating: 4.8,
          price: 19990,
      },
      {
          id: 5,
          name: "Sony WF-1000XM5",
          image: wf1000xm5,
          rating: 4.9,
          price: 21990,
      },

      {
          id: 6,
          name: "Sony WH-CH520",
          image: whch520,
          rating: 4.6,
          price: 4490,
      },
  ],

};

export default product;