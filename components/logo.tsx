import Image from "next/image"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <Image
        src="/logo-light.png"
        alt="AlienMinds"
        width={40}
        height={40}
        className="h-8 w-auto"
      />
      <span className="font-mono text-lg uppercase tracking-wider text-foreground">
        alienminds
      </span>
    </div>
  )
}
