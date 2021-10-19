import TabForm from '../../../components/tabs/tabsForm/tabForm';
import BackToMain from '../../../components/balanceWrapper/backToMain';
import s from './expensesView.module.css';
import { endpoints, expensesCategory, catExpenses } from '../../../helpers';

const ExpensesView = () => (
  <div className={s.expensesContainer}>
    <BackToMain />
    <TabForm
      endpoint={endpoints.expense}
      data={expensesCategory}
      catName={catExpenses}
      exp
    />
  </div>
);

export default ExpensesView;
