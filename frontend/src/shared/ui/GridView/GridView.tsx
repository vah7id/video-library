import { GridViewProps } from './types';

export function GridView({ children, className }: GridViewProps) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
            {children}
        </div>
    );
}   
