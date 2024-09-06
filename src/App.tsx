import Header from './components/Header/Header'
import BudgetInput from './components/BudgetInput/BudgetInput'
import StatusBudget from './components/Status/Status'
import CreateItems from './components/CreateItems/CreateItems'
import List from './components/List/List'
import { useState } from 'react'
import './App.css'




function App() {
  const [budget, setBudget] = useState<number>(0)
  const [items, setItems] = useState<any>([])
  const [spent, setSpent] = useState<number>(0)
  const [remaining, setRemaining] = useState<number>(0)

  console.log(items);
    
  const deleteItem = (index: number) => {
    const updatedItems = items.filter((_: any, i:any) => i !== index);
    setItems([...updatedItems]); 
    
    const totalSpent = updatedItems.reduce((acc:any, item:any) => acc + Number(item.price), 0);
    const totalRemaining = budget - totalSpent;
    setSpent(totalSpent);
    setRemaining(totalRemaining);
  };
  
  
  

  const handleBudgetChange = (value: number) => {
    setBudget(value);
    setRemaining(value);
    };

    const handleItemsCreated = (items: {
      item: string;
      price: number;
      category: string;
    }[]) => {
      setItems(items);
      console.log(items);
      const totalSpent = items.reduce((acc, item) => acc + Number(item.price), spent);
      const totalRemaining = budget - totalSpent;
      setSpent(totalSpent);
      setRemaining(totalRemaining);
      const itemsForm = document.querySelector('.ItemsForm') as HTMLDivElement;
        itemsForm.classList.add('ItemsForm-hidden');
    };

   
    
    
    
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="BudgetContainer">
        <BudgetInput onBudgetChange={handleBudgetChange} />
      </div>
      <div className="StatusContainer Status-hidden">
        
      <StatusBudget budget={budget} spent={spent} remaining={remaining} />
      </div>

      <button className="ButtonItems ButtonItems-hidden" onClick={() => {
        const itemsForm = document.querySelector('.ItemsForm') as HTMLDivElement;
        itemsForm.classList.remove('ItemsForm-hidden');
      }}>+</button>
      <div className="ItemsForm ItemsForm-hidden">
        <CreateItems ItemsCreated={handleItemsCreated} />
      </div>
      {items.length > 0 && <div className="BudgetContainer">
        <List items={items} onDelete={deleteItem}></List>
      </div>}
       
    </>
  )
}

export default App
