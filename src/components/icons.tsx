import { ReactNode } from "react";

type IconProps = {
  size?: number;
};

const IconBase = ({ size = 20, children }: IconProps & { children: ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 256 256"
    fill="none"
    stroke="currentColor"
    strokeWidth="20"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const HouseIcon = ({ size }: IconProps) => (
  <IconBase size={size}>
    <path d="M152,216V152a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v64" />
    <path d="M10.1,108.7,118.4,28.2a16.1,16.1,0,0,1,19.2,0L245.9,108.7" />
    <path d="M224,120v96a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120" />
  </IconBase>
);

export const FlaskIcon = ({ size }: IconProps) => (
  <IconBase size={size}>
    <path d="M104,32V70.8a8,8,0,0,1-1.9,5.2L62.8,115.2A32,32,0,0,0,82.3,176h91.4a32,32,0,0,0,19.5-60.8L153.9,76a8,8,0,0,1-1.9-5.2V32" />
    <path d="M88,32h80" />
    <path d="M62.8,115.2h130.4" />
  </IconBase>
);

export const PersonIcon = ({ size }: IconProps) => (
  <IconBase size={size}>
    <circle cx="128" cy="96" r="40" />
    <path d="M63.8,216A64,64,0,0,1,192.2,216" />
  </IconBase>
);

export const ClockIcon = ({ size }: IconProps) => (
  <IconBase size={size}>
    <path d="M236,128a108,108,0,0,1-108,108A108.2,108.2,0,0,1,42.1,185.3a8,8,0,0,1,11.4-11.2A92,92,0,1,0,36,128a91.9,91.9,0,0,0,18.6,54.6,8,8,0,0,1-12.5,10A108,108,0,1,1,236,128Z" />
    <path d="M128,80v48a8,8,0,0,0,2.3,5.7l24,24" />
  </IconBase>
);
