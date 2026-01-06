"use client";

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import rose from '@/assets/professional-workspace.png';
import Link from 'next/link'

export default function PlanEventSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#0F172A",
        color: "white",
        px: { xs: 3, md: 8, lg: 20 },
        pb: { xs: 8, md: 10, lg: 12 },
        pt: { xs: 6, md: 8, lg: 10 },
      }}
    >
      <Box sx={{
        maxWidth: '1200px', 
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", 
        margin: '0 auto', 
        flexWrap: "wrap",
        gap: { xs: 6, md: 8 },
      }}>
        {/* Left Content */}
        <Box sx={{ flex: 1, minWidth: "300px", maxWidth: "600px" }}>
          <Typography 
            variant="body2" 
            sx={{ 
              mb: 1.5,
              color: 'primary.light',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontSize: '0.8125rem'
            }}
          >
            Platform Capabilities
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' },
              fontFamily: '"Cormorant", serif',
              fontStyle: "italic",
              fontWeight: 400,
              mb: 3,
              lineHeight: 1.2
            }}
          >
            Explore Our Demo Features
          </Typography>
          <Typography
            variant="body1"
            sx={{ 
              mb: 4, 
              fontWeight: 300, 
              color: "rgba(255,255,255,0.85)", 
              fontSize: { xs: '0.9375rem', sm: "1rem", md: '1.0625rem' },
              lineHeight: 1.7
            }}
          >
            {`This demo system showcases a complete booking workflow — from browsing to confirmation, with real-time availability and customization options.`}
          </Typography>

          {/* Bullet points */}
          <Box component="ul" sx={{ pl: 2.5, mb: 5, listStyleType: 'disc' }} >
            {[
              "Real-time availability checking across multiple locations and spaces.",
              "Flexible scheduling with customizable time slots and duration options.",
              "Visual space browsing with image galleries and detailed descriptions.",
              "Add-on service selection to demonstrate booking customization.",
              "Complete reservation flow from selection to confirmation.",
            ].map((item, i) => (
              <Typography
                component="li"
                key={i}
                variant="body2"
                sx={{ 
                  mb: 1.5, 
                  color: "rgba(255,255,255,0.8)", 
                  fontSize: { xs: "0.9375rem", sm: "1rem", md: '1.0625rem' },
                  lineHeight: 1.6,
                  '&::marker': {
                    color: 'primary.light'
                  }
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          <Button
            variant="contained"
            component={Link}
            href="/book"
            sx={{
              backgroundColor: "#2563EB",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: '0.9375rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                backgroundColor: "#1E40AF",
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 16px rgba(37, 99, 235, 0.4)'
              }
            }}
          >
            VIEW DEMO FLOW
          </Button>
        </Box>

        {/* Right Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "280px",
            mt: { xs: 4, md: 0 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 280, sm: 350, md: 400, lg: 480 },
              height: { xs: 280, sm: 350, md: 400, lg: 400 },
            }}
          >
            <Image
              src={rose}
              alt="Professional Workspace"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
