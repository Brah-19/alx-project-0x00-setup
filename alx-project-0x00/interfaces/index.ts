export interface PillProps {
  styles: string
}


export interface ButtonProps {
  style: string;
  size: 'small' | 'medium' | 'large' | 'full';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-full';
  onClick?: () => void;
}