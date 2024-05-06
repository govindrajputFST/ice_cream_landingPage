import React from 'react';

const Flavors = () => {
  // Dummy data for flavors
  const flavors = [
    { id: 1, name: 'Vanilla', description: 'Classic creamy vanilla flavor.' ,image:"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzczMDI2MTE3NTAw/vanilla-ice-cream.webp"},
    { id: 2, name: 'Chocolate', description: ' The Rich and indulgent chocolate flavor.' ,image:"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzcyNzYzMTg3MDY4/chocolate-ice-cream.webp" },
    { id:3,name:"Strawberry" , description: 'Luscious sweetness of our Strawberry flavor.',image:"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzcyNzU4NjY1MDg0/strawberry-ice-cream.webp" },
    { id:4,name:"Mint Chocolate Chip" , description: 'Mint chocolate chip is an flavor composed of mint with small chocolate chips',image:"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzcyNDg5Mzc3NjYw/mint-chocolate-chip-ice-cream.webp" },
    { id:5,name:"Butter Pecon" , description: 'Butter pecan ice cream is actually characterized by vanilla ice cream',image:"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzcyNzYxMjg2NTI0/butter-pecan-ice-cream.webp" },
    { id:6,name:"Coffee" , description: 'universal about the taste of coffee ice cream',image:"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzcyNzYyMjY5NTY0/coffee-ice-cream.webp" },
    {id:"7",name:"Chocolate Chip",description:"chocolate chip flavor is much more reserved in its chippage",image:"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzcyNDkwOTUwNTI0/chocolate-chip.webp"},
    {id:"8",name:"Neapolitan",description:" Naps are individually wrapped square or rectangular pieces of chocolate in assorted flavours",image:"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1254/MjAxNDAzMTMwNzMzNjAyNjQ4/neopolitan.webp"},
    {id:"9",name:"Butterscotch",description:"The browned butter, caramelized sugar, and molasses in this flavor",image:"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzczMDI4NjA3ODY4/butterscotch-ice-cream.webp"},
    {id:"10",name:" Chocolate Peanut Butter",description:"Peanut Butter Cups as a topping",image:"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzcyMjIwOTQyMjA0/chocolate-peanut-butter-ice-cream.webp"},
    {id:"11",name:"Eggnog",description:" a milk punch or an egg milk punch when alcoholic beverages are added, is a rich, chilled, sweetened, dairy-based beverage",image:"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTkwNTgxMzcyNzU3NDg1NDM2/eggnog-ice-cream.webp"},
    // Add more flavors
  ];

  return (
    <section id="flavors">
      <h2>Our Flavors</h2>
      <div className="flavor-container">
        {flavors.map(flavor => (
          <div key={flavor.id} className="flavor">
            <h3>{flavor.name}</h3>
            <img src={flavor.image} alt='kuchh bhi' width="260px"/>
            <p>{flavor.description}</p>
            <button>Select</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Flavors;
