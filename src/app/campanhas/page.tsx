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
      title: "Covid-19 – Reforço",
      description: "Doses de reforço disponíveis para toda a população.",
      dateRange: "Todo o ano",
      href: "#",
      image:
        "https://www.pmvc.ba.gov.br/wp-content/uploads/2021/01/vacina-covid.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section - FUNDO BRANCO COM TEXTO PRETO */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #e3f2fd 0%, #c8e6c9 100%)", // Gradiente claro
          py: 8,
          mb: 4,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "#000000", // TEXTO PRETO
            }}
          >
            📅 Campanhas Ativas de Vacinação
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#424242", // TEXTO CINZA ESCURO
            }}
          >
            Confira as campanhas de vacinação em andamento e mantenha sua
            carteira de vacinação em dia.
          </Typography>
        </Container>
      </Box>

      {/* Lista de Campanhas */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {campanhas.map((camp, index) => (
            <Grid size={{xs:12, md:4}} key={index}>
              <CampaignCard
                title={camp.title}
                description={camp.description}
                image={camp.image}
                alt={camp.title}
                buttonText="Saiba mais"
                buttonHref={camp.href}
              />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 6 }} />

        {/* Informações adicionais */}
        <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 600, color: "#000000" }} // TEXTO PRETO
          >
            💡 Como participar das campanhas
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "#424242" }}>
            Para participar das campanhas de vacinação, basta comparecer a um
            posto de saúde mais próximo com um documento de identificação e a
            carteira de vacinação.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 3, fontWeight: 600, color: "#000000" }} // TEXTO PRETO
          >
            📍 Encontre o posto mais próximo
          </Typography>
          <Typography variant="body1" sx={{ color: "#424242" }}>
            Consulte o site da sua prefeitura ou ligue para a linha de
            atendimento 136 (Saúde) para localizar os postos de vacinação
            disponíveis na sua região.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="https://www.gov.br/saude/pt-br/vacinacao"
              target="_blank"
              sx={{
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              Acesse o Calendário Nacional de Vacinação
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
