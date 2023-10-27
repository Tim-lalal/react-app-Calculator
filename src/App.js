import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import "./styles.css";
import { GlobalProvider } from './context/GlobalState';
import LoginStatus from './components/LoginStatus';

const App = () => {
  return (
    <GlobalProvider>
      <div className='container'>
        <Balance></Balance>
        <IncomeExpense></IncomeExpense>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
      <LoginStatus isLoggedIn={true} name='Xiaobai'></LoginStatus>
    </GlobalProvider>
  );
}

export default App;
