import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/disability-pride-logo.jpg.png'

export default defineThemeConfig({
  name: 'Crystal Lake Disability Pride',
  id: 'disability-pride-website',
  logo: logoImage,
  seo: {
    title: 'Crystal Lake Disability Pride Event',
    description:
      '2nd Annual Crystal Lake Disability Pride Event — July 25, 2026 at McHenry County College. Celebrating the beauty, diversity, and lived experiences of people with disabilities.',
    author: 'Z Advocacy',
    image: previewImage,
  },
  colors: {
    primary: '#1a5276',
    secondary: '#117a65',
    neutral: '#b9bec4',
    outline: '#ff4500',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'Accessibility & Directions',
        href: '/accessibility',
      },
      {
        type: 'link',
        label: 'Vendors',
        href: '/vendor',
      },
      {
        type: 'link',
        label: 'Sponsorship',
        href: '/sponsorship',
      },
      {
        type: 'link',
        label: 'About Us',
        href: '/about',
      },
    ],
  },
  socials: [
    {
      label: 'Email Z Advocacy',
      href: 'mailto:sara.zadvocacy+info@gmail.com?subject=Crystal%20Lake%20Disability%20Pride%20General%20Inquiry',
      icon: 'lucide:mail',
    },
    {
      label: 'Disability Pride Event on Facebook',
      href: 'https://www.facebook.com/profile.php?id=61575995903833',
      icon: 'lucide:external-link',
      external: true,
    },
    {
      label: 'Z Advocacy NFP on Facebook',
      href: 'https://www.facebook.com/profile.php?id=61589329260319',
      icon: 'lucide:external-link',
      external: true,
    },
  ],
})
