import * as React from 'react';

interface InfiniteScrollProps {
    isLoading: boolean;
    hasMore: boolean;
    next: () => unknown;
    hasPrevious?: boolean;
    prev?: () => unknown;
    threshold?: number;
    root?: Element | Document | null;
    rootMargin?: string;
    reverse?: boolean;
    moveCursorTop?: boolean;
    children?: React.ReactNode;
}

export default function InfiniteScroll({
                                           isLoading,
                                           hasMore,
                                           hasPrevious = false,
                                           prev,
                                           next,
                                           threshold = 1,
                                           root = null,
                                           rootMargin = '0px',
                                           reverse = false,
                                           moveCursorTop = false,
                                           children,
                                       }: InfiniteScrollProps) {
    const observer = React.useRef<IntersectionObserver | null>(null);
    const prevIsLoading = React.useRef(isLoading);

    React.useEffect(() => {
        if (moveCursorTop && prevIsLoading.current && !isLoading && root) {
            if ('scrollTop' in root) {
                (root as HTMLElement).scrollTop = 0;
            } else if ('documentElement' in root) {
                (root as Document).documentElement.scrollTop = 0;
            }
        }
        prevIsLoading.current = isLoading;
    }, [isLoading, root, moveCursorTop]);

    const observerRef = React.useCallback(
        (node: HTMLElement | null) => {
            if (isLoading || !hasMore) return;

            const clampedThreshold = Math.max(0, Math.min(threshold, 1));

            if (observer.current) observer.current.disconnect();
            if (!node) return;

            observer.current = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && hasMore) {
                        next();
                    }
                },
                { root, rootMargin, threshold: clampedThreshold }
            );

            observer.current.observe(node);
        },
        [hasMore, isLoading, next, threshold, root, rootMargin]
    );

    const childrenArray = React.useMemo(() => React.Children.toArray(children), [children]);

    return (
        <>
            {childrenArray.map((child, index) => {
                if (!React.isValidElement(child)) {
                    if (process.env.NODE_ENV === 'development') {
                        console.warn('Each child of InfiniteScroll must be a valid React element.');
                    }
                    return child;
                }

                const isTarget = reverse ? index === 0 : index === childrenArray.length - 1;

                return React.cloneElement(child, {
                    ...(isTarget ? { ref: observerRef } : {}),
                });
            })}
        </>
    );
}
