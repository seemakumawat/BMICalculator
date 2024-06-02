import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
;

const BMICalculator = () =>{
    const [height,setHeight]=useState("");
    const [weight,setWeight]=useState("");
    const [bmi,setBmi]=useState("");
    const [bmiStatus,setBmiStatus]=useState("");
    const [text,setText]=useState("");

    const getHeight = (e) =>{
        setHeight(e.target.value);
            
    };
    const getWeight = (e) =>{
        setWeight(e.target.value);
            
    };
    
    const handleClear = () =>{
            setHeight("");
            setWeight("");
    };

    const handleBmiChange =()=>{
        if (height && weight)
        {
            const newHeight=height/100;
            const bmiValue=(weight/(newHeight*newHeight));
            setBmi(bmiValue.toFixed(2));

            if (bmiValue<18.5)
            {
                setBmiStatus('Under Weight');
            }
            else if(bmiValue>=18.5 && bmiValue<24.9)
            {
                setBmiStatus('Normal Weight');
            }
            else if(bmiValue>=24.9 && bmiValue<29.9)
            {
                setBmiStatus('Over Weight');
            }
            else 
            {
                setBmiStatus('Obese');
            }
        }
    };
    return(<>
    <div className='container'>
        <div className="row mt-5">
            <h1 className='text-center '>BMI Calculator</h1>
            <div className="col ms-5">
           
                    <div className="mb-3">
                    <div className="row"><label htmlFor="height" className="htmlForm-label">height</label></div>
                    <input type="text" className="htmlForm-control" value={height} onChange={(e) =>getHeight(e)} id="height" aria-describedby="emailHelp"/>
                    
                    </div>
                    <div className="mb-3">
                    <div className="row"><label htmlFor="weight" className="htmlForm-label">weight</label></div>
                    <input type="text" className="htmlForm-control" value={weight} onChange={(e) =>getWeight(e)} id="weight"/>
                    </div>
                
                    <button type="submit" className="btn btn-primary " onClick={handleBmiChange}>BMI Value</button>
                    <button  className="btn btn-primary ms-2" onClick={handleClear}>Clear</button>
                    
                    

            </div>
        </div>
                    <div className="row ms-5">
                    <p className='lead mt-5'>
                        <h5>Your BMI Value={bmi}</h5>
                        <h5>BMI Status={bmiStatus}</h5>
                    </p>
                    </div>
    </div>          
    
    
    </>) ;
};
export default BMICalculator;