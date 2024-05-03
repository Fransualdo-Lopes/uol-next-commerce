// blur de carregamento dos cards (skeleton)
import clsx from "clsx";

type SkeletonCardProps = {
    isLoading?: boolean;
};

export default function SkeletonCard({ isLoading }: SkeletonCardProps) {
    return (
        <div className={clsx(
            'flex flex-col shadow-lg h-96 p-0.5 text-black hover:bg-orange-100',
            {
                'relative overflow-hidden before:absolute inset-0 before-translate-x-full before:animate-[shimmer_1.5s_infinit]': isLoading,
            }
        )}>
            <div className='relative max-h-73 flex-1 bg-zinc-200' />        
        </div>
    );
}
