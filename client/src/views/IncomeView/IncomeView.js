import { useState, useEffect, useContext } from "react";
import { Context } from "../../../context";
import InstructorRoute from "../../../components/routes/InstructorRoute";
import axios from "axios";
import {
  DollarOutlined,
  SettingOutlined,
  SyncOutlined,
} from "@ant-design/icons";
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'fas fa-money-bill-wave',
    },
    {
      title: 'Competitive Differentation',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icon: 'fas fa-trophy',
    },
    {
      title: 'Keep Your Clients Loyal',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      icon: 'fas fa-heart',
    },
    {
      title: 'Automated Sales Process',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      icon: 'fas fa-cog',
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
