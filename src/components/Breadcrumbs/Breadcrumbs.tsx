import React from 'react';
import './Breadcrumbs.scss';

interface BreadcrumbsProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="breadcrumbs">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="breadcrumbs__separator">{'<'}</span>}
          {item.href ? (
            <a href={item.href} className="breadcrumbs__link">
              {item.label}
            </a>
          ) : (
            <span className="breadcrumbs__current">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;