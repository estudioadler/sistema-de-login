"use client"
import { Button } from '@/components/Button/Button'
import { LinkComponent } from '@/components/LinkComponent/LinkComponent';
import { OtpComponent } from '@/components/OtpComponent/OtpComponent';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { PublicArea } from '@/components/PublicArea/PublicArea';


export default function Register() {

    return (
        <PageWrapper>
            <PublicArea image="/favicon.ico" alt="Logo da Rocketseat" title="E-mail verificado!"
                subTitle="O seu login de acesso foi criado. Agora vamos cadastrar a sua conta.">
                <div className='flex flex-col gap-4'>
                    <OtpComponent />
                    <Button url='/register/registerConfirmed' fullWidth={true} disabled={true}>Reenviar código</Button>
                    <div className='text-center'>
                        Já tem uma conta?
                        <LinkComponent link='/register' children=" Faça login" underline={true} />
                    </div>
                </div>
            </PublicArea>
        </PageWrapper>
    )
}
