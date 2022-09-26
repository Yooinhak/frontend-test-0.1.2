import React, { useState } from 'react';
import Unit from './components/Unit';

import { IShoppingSale } from './api/structures/shoppings/sales/IShoppingSale';
import { IShoppingSaleUnitStock } from './api/structures/shoppings/sales/IShoppingSaleUnitStock';

interface Props {
  sale: IShoppingSale;
}

function App({ sale }: Props) {
  const [stocks, setStocks] = useState<IShoppingSaleUnitStock>();
  return (
    <div>
      <h1>{sale.content.title}</h1>
      <img
        style={{ width: '100%' }}
        src='https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/fef411d5-58f5-4bcf-8b29-15e9c5f71e77.jpeg'
        alt={sale.content.title}
      />
      <div>
        <h2>옵션</h2>
        <Unit
          unit={sale.units[0]}
          key={sale.units[0].id}
          setStocks={setStocks}
        />
        {stocks && (
          <>
            <h1>{stocks.name}</h1>
            <h1>{stocks.price.real.toLocaleString('ko-KR')}원</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
