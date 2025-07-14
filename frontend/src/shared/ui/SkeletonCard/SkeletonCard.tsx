'use client';

import { Card } from "@material-tailwind/react";
import { SkeletonCardProps } from './types';

export function SkeletonCard({
    className,
}: SkeletonCardProps) {
    return (
        <Card className={`animate-pulse ${className || ''}`}>
            <div className="space-y-3 p-4">
                {/* Title skeleton */}
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                </div>

                {/* Date  skeleton */}
                <div className="flex items-center justify-between">
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                </div>

                {/* Tags skeleton */}
                <div className="flex flex-wrap gap-1">
                    <div className="h-5 bg-gray-200 rounded-full w-12"></div>
                    <div className="h-5 bg-gray-200 rounded-full w-16"></div>
                    <div className="h-5 bg-gray-200 rounded-full w-10"></div>
                </div>
            </div>
        </Card>
    );
} 