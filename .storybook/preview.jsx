import '../src/styles/globals.css';

export const parameters = {
  layout: 'centered',
  docs: {
    toc: true,
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <div style={{ padding: '20px', backgroundColor: '#F5F6F8', minHeight: '100vh' }}>
      <Story />
    </div>
  ),
];
