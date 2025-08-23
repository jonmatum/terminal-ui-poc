import React, { ReactNode, useState, useRef, useEffect } from 'react';
import { cn } from '../utils/cn';
import { useTheme } from '../providers/ThemeProvider';

// Navigation Types
export type NavigationVariant = 'horizontal' | 'vertical' | 'sidebar' | 'breadcrumb' | 'tabs';
export type NavigationSize = 'sm' | 'md' | 'lg';
export type NavigationAlignment = 'start' | 'center' | 'end' | 'between' | 'around';

// Base Navigation Item Interface
export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: string;
  badge?: string | number;
  disabled?: boolean;
  active?: boolean;
  children?: NavigationItem[];
  onClick?: (item: NavigationItem) => void;
}

// Navigation Component Props
export interface NavigationProps {
  items: NavigationItem[];
  variant?: NavigationVariant;
  size?: NavigationSize;
  alignment?: NavigationAlignment;
  activeId?: string;
  onItemClick?: (item: NavigationItem) => void;
  className?: string;
  children?: ReactNode;
}

// Navigation Bar Component
export const Navigation: React.FC<NavigationProps> = ({
  items,
  variant = 'horizontal',
  size = 'md',
  alignment = 'start',
  activeId,
  onItemClick,
  className,
  children,
}) => {
  const { mode } = useTheme();
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

  const toggleDropdown = (itemId: string) => {
    setOpenDropdowns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleItemClick = (item: NavigationItem) => {
    if (item.disabled) return;
    
    if (item.children && item.children.length > 0) {
      toggleDropdown(item.id);
    } else {
      onItemClick?.(item);
    }
  };

  const getNavigationClasses = () => {
    const baseClasses = 'font-mono transition-all duration-200';
    
    const variantClasses = {
      horizontal: 'flex items-center',
      vertical: 'flex flex-col',
      sidebar: 'flex flex-col min-h-screen w-64 border-r',
      breadcrumb: 'flex items-center space-x-2',
      tabs: 'flex border-b',
    }[variant];

    const alignmentClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
    }[alignment];

    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    }[size];

    const themeClasses = mode === 'tron' 
      ? 'bg-gray-900 border-cyan-700 text-cyan-400'
      : 'bg-black border-green-700 text-green-400';

    return cn(
      baseClasses,
      variantClasses,
      variant !== 'breadcrumb' && alignmentClasses,
      sizeClasses,
      (variant === 'sidebar' || variant === 'tabs') && themeClasses,
      className
    );
  };

  return (
    <nav className={getNavigationClasses()}>
      {items.map((item) => (
        <NavigationItem
          key={item.id}
          item={item}
          variant={variant}
          size={size}
          isActive={activeId === item.id}
          isOpen={openDropdowns.has(item.id)}
          onClick={handleItemClick}
        />
      ))}
      {children}
    </nav>
  );
};

// Individual Navigation Item Component
interface NavigationItemProps {
  item: NavigationItem;
  variant: NavigationVariant;
  size: NavigationSize;
  isActive: boolean;
  isOpen: boolean;
  onClick: (item: NavigationItem) => void;
  level?: number;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  variant,
  size,
  isActive,
  isOpen,
  onClick,
  level = 0,
}) => {
  const { mode } = useTheme();
  const hasChildren = item.children && item.children.length > 0;

  const getItemClasses = () => {
    const baseClasses = 'relative flex items-center transition-all duration-200 cursor-pointer select-none';
    
    const variantClasses = {
      horizontal: 'px-4 py-2 hover:bg-current/10',
      vertical: 'px-4 py-2 hover:bg-current/10',
      sidebar: 'px-4 py-3 hover:bg-current/10 border-l-2 border-transparent',
      breadcrumb: 'hover:text-current/80',
      tabs: 'px-6 py-3 border-b-2 border-transparent hover:border-current/50',
    }[variant];

    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    }[size];

    const activeClasses = isActive ? {
      horizontal: mode === 'tron' ? 'bg-cyan-400/20 text-cyan-300' : 'bg-green-400/20 text-green-300',
      vertical: mode === 'tron' ? 'bg-cyan-400/20 text-cyan-300' : 'bg-green-400/20 text-green-300',
      sidebar: mode === 'tron' ? 'bg-cyan-400/20 text-cyan-300 border-l-cyan-400' : 'bg-green-400/20 text-green-300 border-l-green-400',
      breadcrumb: mode === 'tron' ? 'text-cyan-300' : 'text-green-300',
      tabs: mode === 'tron' ? 'border-b-cyan-400 text-cyan-300' : 'border-b-green-400 text-green-300',
    }[variant] : '';

    const disabledClasses = item.disabled ? 'opacity-50 cursor-not-allowed' : '';
    const levelClasses = level > 0 ? `ml-${level * 4}` : '';

    return cn(
      baseClasses,
      variantClasses,
      sizeClasses,
      activeClasses,
      disabledClasses,
      levelClasses
    );
  };

  const renderBreadcrumbSeparator = () => {
    if (variant !== 'breadcrumb') return null;
    
    return (
      <span className="text-current/50 mx-2">
        →
      </span>
    );
  };

  return (
    <>
      <div className={getItemClasses()} onClick={() => onClick(item)}>
        {/* Icon */}
        {item.icon && (
          <span className="mr-2 text-current">
            {item.icon}
          </span>
        )}
        
        {/* Label */}
        <span className="flex-1">{item.label}</span>
        
        {/* Badge */}
        {item.badge && (
          <span className={cn(
            'ml-2 px-2 py-1 text-xs rounded-full',
            mode === 'tron' 
              ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
              : 'bg-green-400/20 text-green-300 border border-green-400/30'
          )}>
            {item.badge}
          </span>
        )}
        
        {/* Dropdown Arrow */}
        {hasChildren && (
          <span className="ml-2 text-current">
            {isOpen ? '↑' : '↓'}
          </span>
        )}
      </div>
      
      {/* Breadcrumb Separator */}
      {renderBreadcrumbSeparator()}
      
      {/* Dropdown Menu */}
      {hasChildren && isOpen && (
        <div className={cn(
          'overflow-hidden transition-all duration-200',
          variant === 'horizontal' && 'absolute top-full left-0 min-w-48 bg-current/5 border border-current/20 rounded-md shadow-lg z-50',
          variant === 'vertical' && 'w-full',
          variant === 'sidebar' && 'w-full'
        )}>
          {item.children?.map((child) => (
            <NavigationItem
              key={child.id}
              item={child}
              variant={variant}
              size={size}
              isActive={false}
              isOpen={false}
              onClick={onClick}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </>
  );
};

// Breadcrumb Component
export interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
  }>;
  separator?: ReactNode;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator,
  className,
}) => {
  const { mode } = useTheme();

  const defaultSeparator = (
    <span className="text-current/50">→</span>
  );

  return (
    <nav className={cn('flex items-center space-x-2 font-mono text-sm', className)}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="text-current/50">
              {separator || defaultSeparator}
            </span>
          )}
          <span
            className={cn(
              'transition-colors duration-200',
              item.href || item.onClick ? 'cursor-pointer hover:text-current/80' : 'text-current/70',
              index === items.length - 1 && (mode === 'tron' ? 'text-cyan-300' : 'text-green-300')
            )}
            onClick={item.onClick}
          >
            {item.label}
          </span>
        </React.Fragment>
      ))}
    </nav>
  );
};

// Tab Component
export interface TabItem {
  id: string;
  label: string;
  content?: ReactNode;
  disabled?: boolean;
  badge?: string | number;
  icon?: string;
}

export interface TabsProps {
  items: TabItem[];
  activeId?: string;
  onTabChange?: (tabId: string) => void;
  variant?: 'default' | 'pills' | 'underline';
  size?: NavigationSize;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  activeId,
  onTabChange,
  variant = 'default',
  size = 'md',
  className,
}) => {
  const { mode } = useTheme();
  const [activeTab, setActiveTab] = useState(activeId || items[0]?.id);

  const handleTabClick = (tabId: string) => {
    if (items.find(item => item.id === tabId)?.disabled) return;
    
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const getTabClasses = (item: TabItem) => {
    const baseClasses = 'flex items-center px-4 py-2 font-mono transition-all duration-200 cursor-pointer select-none';
    
    const variantClasses = {
      default: 'border-b-2 border-transparent hover:border-current/50',
      pills: 'rounded-full hover:bg-current/10',
      underline: 'border-b-2 border-transparent hover:border-current/50',
    }[variant];

    const sizeClasses = {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-6 py-3',
    }[size];

    const activeClasses = activeTab === item.id ? {
      default: mode === 'tron' ? 'border-b-cyan-400 text-cyan-300' : 'border-b-green-400 text-green-300',
      pills: mode === 'tron' ? 'bg-cyan-400/20 text-cyan-300' : 'bg-green-400/20 text-green-300',
      underline: mode === 'tron' ? 'border-b-cyan-400 text-cyan-300' : 'border-b-green-400 text-green-300',
    }[variant] : '';

    const disabledClasses = item.disabled ? 'opacity-50 cursor-not-allowed' : '';

    return cn(
      baseClasses,
      variantClasses,
      sizeClasses,
      activeClasses,
      disabledClasses
    );
  };

  const activeTabContent = items.find(item => item.id === activeTab)?.content;

  return (
    <div className={className}>
      {/* Tab Headers */}
      <div className={cn(
        'flex',
        variant === 'pills' ? 'space-x-2' : 'border-b border-current/20'
      )}>
        {items.map((item) => (
          <div
            key={item.id}
            className={getTabClasses(item)}
            onClick={() => handleTabClick(item.id)}
          >
            {item.icon && (
              <span className="mr-2 text-current">{item.icon}</span>
            )}
            <span>{item.label}</span>
            {item.badge && (
              <span className={cn(
                'ml-2 px-2 py-1 text-xs rounded-full',
                mode === 'tron' 
                  ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                  : 'bg-green-400/20 text-green-300 border border-green-400/30'
              )}>
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>
      
      {/* Tab Content */}
      {activeTabContent && (
        <div className="mt-4">
          {activeTabContent}
        </div>
      )}
    </div>
  );
};

// Sidebar Component
export interface SidebarProps {
  items: NavigationItem[];
  title?: string;
  footer?: ReactNode;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  title,
  footer,
  collapsible = false,
  defaultCollapsed = false,
  onToggle,
  className,
}) => {
  const { mode } = useTheme();
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const handleToggle = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    onToggle?.(newCollapsed);
  };

  return (
    <aside className={cn(
      'flex flex-col border-r font-mono transition-all duration-300',
      collapsed ? 'w-16' : 'w-64',
      mode === 'tron' 
        ? 'bg-gray-900 border-cyan-700 text-cyan-400'
        : 'bg-black border-green-700 text-green-400',
      className
    )}>
      {/* Header */}
      {(title || collapsible) && (
        <div className="flex items-center justify-between p-4 border-b border-current/20">
          {!collapsed && title && (
            <h2 className="text-lg font-semibold">{title}</h2>
          )}
          {collapsible && (
            <button
              onClick={handleToggle}
              className="p-1 hover:bg-current/10 rounded transition-colors duration-200"
            >
              <span className="text-current">
                {collapsed ? '→' : '←'}
              </span>
            </button>
          )}
        </div>
      )}
      
      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <Navigation
          items={items}
          variant="sidebar"
          className="border-none bg-transparent"
        />
      </div>
      
      {/* Footer */}
      {footer && !collapsed && (
        <div className="p-4 border-t border-current/20">
          {footer}
        </div>
      )}
    </aside>
  );
};
