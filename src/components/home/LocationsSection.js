"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Fade,
  CircularProgress,
  Chip,
  Avatar,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  Place,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";

export default function LocationsSection() {
  const router = useRouter();
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await fetch("/api/public/locations");
        const data = await res.json();
        if (data.success) setLocations(data.locations);
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);

  const handleNavigation = (direction) => {
    if (!locations.length) return;
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        direction === "next"
          ? (prev + 1) % locations.length
          : (prev - 1 + locations.length) % locations.length
      );
      setFadeIn(true);
    }, 200);
  };

  const handleLocationClick = (location) => {
    console.log("Location selected:", location);
    router.push(`/book?location=${location.id}`);
  };

  const visible =
    (locations.length < 3
      ? locations
      : [
          locations[currentIndex],
          locations[(currentIndex + 1) % locations.length],
          locations[(currentIndex + 2) % locations.length],
        ]) || [];

  return (
    <Box sx={{ py: { xs: 8, md: 10, lg: 12 }, bgcolor: "#F8FAFC" }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Cormorant", serif',
              fontStyle: "italic",
              mb: 2,
              fontWeight: 400,
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem", lg: "3rem" },
              color: '#0F172A',
              lineHeight: 1.2
            }}
          >
            Our Locations
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, fontSize: { xs: '1rem', md: '1.125rem' } }}>
            {"Available across Bangalore's favorite neighborhoods"}
          </Typography>
        </Box>

        {loading ? (
          <Box display="flex" justifyContent="center" py={5}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Box display="flex" justifyContent="space-between" mb={4} px={{ xs: 1, sm: 0 }}>
              <IconButton
                onClick={() => handleNavigation("prev")}
                disabled={locations.length > 3 ? false : true}
                sx={{
                  bgcolor: "white",
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    bgcolor: "#f5f5f5",
                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                    transform: 'scale(1.05)'
                  },
                  '&:disabled': {
                    bgcolor: 'rgba(255,255,255,0.5)'
                  }
                }}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                disabled={locations.length > 3 ? false : true}
                onClick={() => handleNavigation("next")}
                sx={{
                  bgcolor: "white",
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    bgcolor: "#f5f5f5",
                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                    transform: 'scale(1.05)'
                  },
                  '&:disabled': {
                    bgcolor: 'rgba(255,255,255,0.5)'
                  }
                }}
              >
                <ChevronRight />
              </IconButton>
            </Box>

            <Fade in={fadeIn} timeout={200}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                  gap: 3,
                }}
              >
                {visible?.map((loc) => (
                  <Card
                    key={loc?.id}
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      cursor: "pointer",
                      position: "relative",
                      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                      '&:hover': {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                      },
                    }}
                    onClick={() => handleLocationClick(loc)}
                  >
                    {/* Enhanced image section */}
                    <Box sx={{ position: "relative", overflow: "hidden" }}>
                      {loc.images?.length > 0 ? (
                        <CardMedia
                          component="img"
                          height="220"
                          image={loc.images[0].url}
                          alt={loc.images[0].alt || loc.name}
                          sx={{
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                            "&:hover": {
                              transform: "scale(1.08)",
                            },
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            height: 220,
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                          }}
                        >
                          <LocationOn sx={{ fontSize: 60, opacity: 0.8 }} />
                        </Box>
                      )}

                      {/* Subtle gradient overlay */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "40%",
                          background: "linear-gradient(transparent, rgba(0,0,0,0.08))",
                          pointerEvents: "none",
                        }}
                      />
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      {/* Location name */}
                      <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                        <Avatar
                          sx={{ bgcolor: "#2563EB", width: 32, height: 32 }}
                        >
                          <Place fontSize="small" />
                        </Avatar>
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          sx={{
                            fontSize: "1.125rem",
                            color: "#0F172A",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {loc.name}
                        </Typography>
                      </Box>

                      {/* Address */}
                      <Typography
                        color="text.secondary"
                        sx={{
                          mb: 2.5,
                          lineHeight: 1.6,
                          fontSize: "0.9375rem",
                        }}
                      >
                        {loc.address?.street}, {loc.address?.area},{" "}
                        {loc.address?.city}
                      </Typography>

                      {/* Contact info */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1.5,
                        }}
                      >
                        <Box display="flex" alignItems="center" gap={1.5}>
                          <Phone
                            fontSize="small"
                            sx={{
                              color: "#2563EB",
                              bgcolor: "#EFF6FF",
                              p: 0.5,
                              borderRadius: 1,
                              width: 24,
                              height: 24,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 500,
                              color: "#334155",
                              fontSize: '0.9375rem'
                            }}
                          >
                            {loc.contactInfo?.phone}
                          </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" gap={1.5}>
                          <Email
                            fontSize="small"
                            sx={{
                              color: "#64748B",
                              bgcolor: "#F8FAFC",
                              p: 0.5,
                              borderRadius: 1,
                              width: 24,
                              height: 24,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#64748B",
                              fontWeight: 400,
                              fontSize: '0.875rem'
                            }}
                          >
                            {loc.contactInfo?.email}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Bottom accent */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: 3,
                          background: "linear-gradient(90deg, #2563EB 0%, #6366F1 100%)",
                        }}
                      />
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Fade>
          </>
        )}
      </Container>
    </Box>
  );
}
