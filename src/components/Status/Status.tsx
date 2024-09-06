import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Status.css'

interface StatusProps {
    budget: number;
    spent: number;
    remaining: number;
}

const StatusBudget = ({budget,spent,remaining  }: StatusProps ) => {


    
    return (
        <div className="Status">
            <div className="Status-content">
                <div className="ProgressBar">

                    <CircularProgressbar value={(spent/budget) * 100} text={ `Spendt ${(spent/budget) * 100}%`} styles={{text: {fontSize: '14px',fill: '#000'}, }} />
                </div>
                <div className="StatusMaths">
                    <p>Budet: {budget} $</p>
                    <p>Remaining: {remaining} $</p>
                    <p>Spent: {spent} $</p>
                </div>
            </div>

        </div>
    )
}

export default StatusBudget