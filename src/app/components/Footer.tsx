import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{ py: 2, textAlign: 'center', bgcolor: '#f5f5f5' }}
        >
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} Programas de Vacinação - Informação pública
            </Typography>
        </Box>
    );
}
