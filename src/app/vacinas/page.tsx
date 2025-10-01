"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function Vacinas() {
  const vacinas = [
    { name: "BCG", target: "Prevenção de tuberculose", color: "#2e7d32" },
    { name: "Hepatite B", target: "Previne hepatite B", color: "#1565c0" },
    {
      name: "Tríplice viral (MMR)",
      target: "Sarampo, caxumba, rubéola",
      color: "#ef6c00",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #00796b 0%, #26a69a 100%)",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            💉 Principais Vacinas
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Conheça as vacinas essenciais para a prevenção de doenças.
          </Typography>
        </Container>
      </Box>

      {/* Lista de Vacinas em Cards */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {vacinas.map((v, i) => (
            <Grid size={{xs:12, md:4}} key={i}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  textAlign: "center",
                  height: "100%",
                  borderTop: `6px solid ${v.color}`,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 1, color: v.color }}
                >
                  {v.name}
                </Typography>
                <Typography variant="body2">{v.target}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Aviso no rodapé */}
        <Typography
          variant="body2"
          sx={{ mt: 4, textAlign: "center", color: "gray" }}
        >
          ℹ️ Informações acima são exemplos — sempre consulte fontes oficiais e
          profissionais de saúde.
        </Typography>
      </Container>
    </Box>
  );
}
