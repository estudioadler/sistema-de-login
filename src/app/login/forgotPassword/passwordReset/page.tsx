"use client"
import { Button } from '@/components/Button/Button'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { PublicArea } from '@/components/PublicArea/PublicArea';

export default function PasswordReset () {
    return (
      <PageWrapper>
            <PublicArea image="/favicon.ico" alt="Logo da Rocketseat" title="Sua senha foi redefinida!"
                subTitle="Clique no botão abaixo para acessar sua conta."> 
                    <Button onClick={() => console.log('clicou')} fullWidth={true}>Acessar minha conta</Button>
            </PublicArea>
        </PageWrapper>
    )
  }
  