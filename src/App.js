import React, { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import foodsData from "./foods.json"
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {

  const [foods, setFoods] = useState(foodsData)

  const handleAddFood = (newFood) => {
    const copy = [...foods]
    copy.push(newFood)
    setFoods(copy)
  }

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm handleAddFood={handleAddFood}/>

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <Search foods={foods} setsFood={setFoods}/>

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foods.map((oneFood) => {
          return <>
          <FoodBox food={oneFood}/>
          
          </>
        })}
      </Row>
    </div>
  );
}

export default App