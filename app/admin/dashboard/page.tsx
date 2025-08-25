'use client';
import { useState } from 'react';
import axios from 'axios';
import { BlogPost } from '@/app/types/types';

const Page = () => {
    const [formData, setFormData] = useState<Omit<BlogPost, 'id'>>({
        title: '',
        content: '',
        excerpt: '',
        featuredImage: '',
        metaTitle: '',
        metaDescription: '',
        date: '',
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get<BlogPost>(`http:12223:8000/blog/${searchTitle}`);
            const data = response.data;
            console.log('Fetched blog data:', data)
            setFormData(data);
            if (data.id) {
                setIsUpdateMode(true);
            }
            setSuccessMessage('Blog data loaded for editing.');
        } catch (error) {
            console.error('Error fetching blog:', error);
            setSuccessMessage('Blog not found.');
            setIsUpdateMode(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');

        try {
            if (isUpdateMode) {
                await axios.put(`/blog/${formData.title}`, formData);
                setSuccessMessage('Blog post updated successfully');
            } else {
                await axios.post('/blog', formData);
                setSuccessMessage('Blog post created successfully');
            }

            setFormData({
                title: '',
                content: '',
                excerpt: '',
                featuredImage: '',
                metaTitle: '',
                metaDescription: '',
                date: '',
            });
            setIsUpdateMode(false);
            setSearchTitle('');
            setSuccessMessage('');
        } catch (error) {
            console.error('Error saving blog:', error);
            setSuccessMessage('Something went wrong.');
        }

        setLoading(false);
    };

    return (
        <div className="max-w-4xl mx-auto md:p-10">
            <div className="rounded-2xl p-8 md:p-10 bg-white/90" style={{ boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.25)' }}
            >
                <h1 className="text-3xl font-semibold font-cormorant_garamond mb-6">{isUpdateMode ? 'Edit Blog Post' : 'Create Blog Post'}</h1>

                {successMessage && (
                    <div className="mb-4 text-green-600 font-medium">{successMessage}</div>
                )}

                <div className="flex flex-col md:flex-row gap-2 mb-4">
                    <input
                        type="text"
                        placeholder="Search by title"
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                        className="w-full text-sm  text-Black py-2.5 border border-[#D1D5DB] px-3 rounded-sm focus:outline-none shadow-sm"
                    />
                    <button onClick={handleSearch} className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors hover:bg-blue-800 disabled:opacity-50">
                        Search
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 py-5 !font-normal ">
                    <label className="!font-medium">
                        Title
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full text-sm text-Black py-2.5 border mt-2 border-[#D1D5DB] px-3 rounded-sm focus:outline-none shadow-sm"
                        />
                    </label>
                    <label className="!font-medium">
                        Meta Title
                        <input
                            name="metaTitle"
                            value={formData.metaTitle}
                            onChange={handleChange}
                            className="w-full text-sm text-Black py-2.5 border mt-2 border-[#D1D5DB] px-3 rounded-sm focus:outline-none shadow-sm"
                        />
                    </label>
                    <label className="!font-medium">
                        Meta Description
                        <input
                            name="metaDescription"
                            value={formData.metaDescription}
                            onChange={handleChange}
                            className="w-full text-sm text-Black py-2.5 border mt-2 border-[#D1D5DB] px-3 rounded-sm focus:outline-none shadow-sm"
                        />
                    </label>
                    <label className="!font-medium">
                        Excerpt
                        <input
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleChange}
                            className="w-full text-sm text-Black py-2.5 border mt-2 border-[#D1D5DB] px-3 rounded-sm focus:outline-none shadow-sm"
                        />
                    </label>
                    <label className="!font-medium">
                        Featured Image URL
                        <input
                            name="featuredImage" value={formData.featuredImage}
                            onChange={handleChange}
                            className="w-full text-sm text-Black py-2.5 border mt-2 border-[#D1D5DB] px-3 rounded-sm focus:outline-none shadow-sm"
                        />
                    </label>
                    <label className="!font-medium">
                        Date
                        <input type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange} required
                            className="w-full text-sm text-Black py-2.5 border mt-2 border-[#D1D5DB] px-3 rounded-sm focus:outline-none shadow-sm"
                        />
                    </label>
                    <label className="!font-medium">
                        Markdown Content
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange} rows={10}
                            className="w-full text-sm text-Black py-2.5 border mt-2 border-[#D1D5DB] px-3 rounded-sm focus:outline-none shadow-sm"
                        />
                    </label>

                    <button  type="submit" disabled={loading} className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors hover:bg-blue-800 disabled:opacity-50">
                        {loading ? 'Saving...' : isUpdateMode ? 'Update Post' : 'Create Post'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;