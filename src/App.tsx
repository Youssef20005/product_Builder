import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Ui/Modal";
import { formInputsList, productList } from "./data";
import Button from "./components/Ui/Button";
import Input from "./components/Ui/Input";
import { IProduct } from "./interfaces";

const App = () => {

  const defaultProduct={
    title:"",
    description:"",
    imageURL:"",
    price:"",
    colors:[],
    category:{
      name:"",
      imageURL:""
    }
  }
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const [product,setProuduct]=useState<IProduct>(defaultProduct)
  const onChangeHandeler=(e:ChangeEvent<HTMLInputElement>)=>{
 const {value,name}= e.target;
  setProuduct({...product,[name]:value})

  }
  const onSubmitHandler=(e:FormEvent<HTMLFormElement>):void=>{
  e.preventDefault();
  console.log(product);
  setProuduct(defaultProduct);
  }
  const cancelHandler=()=>{
    closeModal();
    

  }
  const renderList = productList.map((product) => (
    <ProductCard key={product.id} product={product}  />
    
  ));
  const renderForm=formInputsList.map((input)=>(
    <div className="flex flex-col">
      <label htmlFor={input.id} className="mb-1 font-medium text-gray-700 text-sm">{input.label} </label>
      <Input type={input.type} name={input.name} id={input.id} onChange={onChangeHandeler} value={product[input.name]} />
    </div>
  ));
  return (
    <main className="container">
      <Button className="bg-indigo-700 hover:bg-indigo-800 w-full" onClick={openModal}>ADD</Button>
      <div className=" rounded-md border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 gap-2 md:gap-4 m-5">
        {renderList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title={"ADD A NEW PRODUCT" }>
        <form className="space-y-3" onSubmit={onSubmitHandler}>
        {renderForm}

        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-700 hover:bg-indigo-800 w-full" >Submit</Button>
          <Button className="bg-gray-400 hover:bg-slate-500 w-full" onClick={cancelHandler}>Cancel</Button>
        </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
