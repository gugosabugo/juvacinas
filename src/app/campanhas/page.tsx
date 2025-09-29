import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CampaignCard from '../components/CampaignCard';


export default function Campanhas(){
const campanhas = [
{ title: 'Campanha Nacional de Vacinação - Crianças', description: 'Vacinação de rotina para crianças de 0 a 5 anos', dateRange: '01/04/2025 - 30/06/2025', href: '#', image: "https://d24ux3x5lhpqgy.cloudfront.net/6e3a1ee9-ced2-42b4-a999-7df734870ea3" },
{ title: 'Campanha de Influenza', description: 'Proteja-se contra a gripe — grupos prioritários.', dateRange: '15/04/2025 - 15/05/2025', href: '#', image: "https://jpdiagnostica.com.br/wp-content/uploads/2019/05/Influenza-848x414.jpg" }
];


return (
<Box>
<Typography variant="h4" gutterBottom>Campanhas ativas</Typography>
{campanhas.map((c, i) => (
<CampaignCard key={i} title={c.title} description={c.description} dateRange={c.dateRange} actionHref={c.href} image={c.image} alt={''} />
))}


<Typography variant="caption">Dica: consulte a secretaria de saúde local para datas e postos de vacinação.</Typography>
</Box>
)
}