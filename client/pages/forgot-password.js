import React from 'react';
import ForgotPasswordView from '../src/views/ForgotPasswordView';
import Main from '../src/layouts/Main';
import WithLayout from '../src/WithLayout';
const ForgotPassword = () => {
  return (
    <WithLayout
      component={ForgotPasswordView}
      layout={Main}
    />
  )
};

export default ForgotPassword;
