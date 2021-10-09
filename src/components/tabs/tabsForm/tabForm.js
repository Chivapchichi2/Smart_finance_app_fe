import ProductDescription from './input/productDescription';
import ProductCategory from './input/productCategory';
import ProductValue from './input/productValue';
import ProductButtons from './input/productButtons';
import DatePicker from './input/datePicker';

import s from './tabsFrom.module.css';

const TabForm = () => (
  <div className={s.tabForm}>
    <DatePicker />
    <div className={s.formWrapper}>
      <ProductDescription />
      <ProductCategory />
    </div>
    <ProductValue />
    <ProductButtons />
  </div>
);

export default TabForm;
