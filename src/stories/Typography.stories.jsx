const sizes = [
  ['H1', '--text-h1', 700],
  ['H2', '--text-h2', 700],
  ['H3', '--text-h3', 600],
  ['Body', '--text-body', 400],
  ['Caption', '--text-caption', 400],
];

export default {
  title: 'Brand/Typography',
  tags: ['autodocs'],
};

export const Scale = () => (
  <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
    {sizes.map(([name, token, weight]) => (
      <div key={token}>
        <div style={{ fontSize: `var(${token})`, fontWeight: weight }}>{name} — The quick brown fox</div>
        <div dir="rtl" style={{ fontSize: `var(${token})`, fontWeight: weight, fontFamily: 'Cairo, Tajawal, sans-serif' }}>{name} — نص تجريبي للهوية البصرية</div>
        <code style={{ fontSize: 'var(--text-caption)', color: 'var(--color-text-secondary)' }}>{token}</code>
      </div>
    ))}
  </div>
);
