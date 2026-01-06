"use client";

import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function HowItWorks() {
  const steps = [
    {
      icon: <LocationOnIcon sx={{ fontSize: { xs: 48, md: 56 } }} />,
      title: "Browse Spaces",
      desc: "Explore available locations & space types",
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: { xs: 48, md: 56 } }} />,
      title: "Select Time",
      desc: "Choose your preferred date & time slot",
    },
    {
      icon: <CreditCardIcon sx={{ fontSize: { xs: 48, md: 56 } }} />,
      title: "Confirm Details",
      desc: "Review booking and enter information",
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: { xs: 48, md: 56 } }} />,
      title: "Complete Demo",
      desc: "Experience the full booking flow",
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 8, md: 10, lg: 12 },
        backgroundColor: "#F8FAFC",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          mb: { xs: 6, md: 8 },
          fontFamily: '"Cormorant", serif',
          fontStyle: "italic",
          color: "#0F172A",
          fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem", lg: "3rem" },
          fontWeight: 400,
          lineHeight: 1.2,
          px: { xs: 2, sm: 0 }
        }}
      >
        Demo Booking Flow
      </Typography>

      {/* Steps */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: 2.5, md: 3, lg: 4 },
          flexWrap: "wrap",
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        {steps.map((step, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '100%', sm: 220, md: 240 },
              maxWidth: 260,
              minHeight: { xs: 200, md: 220 },
              border: "1px solid",
              borderColor: 'divider',
              borderRadius: 3,
              backgroundColor: "white",
              color: "text.primary",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: { xs: 3, md: 3.5 },
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
              '&:hover': {
                backgroundColor: "#2563EB",
                color: "white",
                borderColor: '#2563EB',
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 24px rgba(37, 99, 235, 0.2)',
                '& .MuiSvgIcon-root': {
                  transform: 'scale(1.1)'
                }
              },
            }}
          >
            <Box sx={{ 
              mb: 2, 
              display: 'flex', 
              alignItems: 'center',
              transition: 'transform 0.3s ease'
            }}>
              {step.icon}
            </Box>
            <Typography
              variant="subtitle1"
              sx={{ 
                fontWeight: 600, 
                mb: 1.5, 
                fontSize: { xs: "1.125rem", md: "1.25rem" }
              }}
            >
              {step.title}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                fontSize: { xs: "0.9375rem", md: "1rem" },
                lineHeight: 1.5,
                opacity: 0.9
              }}
            >
              {step.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
