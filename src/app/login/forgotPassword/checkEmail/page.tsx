
"use client"
import { Button } from '@/components/Button/Button'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { PublicArea } from '@/components/PublicArea/PublicArea';


export default function ConfirmForgotPassword () {

    return (
        <PageWrapper>
            <PublicArea image="/favicon.ico" alt="Logo da Rocketseat" title="Confira seu e-mail!"
                subTitle="Enviamos um link para exemplo@email.com caso não tenha recebido, clique para reenviar:"> 
                    <Button onClick={() => console.log('clicou')} fullWidth={true}>Reenviar Link</Button>
            </PublicArea>
        </PageWrapper>
    )
}