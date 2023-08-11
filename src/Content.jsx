import axios from "axios";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function Content() {
  var products = [
    {
      name: "Tie-dye Sweatshirt",
      price: 15.99,
      description: "very cool retro, sweatshirt",
      imageURL:
        "https://images.unsplash.com/photo-1590513945490-f4e782e25d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRpZSUyMGR5ZSUyMHNoaXJ0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Record Player",
      price: 25,
      description: "turntable for playing records",
      imageURL:
        "https://images.unsplash.com/photo-1593078166039-c9878df5c520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Puppy",
      price: 15,
      description: "an awesome pet",
      imageURL:
        "https://media.istockphoto.com/id/636475496/photo/portrait-of-brown-puppy-with-bokeh-background.jpg?s=612x612&w=0&k=20&c=Ot63dQOYplm0kLJdlSVWbtKGwGkuZfnfdwH5ry9a6EQ=",
    },
  ];
  return (
    <div>
      <ProductsNew />
      <ProductsIndex myProducts={products} />
    </div>
  );
}
