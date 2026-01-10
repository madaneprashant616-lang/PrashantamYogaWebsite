import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useEffect } from 'react';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h2>
                    <Link to="/blog" className="btn-primary">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white min-h-screen pt-24 pb-20"
        >
            {/* Hero Header */}
            <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 z-10" />
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end container-custom pb-16 text-white">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors w-fit"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Articles
                    </Link>
                    <div className="flex items-center space-x-4 text-sm font-medium mb-4">
                        <span className="bg-blue-600 px-3 py-1 rounded-full">{post.category}</span>
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {post.readTime}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight text-white drop-shadow-md">
                        {post.title}
                    </h1>
                </div>
            </div>

            <div className="container-custom py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-8">
                    <div className="bg-white rounded-2xl p-6 md:p-0">
                        {/* Author Info */}
                        <div className="flex items-center justify-between border-b border-gray-100 pb-8 mb-8">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                    <User className="w-6 h-6 text-gray-500" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{post.author}</p>
                                    <p className="text-sm text-gray-500">{post.role} • {post.date}</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Article Body */}
                        <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </article>

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <div className="flex flex-wrap gap-2">
                                {post.tags && post.tags.map(tag => (
                                    <span key={tag} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                        <Tag className="w-3 h-3 mr-2" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    {/* Related/Latest Posts */}
                    <div className="bg-gray-50 p-6 rounded-2xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Latest Articles</h3>
                        <div className="space-y-6">
                            {blogPosts
                                .filter(p => p.id !== post.id)
                                .slice(0, 3)
                                .map(related => (
                                    <Link key={related.id} to={`/blog/${related.id}`} className="group block">
                                        <div className="flex space-x-4">
                                            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                                <img
                                                    src={related.image}
                                                    alt={related.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm mb-1">
                                                    {related.title}
                                                </h4>
                                                <span className="text-xs text-gray-500">{related.date}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>

                    <div className="bg-blue-600 text-white p-8 rounded-2xl text-center">
                        <h3 className="text-xl font-bold mb-4">Start Your Journey</h3>
                        <p className="text-blue-100 mb-6">Ready to experience the benefits of therapeutic yoga?</p>
                        <Link to="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium inline-block hover:bg-blue-50 transition-colors">
                            Book a Class
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogPost;
