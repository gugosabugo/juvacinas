// components/LoadingSkeleton.tsx - Skeleton Loader
import React from "react";
import { Box, Skeleton, Grid, Container } from "@mui/material";

export function VaccineCardSkeleton() {
  return (
    <Box sx={{ p: 3, borderRadius: 3, bgcolor: "background.paper" }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Skeleton variant="rectangular" width={56} height={56} sx={{ borderRadius: 2 }} />
        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" width="60%" height={32} />
          <Skeleton variant="text" width="90%" height={24} />
          <Skeleton variant="text" width="40%" height={24} />
        </Box>
      </Box>
    </Box>
  );
}

export function CampaignCardSkeleton() {
  return (
    <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "background.paper" }}>
      <Skeleton variant="rectangular" width="100%" height={200} />
      <Box sx={{ p: 3 }}>
        <Skeleton variant="text" width="70%" height={32} />
        <Skeleton variant="text" width="90%" height={24} />
        <Skeleton variant="text" width="50%" height={24} />
        <Box sx={{ mt: 2 }}>
          <Skeleton variant="rectangular" width={120} height={36} sx={{ borderRadius: 1 }} />
        </Box>
      </Box>
    </Box>
  );
}

export function PageLoadingSkeleton() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Skeleton variant="text" width={300} height={48} sx={{ mb: 2 }} />
      <Skeleton variant="text" width="60%" height={24} sx={{ mb: 6 }} />

      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Grid size={{xs:12, sm:6, md:4}}>
            <VaccineCardSkeleton />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
