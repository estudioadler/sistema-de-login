"use client"
import { Button } from '@/components/Button/Button'
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { InputText } from '@/components/InputText/InputText'
import { LinkComponent } from '@/components/LinkComponent/LinkComponent';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { PublicArea } from '@/components/PublicArea/PublicArea';
import { Envelope, Eye, Lock} from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';

export default function Home() {
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
      <PublicArea image="/favicon.ico" alt="Logo da Rocketseat" title="Boas vindas!" subTitle="Faça login e comece a usar!">
        <div className='flex flex-col gap-4'>
          <InputText
              disabled={false}
              fullWidth={true}
              onChange={handleInputChange}
              value={inputValue}
              startIcon={<Envelope />}
              label="Email"
              placeholder='exemplo@seuemail.com'
              />
            <InputText
              disabled={false}
              fullWidth={true}
              onChange={handlePasswordChange}
              value={password}
              label='Senha'
              type='password'
              startIcon={<Lock />}
              placeholder='Sua senha'
              />
            <div className='flex justify-between items-center'>
            <Checkbox/>
            <LinkComponent link='/login/forgotPassword' children="Esqueceu a senha?" />
            </div>
            <Button onClick={() => console.log(inputValue, password)} fullWidth={true}>Acessar minha conta</Button>
            <div className='text-center'>
              Nao tem conta? 
              <LinkComponent link='/register' children=" Cadastre-se" />
            </div>
        </div>
      </PublicArea>
    </PageWrapper>
  )
}
