import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const variants = { primary: 'btn-primary', outline: 'btn-outline', light: 'btn-light' };

export default function ButtonLink({ to, variant = 'primary', arrow = false, className = '', children }) {
  return (
    <Link to={to} className={`${variants[variant]} ${className}`}>
      {children}
      {arrow && <ArrowRight size={16} aria-hidden="true" />}
    </Link>
  );
}
