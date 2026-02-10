import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

import { db } from "../src/db";
import { products } from "../src/db/schema";

const nikeProducts = [
  {
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU accents.",
    price: 13000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4 oucx9xu5mr5b/air-max-90-mens-shoes-6n3vKB.png",
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.",
    price: 11000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5xqQ6q.png",
  },
  {
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors.",
    price: 11500,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a3e7dead-1ad2-4c40-996d-93ebc8df0cca/dunk-low-retro-mens-shoes-5FQWGR.png",
  },
  {
    name: "Nike Blazer Mid '77 Vintage",
    description:
      "In the '70s, Nike was the new shoe on the block. So new in fact, that we were still breaking into the basketball scene and testing prototypes on the feet of our local team.",
    price: 10500,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/36541575-650a-412f-87d3-9824636655c6/blazer-mid-77-vintage-mens-shoes-nw30B2.png",
  },
  {
    name: "Nike Air Max 97",
    description:
      "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full speed ahead.",
    price: 17500,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e00319b-648c-4g6a-93e5-33306912384c/air-max-97-mens-shoes-LJmK45.png",
  },
];

async function main() {
  console.log("Seeding products...");
  try {
    await db.insert(products).values(nikeProducts);
    console.log("Seeding complete!");
  } catch (error) {
    console.error("Error seeding products:", error);
  } finally {
    process.exit(0);
  }
}

main();
