import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CampaignCard from './components/CampaignCard';
import Grid from '@mui/material/Grid'; // <--- mais simples para TS

export default function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Vacinas e Campanhas de Vacinação
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid size={{xs:12, sm:6, md:4}}>
          <CampaignCard
            title="Campanha de Influenza"
            description="Proteja-se contra a gripe. Vacinação disponível para todos os públicos prioritários."
            image="https://www.icc.fiocruz.br/wp-content/uploads/2023/09/vacina.jpg"
            alt="Influenza"
            buttonText="Saiba Mais"
            buttonHref="/campanhas"
          />
        </Grid>

        <Grid size={{xs:12, sm:6, md:4}}>
          <CampaignCard
            title="Campanha de Covid-19"
            description="A vacinação é a melhor forma de proteção contra a Covid-19. Confira datas e locais."
            image="https://www.pmvc.ba.gov.br/wp-content/uploads/S%C3%ADmbolo-covid-19-6882296_1280.jpg"
            alt="Covid-19"
            buttonText="Saiba Mais"
            buttonHref="/campanhas"
          />
        </Grid>

        <Grid size={{xs:12, sm:6, md:4}}>
          <CampaignCard
            title="Campanha de Sarampo"
            description="Vacinação contra o sarampo disponível para crianças e adultos não imunizados."
            image="https://oleak.com.br/wp-content/uploads/2025/03/iStock-2152300024-e1743016835795.jpg"
            alt="Sarampo"
            buttonText="Saiba Mais"
            buttonHref="/campanhas"
          />
        </Grid>
      </Grid>

      {/* Botões centralizados */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
        <Button variant="contained" href="/campanhas">
          Ver campanhas ativas
        </Button>
        <Button variant="outlined" href="/vacinas">
          Conhecer vacinas
        </Button>
      </Box>

      {/* Missão */}
      <Box sx={{ mt: 6, maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h5" gutterBottom>
          Missão
        </Typography>
        <Typography variant="body2">
          Promover o acesso à informação de qualidade para aumentar a cobertura vacinal e reduzir a
          desinformação.
        </Typography>
      </Box>
    </Box>
  );
}