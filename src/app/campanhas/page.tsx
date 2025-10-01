"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import CampaignCard from "../components/CampaignCard";
import Button from "@mui/material/Button";

export default function Campanhas() {
  const campanhas = [
    {
      title: "Campanha Nacional de Vacinação - Crianças",
      description: "Vacinação de rotina para crianças de 0 a 5 anos.",
      dateRange: "01/04/2025 - 30/06/2025",
      href: "#",
      image:
        "https://d24ux3x5lhpqgy.cloudfront.net/6e3a1ee9-ced2-42b4-a999-7df734870ea3",
    },
    {
      title: "Campanha de Influenza",
      description: "Proteja-se contra a gripe — grupos prioritários.",
      dateRange: "15/04/2025 - 15/05/2025",
      href: "#",
      image:
        "https://jpdiagnostica.com.br/wp-content/uploads/2019/05/Influenza-848x414.jpg",
    },
    {
      title: "Covid-19 – Doses de Reforço",
      description:
        "Campanha para manter a proteção contra casos graves e hospitalizações.",
      dateRange: "Aberta — Consulte locais",
      href: "#",
      image:
        "https://www.pmvc.ba.gov.br/wp-content/uploads/S%C3%ADmbolo-covid-19-6882296_1280.jpg",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
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
            📅 Campanhas de Vacinação
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
            Confira as campanhas ativas em 2025 e proteja sua saúde e de sua
            família.
          </Typography>
          <Button
            variant="contained"
            href="/vacinas"
            sx={{
              bgcolor: "white",
              color: "#1976d2",
              px: 4,
              py: 1.2,
              fontSize: "1rem",
              "&:hover": { bgcolor: "#f0f0f0" },
            }}
          >
            Conhecer Todas as Vacinas
          </Button>
        </Container>
      </Box>

      {/* Lista de Campanhas */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1976d2", mb: 4 }}
        >
          Campanhas Ativas
        </Typography>

        <Grid container spacing={4}>
          {campanhas.map((c, i) => (
            <Grid key={i} size={{ xs: 12, md: 6 }}>
              <CampaignCard
                title={c.title}
                description={c.description}
                dateRange={c.dateRange}
                buttonHref={c.href}
                image={c.image}
                alt={c.title}
                buttonText="Ver Detalhes"
              />
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="caption"
          display="block"
          align="center"
          sx={{ mt: 3 }}
        >
          ℹ️ Consulte sempre a secretaria de saúde local para datas, públicos
          prioritários e postos de vacinação.
        </Typography>
      </Container>

      <Divider sx={{ my: 6 }} />

      {/* Extra Section para Imagens/Informações */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1565c0", mb: 4 }}
        >
          🏥 Onde se Vacinar
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                textAlign: "center",
                bgcolor: "#e3f2fd",
              }}
            >
              <img
                src="https://publicacao.saocristovao.se.gov.br/storage/post/atencao-primaria-confira-os-servicos-disponibilizados-pelas-unidades-de-saude-de-sao-cristovao-2020-12-30-5feca3985e609.jpeg"
                alt="Posto de Saúde"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Postos de Saúde
              </Typography>
              <Typography>
                Procure a unidade de saúde mais próxima para receber a vacina
                durante o período da campanha.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                textAlign: "center",
                bgcolor: "#f3e5f5",
              }}
            >
              <img
                src="https://prefeitura.rio/wp-content/uploads/2023/08/20230815081917__N8A9634-scaled.jpg"
                alt="Vacinação em escolas"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Escolas e Locais Públicos
              </Typography>
              <Typography>
                Algumas campanhas contam com vacinação em escolas, centros
                comunitários e outros locais de grande circulação.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
