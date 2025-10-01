"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Mensagem enviada (exemplo)");
  };

  return (
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1565c0 0%, #1976d2 100%)",
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
            📩 Entre em Contato
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Fale com nossa equipe para tirar dúvidas, enviar sugestões ou obter
            mais informações sobre vacinas e campanhas.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Formulário */}
          <Grid size={{xs:12, md:6}}>
            <Paper
              elevation={3}
              sx={{ p: 4, borderRadius: 3, bgcolor: "white" }}
              component="form"
              onSubmit={enviar}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#1976d2" }}
              >
                Envie sua mensagem
              </Typography>

              <TextField
                fullWidth
                label="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                multiline
                rows={4}
                label="Mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  py: 1.4,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: 2,
                }}
              >
                Enviar Mensagem
              </Button>
            </Paper>
          </Grid>

          {/* Informações Extras */}
          <Grid size={{xs:12, md:6}}>
            <Paper
              elevation={2}
              sx={{ p: 4, borderRadius: 3, height: "100%", bgcolor: "#e3f2fd" }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#1565c0" }}
              >
                📍 Informações de Contato
              </Typography>
              <Typography variant="body1">
                <strong>Endereço:</strong> Rua da Saúde, 123 - Centro, São Paulo
              </Typography>
              <Typography variant="body1">
                <strong>Telefone:</strong> (11) 4002-8922
              </Typography>
              <Typography variant="body1">
                <strong>E-mail:</strong> contato@vacinas.com.br
              </Typography>

              <Divider sx={{ my: 3 }} />
              <Box
                component="img"
                src="https://media.istockphoto.com/id/1468497267/pt/foto/portrait-diversity-and-happy-team-of-doctors-with-teamwork-excited-positive-and-proud-in-a.jpg?s=612x612&w=0&k=20&c=s8_tS9_kQddFf-reF2vUx9ELR4QMSQDlzs95cLYJ-oM="
                alt="Equipe médica"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                  mt: 2,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
