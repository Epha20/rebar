import { useState } from "react";

const TextField = () => {
    const [piece, setPiece] = useState('');
    const [piece1, setPiece1] = useState('');
    const [piece2, setPiece2] = useState('');
    const [piece3, setPiece3] = useState('');
    const [result, setResult] = useState('');


    function calculation() {
        
        
       let calc= parseInt(piece) * parseInt(piece1);
       let calc1= parseInt(piece2) * parseInt(piece3);
       let minimum= parseInt(calc) + parseInt(calc1);
       let min = (minimum) / 12;
       
       return (
           setResult(Math.ceil(min)))
       
    }

    
    return (
        <div className="textfield">
<h2>Rebar Calculator</h2>
<form>
    <label>
        Length 1:
    </label>
    <input
    type="number"
    required
    value={piece}
    onChange={(e) => setPiece(e.target.value)}
    />
     <label>
        Quantity 1:
    </label>
    <input
    type="number"
    required
    value={piece1}
    onChange={(e) => setPiece1(e.target.value)}
    />
     <label>
        Length 2:
    </label>
    <input
    type="number"
    required
    value={piece2}
    onChange={(e) => setPiece2(e.target.value)}
    />
     <label>
        Quantity 2:
    </label>
    <input
    type="number"
    required
    value={piece3}
    onChange={(e) => setPiece3(e.target.value)}
    />
     
    <button type="click" onClick={calculation}> Calculate </button>
    <p>The minimum number of rebar needed is {result}</p>
</form>
        </div>
    );
}

export default TextField;