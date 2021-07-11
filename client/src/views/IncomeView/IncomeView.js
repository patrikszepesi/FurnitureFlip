import { useState, useEffect, useContext } from "react";
import { Context } from "../../../context";
import InstructorRoute from "../../../components/routes/InstructorRoute";
import axios from "axios";
import { stripeCurrencyFormatter } from "../../../utils/helpers";
import {
  Advantages,
} from './components';
import { Section } from '../../../components/organisms';


const IncomeView = () => {
  const [balance, setBalance] = useState({ pending: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sendBalanceRequest();
  }, []);

  const sendBalanceRequest = async () => {
    const { data } = await axios.get("/api/instructor/balance");
    setBalance(data);
  };
  const advantages = [
    {
      title: 'Build Recurring Revenue',
      description:
        'Jelenlegi bevételek az össes eladott termék után. Beleszámolva a még be nem folyt összeget',
      icon: 'fas fa-money-bill-wave',
    },
    {
      title: 'Competitive Differentation',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icon: 'fas fa-trophy',
    },
  ];
  const handlePayoutSettings = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/instructor/payout-settings");
      window.location.href = data;
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert("Unable to access payout settings. Try later.");
    }
  };

  return (
    <InstructorRoute >
    <Section>
        <Advantages data={advantages} />
      </Section>
    </InstructorRoute>
  );
};

export default IncomeView;
