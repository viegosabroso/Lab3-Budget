import  './CreateItems.css';
import { useState } from 'react';

const CreateItems = ({ItemsCreated}: {ItemsCreated: any}) => {

    const [items, setItems] = useState<any>([])
    
    const HandleSubmitItems = () => {
        console.log("Item submitted")
        const itemInput = document.querySelector('.ItemInput') as HTMLInputElement;
        const priceInput = document.querySelector('.PriceInput') as HTMLInputElement;
        const Dropdown = document.querySelector('.Dropdown') as HTMLSelectElement;
        const date = document.querySelector('.Date') as HTMLInputElement;
        setItems([...items, {item: itemInput.value, price: priceInput.value, category: Dropdown.value, date: date.value}]);
        ItemsCreated([...items, {item: itemInput.value, price: priceInput.value, category: Dropdown.value, date: date.value}]);
        
        
    }

    return (
        <>
        <div className="CreateItems">
            <button className="ButtonsClose" onClick={
                () => {
                    const itemsForm = document.querySelector('.ItemsForm') as HTMLDivElement;
                    itemsForm.classList.add('ItemsForm-hidden');
            }}>+</button>
            <div className="CreateItems-content">
                <h2>Enter your items</h2>
                <input type="text" placeholder="Enter your item" className="ItemInput" />
                <input type="number" placeholder="Enter your price" className="PriceInput" />
                <select className="Dropdown">

                    <option value="House">House</option>
                    <option value="Subscriptions">Subscriptions</option>
                    <option value="Food">Food</option>
                
                </select>
                <input type="date" className="Date"  />
                <button className="SubmitButton" onClick={HandleSubmitItems}>Submit</button>
             </div>   
            </div>
        </>
        
    );
}

export default CreateItems;