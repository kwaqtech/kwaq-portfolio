import Image from "next/image";
import { MapPin, Mail, Link as LinkIcon, Building2 } from "lucide-react";
import { IDENTITY } from "@/data/cv";

export function ProfileSidebar() {
  return (
    <div className="flex flex-col gap-4">
      {/* Avatar & Name */}
      <div className="flex flex-col gap-4">
        <div className="relative w-full aspect-square max-w-[296px] mx-auto md:mx-0 rounded-full border border-border overflow-hidden bg-muted">
          {/* Using a placeholder avatar since we don't have a real image yet */}
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted-foreground bg-secondary">
            CQ
          </div>
        </div>
        <div className="pt-2">
          <h1 className="text-2xl font-bold leading-tight text-foreground">{IDENTITY.name}</h1>
          <h2 className="text-xl font-light text-muted-foreground">{IDENTITY.alias}</h2>
        </div>
      </div>

      {/* Bio */}
      <div className="text-base text-foreground mt-1 mb-2">
        <p>{IDENTITY.summary}</p>
      </div>

      {/* Action Button */}
      <button className="w-full py-1.5 px-3 bg-secondary hover:bg-border border border-border rounded-md text-sm font-medium transition-colors mb-4">
        Follow
      </button>

      {/* Details List */}
      <ul className="flex flex-col gap-1.5 text-sm text-foreground">
        <li className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold">Presist</span>
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span>{IDENTITY.location}</span>
        </li>
        <li className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <a href={`mailto:${IDENTITY.email}`} className="hover:text-accent hover:underline">
            {IDENTITY.email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <LinkIcon className="h-4 w-4 text-muted-foreground" />
          <a href="https://kwaqtech.github.io" className="hover:text-accent hover:underline">
            kwaqtech.github.io
          </a>
        </li>
      </ul>
    </div>
  );
}
