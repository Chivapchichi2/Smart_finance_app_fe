import ProductDescription from './input/productDescription';
import ProductCategory from './input/productCategory';
import ProductValue from './input/productValue';
import ProductButtons from './input/productButtons';

import s from './tabsFrom.module.css';

const TabForm = () => (
  <div className={s.tabForm}>
    <div className={s.formWrapper}>
      <ProductDescription />
      <ProductCategory />
    </div>
    <ProductValue />
    <ProductButtons />
  </div>
);

export default TabForm;
