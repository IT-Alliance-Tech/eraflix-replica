'use client'
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Link as MuiLink
} from '@mui/material'
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
  AccessTime as TimeIcon
} from '@mui/icons-material'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/demo-logo-white.png'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#0F172A', color: 'white', mt: 'auto' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '320px' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, width: 140, height: 'auto' }}>
              <Image src={logo} alt="DemoBooking Logo" width={140} height={140} style={{ objectFit: 'contain', height: 'auto' }} priority />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', mb: 1.5 }}>DemoBooking</Typography>
            <Typography variant="body2" sx={{ opacity: 0.85, lineHeight: 1.7, fontSize: '0.9375rem' }}>A Sample Booking Platform for Demonstrations</Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2.5 }}>Company</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[{ href: '/', label: 'Home' }, { href: '/info/about', label: 'About Us' }, { href: '/info/terms', label: 'Terms & Conditions' }, { href: '/info/refund', label: 'Refund Policy' }, { href: '/info/reviews', label: 'Reviews' }, { href: '/gallery', label: 'Gallery' }, { href: '/info/contact', label: 'Contact Us' }].map((link) => (
                <MuiLink key={link.href} component={Link} href={link.href} sx={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.2s ease', '&:hover': { color: '#60A5FA' } }}>{link.label}</MuiLink>
              ))}
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2.5 }}>Reach Us</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
              <EmailIcon sx={{ fontSize: '1.25rem', color: '#60A5FA', flexShrink: 0 }} />
              <MuiLink href="mailto:demo@bookingplatform.com" sx={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.2s ease', '&:hover': { color: '#60A5FA' }, overflow: 'hidden', textOverflow: 'ellipsis' }}>demo@bookingplatform.com</MuiLink>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
              <PhoneIcon sx={{ fontSize: '1.25rem', color: '#60A5FA', flexShrink: 0 }} />
              <MuiLink href="tel:+15550109999" sx={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.2s ease', '&:hover': { color: '#60A5FA' } }}>+1 555 010 9999</MuiLink>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
              <TimeIcon sx={{ fontSize: '1.25rem', color: '#60A5FA', flexShrink: 0 }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem' }}>Mon to Sun 9 AM - 2 AM</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3, gap: 1.5 }}>
              <LocationIcon sx={{ fontSize: '1.25rem', mt: 0.2, color: '#60A5FA', flexShrink: 0 }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, fontSize: '0.9375rem' }}>Downtown Central Area, City</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.08)', transition: 'all 0.2s ease', '&:hover': { bgcolor: '#60A5FA', color: '#0F172A', transform: 'translateY(-2px)' }, width: 40, height: 40 }} href="#" target="_blank" rel="noopener noreferrer"><WhatsAppIcon fontSize="small" /></IconButton>
              <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.08)', transition: 'all 0.2s ease', '&:hover': { bgcolor: '#60A5FA', color: '#0F172A', transform: 'translateY(-2px)' }, width: 40, height: 40 }} href="#" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize="small" /></IconButton>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ my: { xs: 4, md: 5 }, bgcolor: 'rgba(255,255,255,0.12)' }} />
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ opacity: 0.85, fontSize: '0.875rem', textAlign: { xs: 'center', md: 'left' } }}>Copyright © <Box component="span" sx={{ fontWeight: 600 }}>DemoBooking</Box>. All Rights Reserved.</Typography>
          <Typography variant="body2" sx={{ opacity: 0.85, fontSize: '0.875rem', textAlign: { xs: 'center', md: 'right' } }}>Developed by <Box component="span" sx={{ fontWeight: 600 }}>IT Alliance</Box>.</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
