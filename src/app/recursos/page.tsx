"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

// Ícones do Material UI
import DownloadIcon from "@mui/icons-material/Download";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

export default function Recursos() {
  return (
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2e7d32 0%, #43a047 100%)",
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
            📚 Recursos Educativos
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Materiais e ferramentas para se informar melhor sobre vacinas e
            saúde.
          </Typography>
        </Container>
      </Box>

      {/* Lista de Recursos */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Guia de Vacinação */}
          <Grid size={{xs:12, md:4}}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                textAlign: "center",
                height: "100%",
              }}
            >
              <DownloadIcon sx={{ fontSize: 50, color: "#2e7d32" }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mt: 2, mb: 1 }}
              >
                Guia de Vacinação (PDF)
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Baixe o guia completo com todas as orientações sobre vacinas.
              </Typography>
              <Button
                variant="contained"
                color="success"
                href="#"
                startIcon={<DownloadIcon />}
                sx={{ borderRadius: 2, fontWeight: "bold" }}
              >
                Download
              </Button>
            </Paper>
          </Grid>

          {/* Calendário Vacinal */}
          <Grid size={{xs:12, md:4}}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                textAlign: "center",
                height: "100%",
              }}
            >
              <CalendarTodayIcon sx={{ fontSize: 50, color: "#1565c0" }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mt: 2, mb: 1 }}
              >
                Calendário Vacinal
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Consulte o calendário atualizado para cada faixa etária.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="#"
                startIcon={<CalendarTodayIcon />}
                sx={{ borderRadius: 2, fontWeight: "bold" }}
              >
                Ver calendário
              </Button>
            </Paper>
          </Grid>

          {/* Vídeos Educativos */}
          <Grid size={{xs:12, md:4}}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                textAlign: "center",
                height: "100%",
              }}
            >
              <PlayCircleFilledIcon sx={{ fontSize: 50, color: "#ef6c00" }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mt: 2, mb: 1 }}
              >
                Vídeos Educativos
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Assista a vídeos curtos e informativos sobre saúde e vacinas.
              </Typography>
              <Button
                variant="contained"
                color="warning"
                href="#"
                startIcon={<PlayCircleFilledIcon />}
                sx={{ borderRadius: 2, fontWeight: "bold" }}
              >
                Assistir
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
