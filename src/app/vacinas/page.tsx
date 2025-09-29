import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


export default function Vacinas(){
const vacinas = [
{ name: 'BCG', target: 'Prevenção de tuberculose' },
{ name: 'Hepatite B', target: 'Previne hepatite B' },
{ name: 'Tríplice viral (MMR)', target: 'Sarampo, caxumba, rubéola' }
];


return (
<Box>
<Typography variant="h4" gutterBottom>Principais vacinas</Typography>
<List>
{vacinas.map((v, i) => (
<ListItem key={i}>{v.name} — {v.target}</ListItem>
))}
</List>
<Typography variant="body2" sx={{ mt:2 }}>Informações acima são exemplos — sempre consulte fontes oficiais e profissionais de saúde.</Typography>
</Box>
)
}