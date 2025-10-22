"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

export default function Vacinas() {
  const vacinas = [
    { name: "BCG", target: "Prevenção de tuberculose", color: "#2e7d32" },
    { name: "Hepatite B", target: "Previne hepatite B", color: "#1565c0" },
    {
      name: "Tríplice viral (MMR)",
      target: "Sarampo, caxumba, rubéola",
      color: "#ef6c00",
    },
    {
      name: "DTP (Difteria, Tétano, Coqueluche)",
      target: "Protege contra difteria, tétano e coqueluche",
      color: "#6a1b9a",
    },
    {
      name: "Poliomielite",
      target: "Prevenção contra poliomielite",
      color: "#00897b",
    },
    {
      name: "HPV",
      target: "Previne infecções por vírus do papiloma humano",
      color: "#c2185b",
    },
  ];

  const handleCardClick = () => {
    window.open("https://www.gov.br/saude/pt-br/vacinacao", "_blank");
  };

  return (
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh", pb: 6 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #00796b 0%, #26a69a 100%)",
          color: "white",
          py: { xs: 6, md: 8 },
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          mb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textShadow: "2px 2px 6px rgba(0,0,0,0.4)",
              letterSpacing: 1,
            }}
          >
            💉 Principais Vacinas
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 500 }}>
            Conheça as vacinas essenciais para a prevenção de doenças.
          </Typography>
        </Container>
      </Box>

      {/* Lista de Vacinas em Cards */}
      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 6 } }}>
        <Grid container spacing={4}>
          {vacinas.map((v, i) => (
            <Grid size={{xs:12, md:4}} key={i}>
              <Paper
                onClick={handleCardClick}
                role="button"
                tabIndex={0}
                elevation={6}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  textAlign: "center",
                  height: "100%",
                  borderTop: `6px solid ${v.color}`,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 12px 24px ${v.color}80`,
                  },
                  outline: "none",
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleCardClick();
                  }
                }}
              >
                <LocalHospitalIcon
                  sx={{ fontSize: 48, color: v.color, mb: 1 }}
                  aria-label={`Ícone da vacina ${v.name}`}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: v.color,
                    letterSpacing: 0.5,
                  }}
                >
                  {v.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", minHeight: 54 }}
                >
                  {v.target}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Aviso no rodapé */}
        <Typography
          variant="body2"
          sx={{ mt: 6, textAlign: "center", color: "gray", fontStyle: "italic" }}
        >
          ℹ️ Informações acima são exemplos — sempre consulte fontes oficiais e
          profissionais de saúde para orientações personalizadas.
        </Typography>
      </Container>
    </Box>
  );
}
