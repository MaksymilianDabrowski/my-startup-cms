// my-startup-cms-studio/schemaTypes/frontPageContent.ts

export default {
  name: 'pageContent',
  title: 'Treść Strony Głównej',
  type: 'document',
  fields: [
    {
      name: 'heroHeading',
      title: 'Nagłówek Hero (H1)',
      type: 'string',
    },
    {
      name: 'heroSubheading',
      title: 'Podtytuł Hero',
      type: 'text', // Można użyć text dla dłuższego opisu
    },
    {
      name: 'ctaPrimaryText',
      title: 'Główny Przycisk CTA',
      type: 'string',
    },
    {
      name: 'heroBackgroundImage',
      title: 'Zdjęcie Tła Hero',
      type: 'image',
      options: {
        hotspot: true, // Umożliwia precyzyjne kadrowanie
      },
    },
    {
      name: 'partnerLogos',
      title: 'Logotypy Technologii (Vercel, WordPress, itd.)',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};