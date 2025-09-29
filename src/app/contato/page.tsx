'use client'
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Contato(){
const [nome,setNome] = useState('');
const [mensagem,setMensagem] = useState('');


const enviar = (e:any) => { e.preventDefault(); alert('Mensagem enviada (exemplo)'); }


return (
<Box component="form" onSubmit={enviar} sx={{ maxWidth:600 }}>
<Typography variant="h4" gutterBottom>Contato</Typography>
<TextField fullWidth label="Nome" value={nome} onChange={(e)=>setNome(e.target.value)} sx={{ mb:2 }} />
<TextField fullWidth multiline rows={4} label="Mensagem" value={mensagem} onChange={(e)=>setMensagem(e.target.value)} sx={{ mb:2 }} />
<Button type="submit" variant="contained">Enviar</Button>
</Box>
)
}