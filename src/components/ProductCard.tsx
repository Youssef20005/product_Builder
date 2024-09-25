import { IProduct } from "../interfaces";
import { sliceText } from "../utilities/functions";
import Button from "./Ui/Button";
import Image from "./Image";

interface Iprops {
  product: IProduct;
}
const ProductCard = ({ product }: Iprops) => {
  const { title, description, imageURL, price, category } = product;

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md flex flex-col p-2 ">
      <Image
        className="rounded-md lg:object-cover h-52 w-full"
        imageUrl={imageURL}
        alt="Product Name"
      />
      <h2>{title}</h2>
      <p>{sliceText(description)}</p>

      <div className="flex items-center space-x-2 my-4">
        <span className="h-5 w-5 rounded-full bg-yellow-400 cursor-pointer"></span>
        <span className="h-5 w-5 rounded-full bg-indigo-700 cursor-pointer"></span>
        <span className="h-5 w-5 rounded-full bg-red-700   cursor-pointer "></span>
      </div>

      <div className="flex items-center justify-between mb-2 ">
        <span className="text-indigo-700 font-bold">${price}</span>

        <Image
          className="rounded-full object-bottom h-10 w-10"
          imageUrl={category.imageURL}
          alt="Product Name"
        />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Button
          className="bg-indigo-700"
          width={"w-full"}
          onClick={() => {
            console.log("edit");
          }}
        >
          EDIT
        </Button>
        <Button className="bg-red-700  " width={"w-full"}>
          DELETE
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
