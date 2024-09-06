import './BudgetInput.css'
import { useState } from 'react'


const BudgetInput = ({ onBudgetChange }: { onBudgetChange: any }) => {
    const [budgetComp, setBudget] = useState<number>(0)


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        Number(value)
        setBudget(Number(value))   
    }



    const handleSubmit = () => {
        if (budgetComp <= 0) {
            alert('Please enter a valid number')
            return
        }else{

            onBudgetChange(budgetComp)
            console.log('Submit')
            const budgetinput = document.querySelector('.BudgetContainer')
        budgetinput?.classList.add('BudgetContainer-hidden')
        const status = document.querySelector('.StatusContainer')
        status?.classList.remove('Status-hidden')
        const items = document.querySelector('.ButtonItems')
        items?.classList.remove('ButtonItems-hidden')
        
    }

        
    }

    return (
        <div className="BudgetInput">
            <div className="BudgetInput-content">
                <h2>Enter your budget</h2>
                <input type="number" placeholder="Enter your budget" className="NumberInput" onChange={handleInput} />
                <button className="SubmitButton" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}


export default BudgetInput