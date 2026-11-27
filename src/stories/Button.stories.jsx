const Button = ({ label = 'Button', variant = 'primary', disabled = false }) => {
  const styles = {
    primary: { background: 'var(--color-primary)', color: '#fff', border: 'none' },
    secondary: { background: 'var(--color-surface)', color: 'var(--color-primary)', border: '1px solid var(--color-primary)' },
  };
  return (
    <button
      disabled={disabled}
      style={{
        ...styles[variant],
        padding: 'var(--space-3) var(--space-6)',
        borderRadius: 'var(--radius-button)',
        fontSize: 'var(--text-button)',
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {label}
    </button>
  );
};

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary'] },
  },
};

export const Primary = { args: { label: 'Primary', variant: 'primary' } };
export const Secondary = { args: { label: 'Secondary', variant: 'secondary' } };
export const Arabic = { args: { label: 'زر رئيسي', variant: 'primary' } };
export const Disabled = { args: { label: 'Disabled', disabled: true } };
