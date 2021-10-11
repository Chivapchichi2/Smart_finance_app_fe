import TabForm from '../../../components/tabs/tabsForm/tabForm';
import BackToMain from '../../../components/balanceWrapper/backToMain';
import s from './expensesView.module.css';

const ExpensesView = () => (
  <div className={s.expensesContainer}>
    <BackToMain />
    <TabForm />
  </div>
);

export default ExpensesView;
