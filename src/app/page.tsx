// app/page.tsx - Página Inicial Melhorada
"use client";

import React from "react";
import {
  Container, Typography, Box, Button, Grid,
  Card, CardContent, useTheme, useMediaQuery
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const features = [
  {
    icon: VaccinesIcon,
    title: "Vacinas Essenciais",
    description: "Conheça todas as vacinas do calendário nacional e suas indicações",
    href: "/vacinas",
    color: "#1976d2"
  },
  {
    icon: CalendarTodayIcon,
    title: "Campanhas Ativas",
    description: "Fique por dentro das campanhas de vacinação em andamento",
    href: "/campanhas",
    color: "#2e7d32"
  },
  {
    icon: LibraryBooksIcon,
    title: "Recursos Educativos",
    description: "Acesse guias, calendários e materiais informativos sobre saúde",
    href: "/recursos",
    color: "#ed6c02"
  }
];

const stats = [
  { value: "50+", label: "Tipos de Vacinas" },
  { value: "12", label: "Campanhas Ativas" },
  { value: "1M+", label: "Vidas Protegidas" }
];

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* Hero Section */}
      <Box
        component="section"
        aria-labelledby="hero-heading"
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: "white",
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid  size={{xs:12, md:6}}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  id="hero-heading"
                  variant={isMobile ? "h3" : "h2"}
                  component="h1"
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  Proteja Sua Saúde com Informação
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ mb: 4, opacity: 0.95, lineHeight: 1.6 }}
                >
                  Portal completo com informações sobre vacinas, campanhas de vacinação
                  e recursos educativos. Mantenha-se atualizado e proteja você e sua família.
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    component={Link}
                    href="/vacinas"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: "white",
                      color: "primary.main",
                      "&:hover": {
                        bgcolor: "grey.100"
                      },
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem"
                    }}
                  >
                    Explorar Vacinas
                  </Button>

                  <Button
                    component={Link}
                    href="/campanhas"
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: "white",
                      color: "white",
                      "&:hover": {
                        borderColor: "white",
                        bgcolor: "rgba(255,255,255,0.1)"
                      },
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem"
                    }}
                  >
                    Ver Campanhas
                  </Button>
                </Box>
              </motion.div>
            </Grid>

            <Grid  size={{xs:12, md:6}}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 300, md: 400 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {/* Placeholder para ilustração */}
                  <VaccinesIcon sx={{ fontSize: 200, opacity: 0.3 }} />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{ fontWeight: 700, color: "primary.main", mb: 1 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box component="section" aria-labelledby="features-heading" sx={{ bgcolor: "background.default", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            id="features-heading"
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 600, mb: 6 }}
          >
            Como Podemos Ajudar
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: 6
                        }
                      }}
                    >
                      <CardContent sx={{ p: 4, flexGrow: 1 }}>
                        <Box
                          sx={{
                            width: 64,
                            height: 64,
                            borderRadius: 2,
                            bgcolor: `${feature.color}15`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 3
                          }}
                        >
                          <Icon sx={{ fontSize: 32, color: feature.color }} />
                        </Box>

                        <Typography
                          variant="h5"
                          component="h3"
                          gutterBottom
                          sx={{ fontWeight: 600 }}
                        >
                          {feature.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ mb: 3 }}
                        >
                          {feature.description}
                        </Typography>

                        <Button
                          component={Link}
                          href={feature.href}
                          endIcon={<ArrowForwardIcon />}
                          sx={{ textTransform: "none", fontWeight: 600 }}
                        >
                          Saiba mais
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
              color: "white",
              p: { xs: 4, md: 6 },
              textAlign: "center"
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Tem Dúvidas sobre Vacinação?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.95 }}>
              Nossa equipe está pronta para ajudar você com todas as suas perguntas
            </Typography>
            <Button
              component={Link}
              href="/contato"
              variant="contained"
              size="large"
              sx={{
                bgcolor: "white",
                color: "primary.main",
                "&:hover": { bgcolor: "grey.100" },
                px: 5,
                py: 1.5,
                fontSize: "1.1rem"
              }}
            >
              Entre em Contato
            </Button>
          </Card>
        </motion.div>
      </Container>
    </>
  );
}
