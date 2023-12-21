"use client"
import { Button } from '@/components/Button/Button'
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { InputText } from '@/components/InputText/InputText'
import { LinkComponent } from '@/components/LinkComponent/LinkComponent';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { PublicArea } from '@/components/PublicArea/PublicArea';
import { VerifyPassword } from '@/components/VerifyPassword/VerifyPassword';
import { Envelope, EyeSlash, Lock } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';

export default function Register() {
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (value: any) => {
    setInputValue(value);
  };

  const handlePasswordChange = (value: any) => {
    setPassword(value);
  };
  return (
    <PageWrapper>
      <PublicArea image="/favicon.ico" alt="Logo da Rocketseat" title="Vamos começar!" subTitle="Primeiro precisamos definir um e-mail e senha que você irá usar para acessar a sua conta.">
        <div className='flex flex-col gap-4'>
          <InputText
            disabled={false}
            fullWidth={true}
            onChange={handleInputChange}
            value={inputValue}
            startIcon={<Envelope size={18} />}
            label="Insira seu e-mail"
            placeholder='exemplo@seuemail.com'
          />
          <InputText
            disabled={false}
            fullWidth={true}
            onChange={handlePasswordChange}
            value={password}
            label='Defina sua senha'
            type='password'
            startIcon={<Lock size={18} />}
            endIcon={<EyeSlash size={18} />}
            placeholder='Sua senha'
          />
          <VerifyPassword />

          <Button url="/register/verifyEmail" fullWidth={true}>Avançar</Button>
          <div className='text-center'>
            Já tem uma conta?
            <LinkComponent link='/register' children=" Faça login" underline={true} />
          </div>
        </div>
      </PublicArea>
    </PageWrapper>
  )
}
