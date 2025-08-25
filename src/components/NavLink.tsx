import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: any;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

export const NavLink = ({
  href,
  children,
  isActive = false,
  className,
  onClick,
}: NavLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        'relative px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-200',
        'hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent',
        'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-200',
        'hover:after:w-full',
        isActive && 'text-blue-400 font-semibold after:w-full',
        className
      )}
      onClick={onClick}
    >
      {children}
    </a>
  );
}; 