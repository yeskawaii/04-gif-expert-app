import { useState } from "react";
import AddCategory from "./components/AddCategory";
export default function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    //Valorant
    setCategories([...categories, "Valorant"]);
  };

  //   console.log(categories);
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory />
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        {/* <li>ABC</li> */}
      </ol>
    </>
  );
}
