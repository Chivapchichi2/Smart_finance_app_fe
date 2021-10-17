import TabForm from '../../../components/tabs/tabsForm/tabForm';
import BackToMain from '../../../components/balanceWrapper/backToMain/backToMain';
import s from './incomesView.module.css';
import { endpoints, incomesCategory, catIncomes } from '../../../helpers';

const incomesView = () => (
  <div className={s.incomesContainer}>
    <BackToMain />
    <TabForm
      endpoint={endpoints.income}
      data={incomesCategory}
      catName={catIncomes}
      inc
    />
  </div>
);

export default incomesView;
