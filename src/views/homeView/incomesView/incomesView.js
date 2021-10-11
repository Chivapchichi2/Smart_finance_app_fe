import TabForm from '../../../components/tabs/tabsForm/tabForm';
import BackToMain from '../../../components/balanceWrapper/backToMain/backToMain';
import s from './incomesView.module.css';

const incomesView = () => (
  <div className={s.incomesContainer}>
    <BackToMain />
    <TabForm />
  </div>
);

export default incomesView;
