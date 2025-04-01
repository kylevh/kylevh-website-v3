import { Link } from "react-router";
import Card from "./Card";
import { BlogPost } from "../../types/constants";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  featured?: boolean;
}

export default function BlogCard({ post, className = "", featured = false }: BlogCardProps) {
  return (
    <Card 
      className={`${className} ${featured ? 'max-h-none' : 'max-h-64'}`}
    >
      {/* Title */}
      <p className={`${featured ? 'text-lg' : ''} font-medium text-neutral-900`}>{post.title}</p>

      {/* Date and Reading Time */}
      <div className="flex items-center gap-2 text-xs text-neutral-400">
        <span>{new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}</span>
        <span>•</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-xs">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-neutral-400 bg-neutral-200 rounded-lg p-1 px-2"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Preview Text */}
      <p className="text-neutral-400 line-clamp-2">{post.preview}</p>

      {/* Read More Link */}
      <Link to={`/blog/${post.id}`} className="flex w-full">
        <button className="bg-neutral-200 flex-1 text-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-300 transition-colors">
          read more
        </button>
      </Link>
    </Card>
  );
}