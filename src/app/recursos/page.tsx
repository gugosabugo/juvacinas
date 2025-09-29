import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


export default function Recursos(){
return (
<Box>
<Typography variant="h4" gutterBottom>Recursos</Typography>
<List>
<ListItem>Guia de vacinação (PDF) — <a href="#">Download</a></ListItem>
<ListItem>Calendário vacinal — <a href="#">Ver calendário</a></ListItem>
<ListItem>Vídeos educativos — <a href="#">Assistir</a></ListItem>
</List>
</Box>
)
}