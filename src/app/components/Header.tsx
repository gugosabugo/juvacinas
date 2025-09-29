'use client'
import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import VaccinesIcon from '@mui/icons-material/LocalHospital';


export default function Header(){
return (
<AppBar position="static">
<Toolbar>
<VaccinesIcon sx={{ mr:1 }} />
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
Vacinas & Campanhas
</Typography>
<Box sx={{ display: 'flex', gap: 1 }}>
<Button color="inherit" component={Link} href="/">Início</Button>
<Button color="inherit" component={Link} href="/campanhas">Campanhas</Button>
<Button color="inherit" component={Link} href="/vacinas">Vacinas</Button>
<Button color="inherit" component={Link} href="/recursos">Recursos</Button>
<Button color="inherit" component={Link} href="/contato">Contato</Button>
</Box>
</Toolbar>
</AppBar>
)
}