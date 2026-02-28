import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import HomePageCard from "./HomePageCard";
import CarouselCategory from "./CarouselCategory";
import CarouselProduct from "./CarouselProduct";
import { callAPI } from "../utils/CallApi";

const HomePage = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    callAPI("data/products.json").then((data) => {
      setProducts(data);
    });
  }, []);

  const allProducts = products.All || [];

  return (
    <div className="bg-amazonclone-background">
        <div className="min-w-[1080px] max-w-[1500px] m-auto">
            <Carousel />
            
            <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
              
              <HomePageCard 
                title={"We have a surprise for you"}
                img={"../images/home_grid_1.jpg"}
                link={"See terms and conditions"}/>
              
              <HomePageCard 
                title={"Watch The Rings of Power"}
                img={"../images/home_grid_2.jpg"}
                link={"Start streaming now"}/>
              
              <HomePageCard 
                title={"Unlimited Streaming"}
                img={"../images/home_grid_3.jpg"}
                link={"Find out more"}/>
              
              <HomePageCard 
                title={"More titles to explore"}
                img={"../images/home_grid_4.jpg"}
                link={"Browse Kindle Unlimited"}/>
              
              {allProducts.slice(0, 4).map((product) => (
                <HomePageCard 
                  key={product.id}
                  title={product.title}
                  img={product.image_small || product.image}
                  link={"Shop now"}
                  author={product.brand}
                  isBook={true}
                  id={product.id}
                />
              ))}
              
              <HomePageCard 
                title={"Shop Pet Supplies"}
                img={"../images/home_grid_5.jpg"}
                link={"See More"}/>
              
              <HomePageCard 
                title={"Spring Sale"}
                img={"../images/home_grid_6.jpg"}
                link={"See the deals"}/>
              
              <HomePageCard 
                title={"Echo Buds"}
                img={"../images/home_grid_7.jpg"}
                link={"See more"}/>
              
              <HomePageCard 
                title={"Family Plan: 3 months free"}
                img={"../images/home_grid_8.jpg"}
                link={"Learn more"}/>
              
              {allProducts.slice(4, 8).map((product) => (
                <HomePageCard 
                  key={product.id}
                  title={product.title}
                  img={product.image_small || product.image}
                  link={"Shop now"}
                  author={product.brand}
                  isBook={true}
                  id={product.id}
                />
              ))}
              
              <div className="m-3 pt-8 col-span-3 xl:col-span-4">
                <img className="xl:hidden" src={"../images/banner_image_2.jpg"} alt="Banner"/>
              </div>
            </div>

            <CarouselProduct />
            <CarouselCategory />
            
            <div className="h-[200px]">
                <img className="h-[100%] m-auto" src={"../images/banner_image.jpg"} alt="Banner"/>
            </div>
        </div>
    </div>
  )
}

export default HomePage;