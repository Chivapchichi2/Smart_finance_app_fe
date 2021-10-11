import { useLocation } from 'react-router-dom';
import ProductDescription from './input/productDescription';
import ProductCategory from './input/productCategory';
import ProductValue from './input/productValue';
import ProductButtons from './input/productButtons';
import DatePicker from './input/datePicker';

import routes from '../../../routes/routes';

import s from './tabsFrom.module.css';

const TabForm = () => {
  const location = useLocation();

  return (
    <div className={s.tabForm}>
      {location.pathname === routes.reportExpenses ||
      location.pathname === routes.reportIncomes ? null : (
        <DatePicker />
      )}

      <div className={s.formWrapper}>
        <ProductDescription />
        <ProductCategory />
      </div>
      <ProductValue />
      <ProductButtons />
    </div>
  );
};

export default TabForm;
