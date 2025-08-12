import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="inline-block float-right">
      <div className="flex items-center gap-3 ml-auto text-slate-700">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="min-w-[2rem] text-center">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
