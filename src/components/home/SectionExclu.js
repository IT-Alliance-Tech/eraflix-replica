"use client";

import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import wine1 from "../../assets/se1.1.jpg.png";
import Link from "next/link";

export default function ExclusiveEvents() {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push("/book");
  };

  return (
    <Box sx={{ 
      py: { xs: 8, sm: 10, md: 12, lg: 14 }, 
      px: { xs: 2, sm: 4, md: 6, lg: 8 }, 
      bgcolor: "#EFEDE8",
      overflow: "hidden"
    }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 6, md: 8, lg: 10 },
          }}
        >
          {/* Left Side - Image with overlay */}
          <Box
            sx={{
              position: "relative",
              flex: 1,
              width: "100%",
              minHeight: { xs: "350px", sm: "450px", md: "500px", lg: "600px" },
              mt: { xs: 4, sm: 5, md: 6 },
              mb: { xs: 4, sm: 5, md: 6 },
              mx: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Image
              src={wine1}
              alt="Wine Glasses"
              fill
              style={{ objectFit: "cover", borderRadius: "12px" }}
            />
            
            {/* Overlay Text - Platform */}
            <Typography
              variant="h2"
              sx={{
                position: "absolute",
                top: { xs: "-8%", md: "-8%", lg: "-12%" },
                left: { xs: "55%", sm: "57%", md: "60%", lg: "45%" },
                fontFamily: '"Cormorant", serif',
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "6rem" },
                color: "#2563EB",
                textShadow: "2px 2px 8px rgba(37, 99, 235, 0.15)",
                userSelect: "none",
                lineHeight: 1
              }}
            >
              Platform
            </Typography>
            
            {/* Overlay Text - Features */}
            <Typography
              variant="h2"
              sx={{
                position: "absolute",
                bottom: { xs: "-6%", md: "-5%", lg: "-10%" },
                left: { xs: "-6%", md: "-12%", lg: "-12%" },
                fontFamily: '"Cormorant", serif',
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "6rem" },
                color: "#2563EB",
                textShadow: "2px 2px 8px rgba(37, 99, 235, 0.15)",
                userSelect: "none",
                lineHeight: 1
              }}
            >
              Features
            </Typography>
          </Box>

          {/* Right Side - Text */}
          <Box sx={{ flex: 1, px: { xs: 0, md: 2 } }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem", lg: "3rem" },
                fontFamily: '"Cormorant", serif',
                fontStyle: "italic",
                fontWeight: 400,
                mb: { xs: 3, sm: 3, md: 4 },
                color: "#0F172A",
                lineHeight: 1.3,
              }}
            >
             Explore Our Demo<br /> Booking System
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: { xs: 4, sm: 5, md: 6 },
                lineHeight: 1.7,
                fontSize: { xs: "0.9375rem", sm: "1rem", md: "1.0625rem" },
              }}
            >
              DemoBooking is a sample platform designed to showcase space reservation workflows.
              <br />
              <br />
             Experience a complete booking system — featuring availability checking, scheduling, and reservation management.
              <br />
              <br />
              Whether it&apos;s a Meeting Room, Workspace, Conference Hall, or Collaborative Area, explore the full booking flow.
              <br />
              <br />
              Test personalized scheduling, flexible time slots, and space customization — all designed to demonstrate modern booking capabilities.
              <br />
              <br />
             Because this demo platform shows how efficient space management works.
            </Typography>

            <Box sx={{ 
              display: "flex", 
              justifyContent: { xs: "center", sm: "flex-start" } 
            }}>
              <Button
                variant="contained"
                onClick={handleBookingClick}
                component={Link}
                href="/book"
                sx={{
                  bgcolor: "#2563EB",
                  px: { xs: 4, sm: 5 },
                  py: { xs: 1.5, sm: 1.75 },
                  borderRadius: 2,
                  fontSize: { xs: "0.9375rem", sm: "1rem" },
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)',
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  '&:hover': { 
                    bgcolor: "#1E40AF",
                    transform: "translateY(-3px)",
                    boxShadow: '0 6px 16px rgba(37, 99, 235, 0.35)'
                  }
                }}
              >
                START DEMO
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}