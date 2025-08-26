import { BackgroundDecoration } from '@/types';

interface BackgroundDecorationsProps {
  decorations?: BackgroundDecoration[];
  className?: string;
}

const defaultDecorations: BackgroundDecoration[] = [
  {
    position: "absolute top-10 sm:top-20 left-5 sm:left-10",
    color: "bg-green-200",
    size: "w-48 sm:w-72 h-48 sm:h-72",
    animationDelay: 0
  },
  {
    position: "absolute top-32 sm:top-40 right-5 sm:right-10",
    color: "bg-green-300", 
    size: "w-48 sm:w-72 h-48 sm:h-72",
    animationDelay: 2000
  },
  {
    position: "absolute -bottom-8 left-1/4 sm:left-1/3",
    color: "bg-green-400",
    size: "w-48 sm:w-72 h-48 sm:h-72", 
    animationDelay: 4000
  }
];

export function BackgroundDecorations({ 
  decorations = defaultDecorations,
  className = ""
}: BackgroundDecorationsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {decorations.map((decoration, index) => (
        <div
          key={index}
          className={`${decoration.position} ${decoration.size} ${decoration.color} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float`}
          style={{ 
            animationDelay: decoration.animationDelay ? `${decoration.animationDelay}ms` : undefined
          }}
        />
      ))}
    </div>
  );
}