"use client"
import { Button } from '@/components/Button/Button'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { PublicArea } from '@/components/PublicArea/PublicArea';


export default function RegisterConfirmed () {

    return (
        <PageWrapper>
            <PublicArea image="/favicon.ico" alt="Logo da Rocketseat" title="Tudo pronto!"
                subTitle="Seu cadastro foi concluído com sucesso. Agora você já pode acessar sua conta."> 
                    <Button onClick={() => console.log('clicou')} fullWidth={true}>Acessar minha conta</Button>
            </PublicArea>
        </PageWrapper>
    )
}