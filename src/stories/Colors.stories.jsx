const colors = [
  ['Primary', '--color-primary'],
  ['Primary Dark', '--color-primary-dark'],
  ['Primary Light', '--color-primary-light'],
  ['Background', '--color-bg'],
  ['Surface', '--color-surface'],
  ['Text Primary', '--color-text-primary'],
  ['Text Secondary', '--color-text-secondary'],
  ['Border', '--color-border'],
  ['Success', '--color-success'],
  ['Warning', '--color-warning'],
  ['Error', '--color-error'],
  ['Info', '--color-info'],
];

const Swatch = ({ name, token }) => (
  <div style={{ width: 140, borderRadius: 'var(--radius-thumbnail)', overflow: 'hidden', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
    <div style={{ height: 72, background: `var(${token})` }} />
    <div style={{ padding: 'var(--space-2)', fontSize: 'var(--text-caption)' }}>
      <strong>{name}</strong>
      <div style={{ color: 'var(--color-text-secondary)' }}>{token}</div>
    </div>
  </div>
);

export default {
  title: 'Brand/Colors',
  tags: ['autodocs'],
};

export const Palette = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
    {colors.map(([name, token]) => <Swatch key={token} name={name} token={token} />)}
  </div>
);
