"use client"
import { Button } from '@/components/Button/Button'
import { InputText } from '@/components/InputText/InputText';
import { LinkComponent } from '@/components/LinkComponent/LinkComponent';
import { OtpComponent } from '@/components/OtpComponent/OtpComponent';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { PublicArea } from '@/components/PublicArea/PublicArea';
import { Envelope } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';


export default function ForgotPassword() {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (value: any) => {
        setInputValue(value);
    };
    return (
        <PageWrapper>
            <PublicArea image="/favicon.ico" alt="Logo da Rocketseat" title="Esqueceu sua senha?"
                subTitle="Não se preocupe! Enviaremos as instruções para o e-mail cadastrado que deseja recuperar.">
                <div className='flex flex-col gap-4'>
                    <InputText
                        disabled={false}
                        fullWidth={true}
                        onChange={handleInputChange}
                        value={inputValue}
                        startIcon={<Envelope />}
                        label="E-mail para recuperação"
                        placeholder='exemplo@seuemail.com'
                    />
                    <Button onClick={() => console.log('clicou')} fullWidth={true}>Enviar link</Button>
                    <div className='text-center'>
                        Já tem uma conta?
                        <LinkComponent link='/register' children=" Faça login" underline={true} />
                    </div>
                </div>
            </PublicArea>
        </PageWrapper>
    )
}
