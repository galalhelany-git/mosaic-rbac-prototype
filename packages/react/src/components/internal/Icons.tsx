import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function ChevronIcon({
  direction = 'down',
  ...props
}: IconProps & { direction?: 'down' | 'left' | 'right' | 'up' }) {
  const rotation = { down: 0, left: 90, right: -90, up: 180 }[direction];
  return (
    <svg {...props} aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transform={`rotate(${rotation} 12 12)`}
      />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...props} aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...props} aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function UploadIcon(props: IconProps) {
  return (
    <svg {...props} aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 15v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function MoreIcon(props: IconProps) {
  return (
    <svg {...props} aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
    </svg>
  );
}
