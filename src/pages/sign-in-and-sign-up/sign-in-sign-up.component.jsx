import React from 'react';

// import './sign-in-sign-up.styles.scss';
import { SignInSignUpPageContainer } from './sign-in-sign-up.styles';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUpPage = props => (
  <SignInSignUpPageContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpPageContainer>
);

export default SignInSignUpPage;
