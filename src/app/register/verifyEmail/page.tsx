"use client"
import { Button } from '@/components/Button/Button'
import { LinkComponent } from '@/components/LinkComponent/LinkComponent';
import { OtpComponent } from '@/components/OtpComponent/OtpComponent';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { PublicArea } from '@/components/PublicArea/PublicArea';


export default function Register() {

    return (
        <PageWrapper>
            <PublicArea image="/favicon.ico" alt="Logo da Rocketseat" title="Verifique seu e-mail"
                subTitle={`Insira o código que enviamos para ${localStorage.getItem('email')}. Caso não tenha recebido, clique em reenviar.`}>
                <div className='flex flex-col gap-4'>
                <OtpComponent />
                    <Button url='/register/confirmEmail' fullWidth={true}>Reenviar código</Button>
                    <div className='text-center'>
                        Já tem uma conta?
                        <LinkComponent link='/register' children=" Faça login" underline={true} />
                    </div>
                </div>
            </PublicArea>
        </PageWrapper>
    )
}
