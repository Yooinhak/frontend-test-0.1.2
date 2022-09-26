import React, { useState, useEffect } from 'react';
import { IShoppingSaleUnit } from '../api/structures/shoppings/sales/IShoppingSaleUnit';
import { IShoppingSaleUnitStock } from '../api/structures/shoppings/sales/IShoppingSaleUnitStock';
import { IShoppingSaleUnitStockElement } from '../api/structures/shoppings/sales/IShoppingSaleUnitStockElement';
import SingleOption from './SingleOption';

interface Props {
  unit: IShoppingSaleUnit;
  setStocks: React.Dispatch<
    React.SetStateAction<IShoppingSaleUnitStock | undefined>
  >;
}

const Unit = ({ unit, setStocks }: Props) => {
  const [elements, setElements] = useState<IShoppingSaleUnitStockElement[]>([]);
  const btnHandler = () => {
    setStocks(
      unit.stocks.find(
        (stock) =>
          stock.elements.map((v) => Object.entries(v).toString()).join() ===
          elements.map((v) => Object.entries(v).toString()).join(),
      ),
    );
  };

  useEffect(() => {
    const initialState = unit.options.map((option) => {
      return { option_id: option.id, candidate_id: '' };
    });
    setElements(initialState);
  }, [unit.options]);

  return (
    <div>
      <div>{unit.name}</div>
      {unit.options.map((option) => (
        <SingleOption
          option={option}
          key={option.id}
          elements={elements}
          setElements={setElements}
        />
      ))}
      <button onClick={btnHandler}>장바구니에 담기!</button>
    </div>
  );
};

export default Unit;
