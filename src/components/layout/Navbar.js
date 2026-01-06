'use client'
import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material'
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  PhotoLibrary as GalleryIcon,
  LocationOn as LocationIcon,
  Phone as ContactIcon,
  Theaters as TheatersIcon // Changed from Theater to Theaters
} from '@mui/icons-material'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/demo-logo-white.png'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const menuItems = [
    { text: 'Home', href: '/', icon: <HomeIcon /> },
    { text: 'Spaces', href: '/screens', icon: <TheatersIcon /> }, // Updated icon
    { text: 'Gallery', href: '/gallery', icon: <GalleryIcon /> },
    { text: 'Contact', href: '/info/contact', icon: <ContactIcon /> }
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  // Rest of your component code remains the same...
  const drawer = (
    <Box sx={{ 
      width: 300, 
      height: '100%',
      bgcolor: 'background.paper',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Drawer Header */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        p: 2.5,
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, fontSize: '1.125rem' }}>
          DemoBooking
        </Typography>
        <IconButton 
          onClick={handleDrawerToggle} 
          sx={{ 
            p: 1,
            '&:hover': {
              bgcolor: 'rgba(37, 99, 235, 0.08)'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      
      {/* Tagline */}
      <Box sx={{ px: 2.5, py: 1.5, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
          {"Demo Booking Platform"}
        </Typography>
      </Box>

      {/* Menu Items */}
      <List sx={{ flexGrow: 1, py: 0 }}>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text} 
            component={Link} 
            href={item.href} 
            onClick={handleDrawerToggle}
            sx={{
              color: '#0F172A',
              py: 2,
              px: 2.5,
              borderBottom: '1px solid',
              borderColor: 'divider',
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: 'rgba(37, 99, 235, 0.04)',
                '& .MuiTypography-root': {
                  color: 'primary.main'
                },
                '& .MuiBox-root': {
                  transform: 'translateX(4px)'
                }
              }
            }}
          >
            <Box sx={{ 
              mr: 2, 
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              minWidth: 24,
              transition: 'transform 0.2s ease'
            }}>
              {item.icon}
            </Box>
            <ListItemText 
              primary={item.text}
              sx={{ 
                '& .MuiTypography-root': { 
                  fontWeight: 500,
                  fontSize: '1rem'
                } 
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Book Now Button */}
      <Box sx={{ p: 2.5, borderTop: '1px solid', borderColor: 'divider' }}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          component={Link}
          href="/book"
          onClick={handleDrawerToggle}
          sx={{ 
            borderRadius: 2,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 600,
            background: '#2563EB',
            boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)',
            '&:hover': {
              background: '#1E40AF',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)'
            },
            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          Try Demo
        </Button>
      </Box>
    </Box>
  )

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          bgcolor: '#0F172A',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }}
      >
        <Toolbar sx={{ 
          minHeight: { xs: 64, sm: 72 },
          px: { xs: 2, sm: 3, md: 4 },
          py: 1
        }}>
          {/* Logo Section */}
          <Box 
            component={Link} 
            href="/"
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              textDecoration: 'none',
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}
          >
            <Box sx={{ 
              width: { xs: 90, sm: 100 }, 
              height: 'auto', 
              display: 'flex', 
              alignItems: 'center' 
            }}>
              <Image 
                src={logo} 
                width={100} 
                height={100} 
                alt="DemoBooking Logo" 
                style={{ 
                  objectFit: 'contain', 
                  height: 'auto',
                  width: '100%'
                }} 
              />
            </Box>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    px: 2.5,
                    py: 1,
                    borderRadius: 2,
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#60A5FA',
                      bgcolor: 'rgba(96, 165, 250, 0.08)',
                      transform: 'translateY(-1px)'
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Button
                variant="contained"
                component={Link}
                href="/book"
                sx={{
                  ml: 2,
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  background: '#2563EB',
                  boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: '#fff',
                    color: '#2563EB',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)'
                  }
                }}
              >
                Try Demo
              </Button>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ 
                p: 1.5,
                color: '#60A5FA',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(96, 165, 250, 0.08)',
                  transform: 'scale(1.1)'
                }
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ 
          keepMounted: true
        }}
        PaperProps={{
          sx: {
            width: 300,
            maxWidth: '80vw'
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Navbar
