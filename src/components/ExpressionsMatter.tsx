import React, { useState } from 'react';

const ExpressionsMatter: React.FC = () => {
    const [a, setA] = useState<number>(1);
    const [b, setB] = useState<number>(1);
    const [c, setC] = useState<number>(1);
    const [maxValue, setMaxValue] = useState<number | null>(null);

    const calculateMaxValue = (a: number, b: number, c: number) => {
        const values = [
            a + b + c,
            a * b * c,
            a * (b + c),
            (a + b) * c,
            a + b * c,
            a * b + c
        ];
        return Math.max(...values);
    };

    const handleCalculate = () => {
        const result = calculateMaxValue(a, b, c);
        setMaxValue(result);
    };

    return (
        <div className="expressions-matter">
            <h1>sonlarni kiriting</h1>
            <div className="input-group">
                <label>
                    a: 
                    <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
                </label>
                <label>
                    b: 
                    <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
                </label>
                <label>
                    c: 
                    <input type="number" value={c} onChange={(e) => setC(Number(e.target.value))} />
                </label>
            </div>
            <button onClick={handleCalculate}>hisoblang</button>
            {maxValue !== null && <h2>javob: {maxValue}</h2>}
        </div>
    );
};

export default ExpressionsMatter;
