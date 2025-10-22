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
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh", pb: 6 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2e7d32 0%, #43a047 100%)",
          color: "white",
          py: { xs: 6, md: 10 },
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
              textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
              letterSpacing: 1,
            }}
          >
            📚 Recursos Educativos
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 500 }}>
            Materiais e ferramentas para se informar melhor sobre vacinas e saúde.
          </Typography>
        </Container>
      </Box>

      {/* Lista de Recursos */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Guia de Vacinação */}
          <Grid size={{xs:12, md:4}}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                textAlign: "center",
                height: "100%",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 24px rgba(46,125,50,0.4)",
                },
              }}
            >
              <DownloadIcon sx={{ fontSize: 56, color: "#2e7d32" }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mt: 3, mb: 1, letterSpacing: 0.5 }}
              >
                Guia de Vacinação (PDF)
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
                Baixe o guia completo com todas as orientações sobre vacinas.
              </Typography>
              <Button
                variant="contained"
                color="success"
                href="#"
                startIcon={<DownloadIcon />}
                sx={{
                  borderRadius: 3,
                  fontWeight: "bold",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": { boxShadow: "0 6px 12px rgba(46,125,50,0.6)" },
                }}
              >
                Download
              </Button>
            </Paper>
          </Grid>

          {/* Calendário Vacinal */}
          <Grid size={{xs:12, md:4}}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                textAlign: "center",
                height: "100%",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 24px rgba(21,101,192,0.4)",
                },
              }}
            >
              <CalendarTodayIcon sx={{ fontSize: 56, color: "#1565c0" }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mt: 3, mb: 1, letterSpacing: 0.5 }}
              >
                Calendário Vacinal
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
                Consulte o calendário atualizado para cada faixa etária.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="https://www.gov.br/saude/pt-br/vacinacao/calendario-tecnico"
                startIcon={<CalendarTodayIcon />}
                sx={{
                  borderRadius: 3,
                  fontWeight: "bold",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": { boxShadow: "0 6px 12px rgba(21,101,192,0.6)" },
                }}
              >
                Ver calendário
              </Button>
            </Paper>
          </Grid>

          {/* Vídeos Educativos */}
          <Grid size={{xs:12, md:4}}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                textAlign: "center",
                height: "100%",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 24px rgba(239,108,0,0.4)",
                },
              }}
            >
              <PlayCircleFilledIcon sx={{ fontSize: 56, color: "#ef6c00" }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mt: 3, mb: 1, letterSpacing: 0.5 }}
              >
                Vídeos Educativos
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
                Assista a vídeos curtos e informativos sobre saúde e vacinas.
              </Typography>
              <Button
                variant="contained"
                color="warning"
                href="https://www.youtube.com/c/CanalButantan"
                target="_blank"
                rel="noopener"
                startIcon={<PlayCircleFilledIcon />}
                sx={{
                  borderRadius: 3,
                  fontWeight: "bold",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": { boxShadow: "0 6px 12px rgba(239,108,0,0.6)" },
                }}
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
