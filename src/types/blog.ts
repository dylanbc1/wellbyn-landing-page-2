export enum PostStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

export enum PostCategory {
  HEALTH_TIPS = 'health_tips',
  MEDICAL_TECH = 'medical_tech',
  WELLNESS = 'wellness',
  CLINIC_MANAGEMENT = 'clinic_management',
  PATIENT_EXPERIENCE = 'patient_experience',
  GENERAL = 'general',
}

export enum CommentStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  status: PostStatus;
  category: PostCategory;
  authorName?: string;
  authorEmail?: string;
  authorId?: string;
  authorType?: 'registration';
  tags: string[];
  viewCount: number;
  likeCount: number;
  isFeatured: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  postId: string;
  authorName?: string;
  authorEmail?: string;
  authorId?: string;
  authorType?: 'registration';
  status: CommentStatus;
  parentId?: string;
  likeCount: number;
  isEdited: boolean;
  editedAt?: string;
  createdAt: string;
  updatedAt: string;
  post?: Post;
  parent?: Comment;
}

export interface CreatePostDto {
  title: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  status?: PostStatus;
  category?: PostCategory;
  authorName: string;
  authorEmail: string;
  authorId?: string;
  authorType?: 'registration';
  tags?: string[];
}

export interface CreateCommentDto {
  content: string;
  postId: string;
  authorName: string;
  authorEmail: string;
  authorId?: string;
  authorType?: 'registration';
  parentId?: string;
  status?: CommentStatus;
}

export interface BlogStats {
  totalPosts: number;
  totalComments: number;
  totalViews: number;
  totalLikes: number;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  totalPages: number;
}
