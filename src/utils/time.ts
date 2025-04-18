export function timeAgo(createdAt: Date): string {
    const now = new Date();
    const diffInMs = now.getTime() - createdAt.getTime();
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

    if (diffInSeconds === 1) {
        return "1 second ago";
    }
    
    if (diffInSeconds < 60) {
        return `${diffInSeconds} seconds ago`;
    }
    
    if (diffInMinutes === 1) {
        return "1 minute ago";
    }

    return `${diffInMinutes} minutes ago`;
}