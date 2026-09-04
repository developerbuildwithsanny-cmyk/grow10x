import React from 'react';
import { Building2, GraduationCap, Briefcase, User } from 'lucide-react';

export const CompanyBuildingSvg = () => (
  <Building2 className="size-6 text-brand" />
);

export const UserGraduateSvg = () => (
  <GraduationCap className="size-6 text-brand" />
);

export const PackageSvg = () => (
  <Briefcase className="size-6 text-brand" />
);

const CompanyBadge = ({ name }) => (
  <span className="inline-flex items-center rounded-md bg-white/80 px-2.5 py-1 text-xs font-bold text-gray-800 shadow-xs border border-gray-200/60">
    {name}
  </span>
);

export const MckinleySvg = () => <CompanyBadge name="McKinley Rice" />;
export const MedExpertsSvg = () => <CompanyBadge name="MedExperts" />;
export const KuroGamingSvg = () => <CompanyBadge name="Kuro Gaming" />;
export const SticSoftSvg = () => <CompanyBadge name="SticSoft" />;
export const DevRabbit = () => <CompanyBadge name="DevRabbit" />;
export const OnPassiveSvg = () => <CompanyBadge name="ONPASSIVE" />;

const AvatarPlaceholder = () => (
  <div className="flex h-full w-full items-center justify-center text-gray-600">
    <User className="size-8 sm:size-10" />
  </div>
);

export const StudentImage1 = () => <AvatarPlaceholder />;
export const StudentImage2 = () => <AvatarPlaceholder />;
export const StudentImage3 = () => <AvatarPlaceholder />;
export const StudentImage4 = () => <AvatarPlaceholder />;
export const StudentImage5 = () => <AvatarPlaceholder />;
export const StudentImage6 = () => <AvatarPlaceholder />;

