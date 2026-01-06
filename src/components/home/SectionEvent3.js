"use client";

import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import sec1 from "@/assets/sec1.jpg .png";
import sec2 from "@/assets/sec2.jpg .png";
import sec3 from "@/assets/sec3.jpg .png";
import Image from "next/image";

export default function EventSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#F8FAFC",
        py: { xs: 8, md: 10, lg: 12 },
        textAlign: "center",
      }}
    >
      {/* Header Section */}
      <Typography 
        variant="body2" 
        sx={{ 
          mb: 1.5,
          color: 'primary.main',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          fontSize: '0.8125rem'
        }}
      >
        Explore Sample
      </Typography>
      <Typography
        variant="h3"
        sx={{  
          fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' }, 
          fontFamily: '"Cormorant", serif',
          fontStyle: "italic",
          fontWeight: 400,
          mb: 2,
          color: '#0F172A',
          lineHeight: 1.2
        }}
      >
        Service Options
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: "640px",
          mx: "auto",
          mb: { xs: 6, md: 8 },
          color: "text.secondary", 
          fontSize: { xs: '1rem', md: '1.0625rem' },
          lineHeight: 1.6,
          px: { xs: 2, sm: 0 }
        }}
      >
        This demo platform showcases various add-on services available in a typical booking system.
        These are example offerings to demonstrate customization options.
      </Typography>

      {/* Cards Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: 3, md: 4 },
          flexWrap: "wrap",
          px: { xs: 2, sm: 3, md: 0 }
        }}
      >
        {[
          { img: sec1, title: "Catering" },
          { img: sec2, title: "Equipment Setup" },
          { img: sec3, title: "Premium Amenities" },
        ].map((item, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: '100%', sm: 280, md: 300 },
              maxWidth: 320,
              border: "1px solid",
              borderColor: "primary.main",
              boxShadow: "0 2px 12px rgba(37, 99, 235, 0.08)",
              borderRadius: 3,
              p: 1.5,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 24px rgba(37, 99, 235, 0.15)',
                borderColor: 'primary.dark'
              }
            }}
          >
            <CardMedia sx={{ 
              height: { xs: 240, md: 280 }, 
              position: "relative",
              borderRadius: 2,
              overflow: 'hidden'
            }}>
              <Image
                src={item.img}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </CardMedia>
            <CardContent sx={{ px: 1, pt: 2, pb: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: '"Cormorant", serif',
                  fontStyle: "italic",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  textAlign: "center",
                  color: '#0F172A'
                }}
              >
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
