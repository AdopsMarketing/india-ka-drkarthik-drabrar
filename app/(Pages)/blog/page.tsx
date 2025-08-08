"use client";
import React from "react";
import Hero from "./Hero";
import BlogCard from "./BlogCard";
import Newsletter from "./Newsletter";

const Blog = () => {
  const blogPosts = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/bd40de363c9775fbe6ad5eca5f474ba032b75d7a?width=1306",
      title: "Knee Pain Explained",
      description:
        "Understand why knees hurt, when to seek help, and what non-surgical and surgical options are available.",
      readTime: "5 min read",
      imageAlt: "Knee Pain Explained",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ee01c8213c83f104dfd3fc31ac02c096e3c0037f?width=1306",
      title: "Hip Pain & Daily Life Hacks",
      description:
        "From better sleeping positions to chairs that support hip recovery, small changes make a big difference.",
      readTime: "4 min read",
      imageAlt: "Hip Pain",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ee57e8ead5a1674473b224f027426a0b3c336ec7?width=1306",
      title: "Recovery Tips Week by Week",
      description:
        "What to expect during the first 6–12 weeks after joint replacement — including exercises and red flags.",
      readTime: "8 min read",
      imageAlt: "ortho doctor explaining Recovery Tips to patient",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b5f0c182cf8cd89594f85f64a99981fa9cc8d462?width=1306",
      title: "Patient Stories",
      description:
        "Real journeys of recovery from surgery. Hear directly from farmers, teachers, homemakers, and more.",
      readTime: "6 min read",
      imageAlt: "ortho patient",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4ef72c2f03ccb2b0bd003cbeaf63b9ec5d52dfc9?width=1306",
      title: "Recovery Tips Week by Week",
      description:
        "What to expect during the first 6–12 weeks after joint replacement — including exercises and red flags.",
      readTime: "8 min read",
      imageAlt: "In ಕನ್ನಡ",
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <main>
          <Hero />

          <section
            className=" grid grid-cols-[repeat(2,1fr)] gap-8 mb-[100px] px-[58px] py-0 max-md:grid-cols-[1fr] max-md:gap-10 max-md:justify-items-center max-md:px-5 max-md:py-0 max-sm:gap-[30px] max-sm:px-4 max-sm:py-0"
            id="blog"
          >
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={index === 4 ? "col-[1] max-md:col-auto" : ""}
              >
                <BlogCard
                  image={post.image}
                  title={post.title}
                  description={post.description}
                  readTime={post.readTime}
                  imageAlt={post.imageAlt}
                />
              </div>
            ))}
          </section>
        </main>
      </div>
      <Newsletter />
    </>
  );
};

export default Blog;
