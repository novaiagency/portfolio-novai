import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
<<<<<<< HEAD
    sitemap: 'https://novai.agency/sitemap.xml',
=======
    sitemap: 'https://sejiux.com/sitemap.xml',
>>>>>>> 0168cb42bd5e30be4da577893f197326bafd9d42
  };
}