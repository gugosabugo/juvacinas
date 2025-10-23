// components/Header.tsx - Navegação Acessível e Responsiva
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar, Toolbar, Typography, Button, Box,
  IconButton, Drawer, List, ListItem, ListItemButton,
  ListItemText, useMediaQuery, useTheme, Container
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import VaccinesIcon from "@mui/icons-material/Vaccines";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Campanhas", href: "/campanhas" },
  { label: "Vacinas", href: "/vacinas" },
  { label: "Recursos", href: "/recursos" },
  { label: "Contato", href: "/contato" },
];

export default function ImprovedHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box 
      sx={{ width: 250, pt: 2 }}
      role="navigation"
      aria-label="Menu de navegação móvel"
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, pb: 2 }}>
        <IconButton 
          onClick={handleDrawerToggle}
          aria-label="Fechar menu"
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={handleDrawerToggle}
                selected={isActive}
                sx={{
                  py: 2,
                  "&.Mui-selected": {
                    bgcolor: "primary.light",
                    "&:hover": {
                      bgcolor: "primary.light",
                    }
                  }
                }}
                aria-current={isActive ? "page" : undefined}
              >
                <ListItemText 
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 600 : 400
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={1}
      sx={{ bgcolor: "background.paper", color: "text.primary" }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <VaccinesIcon 
              color="primary" 
              sx={{ fontSize: 32 }}
              aria-hidden="true"
            />
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                fontWeight: 700,
                textDecoration: "none",
                color: "inherit",
                "&:focus": {
                  outline: "2px solid",
                  outlineColor: "primary.main",
                  outlineOffset: "4px",
                  borderRadius: 1
                }
              }}
            >
              Vacinação
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="Abrir menu de navegação"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box 
              component="nav"
              sx={{ display: "flex", gap: 1 }}
              aria-label="Menu de navegação principal"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    variant={isActive ? "contained" : "text"}
                    sx={{
                      textTransform: "none",
                      fontWeight: isActive ? 600 : 400,
                      px: 2.5,
                      borderRadius: 2
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Melhor performance em mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}