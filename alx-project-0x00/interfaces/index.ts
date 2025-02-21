export interface PillProps {
  styles: string
}


export interface ButtonProps {
  style: string;
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
}