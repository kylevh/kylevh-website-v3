import { Link } from "react-router";
import Card from "./Card";
import { BlogPost } from "../../types/constants";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  featured?: boolean;
}

export default function BlogCard({ post, className = "", featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card 
      className={`${className} ${featured ? 'max-h-none' : 'max-h-64'}`}
      role="article"
      aria-labelledby={`blog-title-${post.id}`}
    >
      {/* Title */}
      <h2 
        id={`blog-title-${post.id}`} 
        className={`${featured ? 'text-lg' : ''} font-medium text-neutral-900`}
      >
        {post.title}
      </h2>

      {/* Date */}
      <div className="flex items-center gap-2 text-xs text-neutral-400">
        <time 
          dateTime={post.date}
          aria-label={`Published on ${formattedDate}`}
        >
          {formattedDate}
        </time>
      </div>

      {/* Preview */}
      <p 
        className="text-neutral-400"
        aria-label="Post preview"
      >
        {post.preview}
      </p>

      {/* Tags */}
      <div 
        className="flex flex-wrap gap-2 text-xs"
        role="list"
        aria-label="Post categories"
      >
        {post.tags.map((tag) => (
          <span
            key={tag}
            role="listitem"
            className="text-neutral-400 bg-neutral-200 rounded-lg p-1 px-2"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Read more link */}
      <Link 
        to={`/blog/${post.id}`}
        className="flex w-full"
        aria-labelledby={`read-more-${post.id}`}
      >
        <button 
          id={`read-more-${post.id}`}
          className="bg-neutral-200 flex-1 text-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-300 transition-colors"
          aria-label={`Read full article about ${post.title}`}
        >
          read more
        </button>
      </Link>
    </Card>
  );
}