// Minimal line icons — 1.6px stroke, round caps (feather-style)
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const Svg = ({ children, size = 18, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>{children}</svg>
)

export const SearchIcon = (p) => (
  <Svg {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Svg>
)
export const HeartIcon = ({ filled, ...p }) => (
  <Svg {...p} fill={filled ? 'currentColor' : 'none'}>
    <path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 8 3.2 4.9 6.3 4.5c1.9-.2 3.7.7 4.7 2.3h2c1-1.6 2.8-2.5 4.7-2.3 3.1.4 4.9 3.5 3.6 6.8-1.8 4.6-9.3 9.2-9.3 9.2Z" />
  </Svg>
)
export const WhatsAppIcon = (p) => (
  <Svg {...p} strokeWidth={1.5}>
    <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z" />
    <path d="M9.3 8.9c.6-.2 1 0 1.2.5l.5 1.1c.1.3 0 .6-.2.8l-.6.6c.5 1.1 1.4 2 2.5 2.5l.6-.6c.2-.2.5-.3.8-.2l1.1.5c.5.2.7.6.5 1.2-.3.9-1.4 1.4-2.3 1.1-2.5-.8-4.6-2.9-5.4-5.4-.3-.9.2-2 1.3-2.1Z" fill="currentColor" stroke="none" />
  </Svg>
)
export const StarIcon = ({ half, ...p }) => (
  <Svg {...p} strokeWidth={0} fill="currentColor">
    {half
      ? <path d="M12 3v13.4l-4.6 3 1.7-5.3-4.5-3.3h5.6L12 3Zm0 0 1.8 4.8h5.6l-4.5 3.3 1.7 5.3-4.6-3V3Z" />
      : <path d="m12 3 2.1 5.6h5.9l-4.7 3.5 1.8 5.7-5.1-3.4-5.1 3.4 1.8-5.7L4 8.6h5.9L12 3Z" />}
  </Svg>
)
export const BagIcon = (p) => (
  <Svg {...p}><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 10V6a3 3 0 0 1 6 0v4" /></Svg>
)
export const ChevronDown = (p) => <Svg {...p}><path d="m6 9 6 6 6-6" /></Svg>
export const CloseIcon = (p) => <Svg {...p}><path d="M6 6l12 12M18 6 6 18" /></Svg>
export const EyeIcon = (p) => (
  <Svg {...p}><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="3" /></Svg>
)
export const MapPinIcon = (p) => (
  <Svg {...p}><path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></Svg>
)
export const PhoneIcon = (p) => (
  <Svg {...p}><path d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></Svg>
)
export const InstaIcon = (p) => (
  <Svg {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" strokeWidth="0" /></Svg>
)
export const ArrowRight = (p) => <Svg {...p}><path d="M4 12h16m-6-6 6 6-6 6" /></Svg>
export const TruckIcon = (p) => (
  <Svg {...p}><path d="M2.5 6h11v10h-11zM13.5 10h4l3 3v3h-7z" /><circle cx="6.5" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></Svg>
)
export const RefreshIcon = (p) => (
  <Svg {...p}><path d="M20 11a8 8 0 1 0-2 5.5" /><path d="M20 5v6h-6" /></Svg>
)
export const ShieldIcon = (p) => (
  <Svg {...p}><path d="M12 3 5 5.8v5.4c0 4.4 3 8 7 9.8 4-1.8 7-5.4 7-9.8V5.8L12 3Z" /><path d="m9.2 12 2 2 3.6-3.8" /></Svg>
)
export const SparkleIcon = (p) => (
  <Svg {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></Svg>
)
export const RupeeIcon = (p) => (
  <Svg {...p}><path d="M7 5h10M7 9h10M15.5 5c0 4-3 5.5-6.5 5.5L15.5 19" /></Svg>
)
export const UsersIcon = (p) => (
  <Svg {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3.5 20c.6-3.3 2.8-5 5.5-5s4.9 1.7 5.5 5" /><path d="M15.5 5.5a3 3 0 0 1 0 5.4M17.5 15.4c1.6.7 2.6 2.2 3 4.6" /></Svg>
)
export const GridIcon = (p) => (
  <Svg {...p}><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" /></Svg>
)
