import React from 'react';
import {Image, StatusBar} from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/Components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn() {
  return (
    <Background>
      <StatusBar translucent backgroundColor="#7159c1" />
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorret={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>
        <SignLink onPress={() => {}}>
          <SignLinkText>Criar conta gratuita.</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
