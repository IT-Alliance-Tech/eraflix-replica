'use client'
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Chip,
  IconButton,
  Fade,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  FormatQuote as QuoteIcon,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Downtown Area",
    rating: 5,
    review: "Excellent demo of the booking workflow! The space selection process was intuitive, and the system handled everything smoothly.",
    occasion: "Test Booking",
    color: "#2563EB"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Central District", 
    rating: 5,
    review: "Explored the full reservation system. The scheduling interface was clean, and the confirmation flow worked perfectly.",
    occasion: "Demo Session",
    color: "#2563EB"
  },
  {
    id: 3,
    name: "Emily Davis",
    location: "Eastside",
    rating: 4,
    review: "Great platform demonstration! The availability checking feature is responsive and the booking process is straightforward.",
    occasion: "Platform Review",
    color: "#2563EB"
  },
  {
    id: 4,
    name: "David Martinez",
    location: "North Quarter",
    rating: 5,
    review: "Tested the group booking functionality with multiple time slots. The system handles capacity management well.",
    occasion: "System Evaluation",
    color: "#2563EB"
  },
  {
    id: 5,
    name: "Jennifer Taylor",
    location: "West End",
    rating: 5,
    review: "Tried the customization features and add-on options. The booking customization interface is user-friendly and flexible.",
    occasion: "Feature Testing",
    color: "#2563EB"
  },
  {
    id: 6,
    name: "Robert Wilson",
    location: "South Bay",
    rating: 4,
    review: "Went through the complete demo flow and explored all the features. The platform demonstrates modern booking capabilities well.",
    occasion: "Full Walkthrough",
    color: "#2563EB"
  }
];

export default function TestimonialsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [fadeIn, setFadeIn] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setFadeIn(true);
      }, 200);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNavigation = (direction) => {
    setIsAutoPlaying(false);
    setFadeIn(false);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
      setFadeIn(true);
    }, 200);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeIn(true);
    }, 200);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Get visible testimonials
  const visibleTestimonials = React.useMemo(() => {
    const count = isMobile ? 1 : 3;
    return Array.from({ length: count }, (_, i) => 
      testimonials[(currentIndex + i) % testimonials.length]
    );
  }, [currentIndex, isMobile]);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10, lg: 12 },
        background: '#EFEDE8',
        minHeight: { xs: '550px', md: '600px' }
      }}
    >
      <Container maxWidth="lg">
        
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Typography 
            variant="h3" 
            component="h2"
            sx={{  
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' }, 
              fontStyle: 'italic', 
              fontFamily: '"Cormorant", serif', 
              fontWeight: 400,
              color: '#0F172A',
              mb: 2,
              lineHeight: 1.2
            }}
          >
            Platform User Feedback
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            mb={4}
            sx={{ 
              fontSize: { xs: '1rem', md: '1.125rem' },
              fontWeight: 400
            }}
          >
            Sample testimonials from demo users
          </Typography>
          
          {/* Overall Rating */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
              bgcolor: 'white',
              px: { xs: 2.5, md: 3 },
              py: { xs: 1.25, md: 1.5 },
              borderRadius: '50px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
            }}
          >
            <Rating value={4.8} precision={0.1} readOnly size="small" />
            <Typography variant="h6" fontWeight={700} color="primary.main">
              4.8
            </Typography>
            <Typography variant="body2" color="text.secondary">
              •
            </Typography>
            <Typography variant="body2" color="text.secondary" fontWeight={500}>
              500+ reviews
            </Typography>
          </Box>
        </Box>

        {/* Navigation Controls */}
        <Box 
          display="flex" 
          alignItems="center" 
          justifyContent="space-between" 
          mb={4}
          px={{ xs: 1, sm: 0 }}
        >
          <IconButton
            onClick={() => handleNavigation('prev')}
            sx={{
              bgcolor: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              '&:hover': {
                bgcolor: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transform: 'scale(1.05)'
              },
              transition: 'all 0.2s'
            }}
          >
            <ChevronLeft />
          </IconButton>
          
          <Box
            sx={{
              bgcolor: 'white',
              px: 2,
              py: 1,
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {currentIndex + 1} of {testimonials.length}
            </Typography>
          </Box>
          
          <IconButton
            onClick={() => handleNavigation('next')}
            sx={{
              bgcolor: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              '&:hover': {
                bgcolor: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transform: 'scale(1.05)'
              },
              transition: 'all 0.2s'
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>

        {/* Testimonials Grid */}
        <Fade in={fadeIn} timeout={200}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)'
              },
              gap: 3,
              mb: 4
            }}
          >
            {visibleTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                sx={{
                  position: 'relative',
                  borderLeft: `4px solid ${testimonial.color}`,
                  borderRadius: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                  }
                }}
              >
                {/* Quote Icon */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 16,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    bgcolor: testimonial.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <QuoteIcon sx={{ fontSize: 16, color: 'white' }} />
                </Box>

                <CardContent sx={{ p: 3 }}>
                  {/* Rating */}
                  <Rating 
                    value={testimonial.rating} 
                    readOnly 
                    size="small"
                    sx={{ mb: 2 }}
                  />

                  {/* Review Text */}
                  <Typography
                    variant="body2"
                    fontStyle="italic"
                    color="text.secondary"
                    lineHeight={1.6}
                    mb={3}
                    sx={{ fontSize: '0.9rem' }}
                  >
                    {testimonial.review}
                  </Typography>

                  {/* Customer Info */}
                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <Avatar
                      sx={{
                        bgcolor: testimonial.color,
                        width: 40,
                        height: 40,
                        fontSize: '0.875rem',
                        fontWeight: 600
                      }}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Occasion Tag */}
                  <Chip
                    label={testimonial.occasion}
                    size="small"
                    sx={{
                      bgcolor: `${testimonial.color}15`,
                      color: testimonial.color,
                      border: `1px solid ${testimonial.color}30`,
                      fontWeight: 500,
                      fontSize: '0.75rem'
                    }}
                  />
                </CardContent>
              </Card>
            ))}
          </Box>
        </Fade>

        {/* Dots Indicator */}
        <Box display="flex" justifyContent="center" gap={1} mb={6}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              sx={{
                width: index === currentIndex ? 32 : 8,
                height: 8,
                borderRadius: 4,
                bgcolor: index === currentIndex ? testimonial.color : 'grey.300',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'scale(1.2)',
                  bgcolor: index === currentIndex ? testimonial.color : 'grey.400'
                }
              }}
            />
          ))}
        </Box>

        {/* Call to Action */}
        <Box textAlign="center">
          <Typography variant="h6" color="text.secondary" mb={3}>
            Ready to explore the full booking demo?
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/book"
            sx={{
              background: '#2563EB',
              borderRadius: '50px',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)',
              '&:hover': {
                boxShadow: '0 6px 20px rgba(37, 99, 235, 0.6)',
                transform: 'scale(1.05)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Start Demo Booking
          </Button>
        </Box>

      </Container>
    </Box>
  );
}