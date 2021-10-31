import * as React from "react";

const NumberControl = (props) => {
    const value = props.value;

    return (
        <div className="relative">
            <button
                type="button"
                className="absolute left-0 inset-y-0 px-1.5 text-gray-400"
                onClick={() => {
                    if (value > 0) {
                        props.onChange(value - 1);
                    }
                }}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 12H4"
                    />
                </svg>
            </button>
            <input
                type="text"
                required
                className="block w-full px-9 text-center shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
                value={value}
                onChange={(ev) => {
                    const value = ev.target.value;

                    const numValue = Number(value);

                    if (!isNaN(numValue)) {
                        props.onChange(numValue);
                    }
                }}
                id={props.id}
            />
            <button
                type="button"
                className="absolute right-0 inset-y-0 px-1.5 text-gray-400"
                onClick={() => {
                    props.onChange(value + 1);
                }}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            </button>
        </div>
    );
};

const Label = (props) => (
    <label htmlFor={props.htmlFor} className="block text-xs text-gray-500">
        {props.children}
    </label>
);

export const BillSplitter = () => {
    const [result, setResult] = React.useState("0.00");

    const [billTotal, setBillTotal] = React.useState("614.88");
    const [pax, setPax] = React.useState(4);

    console.log({ billTotal, result, pax });

    return (
        <div className="max-w-4xl mx-auto px-3 py-12 space-y-6 bg-white shadow-lg rounded-2xl">
            <div>
                <h1 className="text-2xl font-bold mb-4">Bill Splitter</h1>
            </div>
            <div className="grid sm:grid-cols-1 gap-5">
                <div className="space-y-5">
                    <div>
                        <Label htmlFor="billTotal">Bill total</Label>
                        <input
                            value={billTotal}
                            onChange={(ev) => setBillTotal(ev.target.value)}
                            type="number"
                            id="billTotal"
                            className="block w-full rounded-md focus:ring-yellow-300 focus:border-yellow-300 border-gray-300"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="pax">Pax</Label>
                        <NumberControl
                            id="pax"
                            value={pax}
                            onChange={(value) => setPax(value)}
                        />
                    </div>
                    <div className="space-y-3">
                        <button
                            type="button"
                            className="w-full px-3 py-1 bg-yellow-300 text-white rounded shadow"
                            onClick={() => setResult((billTotal / pax).toFixed(2))}
                        >
                            Split
                        </button>
                        <button
                            type="button"
                            className="w-full px-3 py-1 border border-yellow-300 text-yellow-300 rounded shadow"
                            onClick={() => {
                                setBillTotal("");
                                setPax(1);
                            }}
                        >
                            Clear
                        </button>
                    </div>


                </div>


                <div className="space-y-5">
                    <div className="text-gray-500">Each pax need to pay</div>
                    <div>
                        <output>
                            <span id="result" className="text-6xl tabular-nums font-mono">
                                {result}
                            </span>
                        </output>
                    </div>
                </div>


            </div>
        </div>
    );
};
