import React from 'react';
import { IShoppingSaleUnitOption } from '../api/structures/shoppings/sales/IShoppingSaleUnitOption';
import { IShoppingSaleUnitStockElement } from '../api/structures/shoppings/sales/IShoppingSaleUnitStockElement';

interface Props {
  option: IShoppingSaleUnitOption;
  elements: IShoppingSaleUnitStockElement[];
  setElements: React.Dispatch<
    React.SetStateAction<IShoppingSaleUnitStockElement[]>
  >;
}

const SingleOption = ({ option, elements, setElements }: Props) => {
  const selectHandler = (e: any) => {
    const newElements = elements.map((element) =>
      element.option_id === option.id
        ? {
            option_id: option.id,
            candidate_id: e.target.value,
          }
        : element,
    );
    setElements(newElements);
  };

  return (
    <select name={option.name} onChange={selectHandler}>
      <option value={option.name}>{option.name}</option>
      {option.candidates.map((candidates) => (
        <option value={candidates.id} key={candidates.id}>
          {candidates.name}
        </option>
      ))}
    </select>
  );
};

export default SingleOption;
