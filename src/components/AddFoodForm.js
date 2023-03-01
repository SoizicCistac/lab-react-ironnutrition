import React, { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {
    const { handleAddFood } = props

    const [ name, setName ] = useState('')
    const [ image, setImage ] = useState('')
    const [ calories, setCalories ] = useState('')
    const [ servings, setServings ] = useState('')

    const handleNameChange = (e) => setName(e.target.value)
    const handleImageChange = (e) => setImage(e.target.value)
    const handleCaloriesChange = (e) => setCalories(e.target.value)
    const handleServingsChange = (e) => setServings(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        const foodToCreate = {
            name,
            calories,
            image,
            servings
        }
        handleAddFood(foodToCreate)
        setName('')
        setCalories('')
        setImage('')
        setServings('')
    }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={() => handleNameChange()} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input type="text" value={image} onChange={() => handleImageChange()}/>

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input type="number" value={calories} onChange={() => handleCaloriesChange()}/>


      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input type="number" value={servings} onChange={() => handleServingsChange()}/>


      <button type="submit" onClick={() => handleSubmit()}>Create</button>
    </form>
  );
}

export default AddFoodForm;