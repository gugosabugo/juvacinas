"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface CampaignCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  buttonText?: string;
  buttonHref?: string;
  dateRange?: string;
  actionHref?: string;
}

export default function CampaignCard({
  title,
  description,
  image,
  alt,
  buttonText,
  buttonHref,
}: CampaignCardProps) {
  return (
    <Card sx={{ maxWidth: 345, mx: "auto" }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {buttonText && buttonHref && (
        <Box sx={{ textAlign: "center", pb: 2 }}>
          <Button variant="contained" href={buttonHref}>
            {buttonText}
          </Button>
        </Box>
      )}
    </Card>
  );
}
