import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function ArchitecturalImage({
  src,
  alt,
  title,
  className = '',
  loading = 'lazy',
}: ArchitecturalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-architectural text-foreground-on-dark p-6 text-center ${className}`}
      >
        <Building2 className="h-8 w-8 stroke-[1.25] opacity-75" aria-hidden="true" />
        {title && (
          <span className="font-display text-lg tracking-tight text-foreground-on-dark/90">
            {title}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
