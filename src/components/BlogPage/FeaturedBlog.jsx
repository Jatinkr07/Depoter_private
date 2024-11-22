/* eslint-disable react/no-unescaped-entities */
import blogImg from "../../assets/blog/blog1.jpg";

const blogData = [
  {
    id: 1,
    title: "Why I started Blogi",
    description:
      "My name is Jhon Doe and I am the founder of Blogi. Blogi is my passion, which is why I'm so excited ...",
    author: "Brooklyn Simmons",
    date: "Feb 14, 2018",
    authorImage: blogImg,
  },
  {
    id: 2,
    title: "Blogi Launches Public URL",
    description:
      "My name is Jhon Doe and I am the founder of Blogi. Blogi is my passion, which is why I'm so excited ...",
    author: "Darrell Steward",
    date: "Feb 14, 2018",
    authorImage: blogImg,
  },
  {
    id: 3,
    title: "Why I started Blogi",
    description:
      "My name is Jhon Doe and I am the founder of Blogi. Blogi is my passion, which is why I'm so excited ...",
    author: "Jerome Bell",
    date: "Feb 14, 2018",
    authorImage: blogImg,
  },
  {
    id: 4,
    title: "Why I started Blogi",
    description:
      "My name is Jhon Doe and I am the founder of Blogi. Blogi is my passion, which is why I'm so excited ...",
    author: "Jane Cooper",
    date: "Feb 14, 2018",
    authorImage: blogImg,
  },
];

export default function FeaturedBlog() {
  return (
    <section className="py-12 mx-4 -mb-64 text-center md:-mb-44 ">
      <h3 className="mb-6 text-3xl font-normal sm:text-5xl">Featured Blogs</h3>
      <div className="grid grid-cols-1 gap-6 sm:mx-12 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="p-4 bg-white shadow-md cursor-pointer rounded-3xl "
          >
            <div className="relative flex flex-col items-center">
              <div className="w-full mb-4">
                <img
                  src={blogImg}
                  alt="Blog img"
                  className="w-full rounded-3xl h-[220px] sm:h-[250px] lg:h-[220px] shadow-sm"
                />
              </div>

              <div className="absolute flex items-center justify-end">
                <img
                  src={blog.authorImage}
                  alt="Author"
                  width={40}
                  height={40}
                  className="rounded-full sm:h-16 sm:w-16 lg:h-16 lg:w-16 md:translate-x-36 md:translate-y-[178px] transition-transform transform hover:scale-110 shadow-md"
                />
              </div>

              <div className="px-4 ">
                <h4 className="text-xl font-semibold text-left sm:text-2xl">
                  {blog.title}
                </h4>
                <p className="text-sm text-left text-gray-500 sm:text-base">
                  {blog.description}
                </p>

                <div className="flex items-center ">
                  <div className="flex flex-row space-x-8 text-left">
                    <p className="text-sm font-semibold underline sm:text-base">
                      By {blog.author}
                    </p>
                    <p className="text-sm text-gray-500">{blog.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button className="px-4 py-2 mx-1 text-sm text-white bg-[#FFBE2E] rounded-full sm:text-base">
          01
        </button>
        <button className="px-4 py-2 mx-1 text-sm text-blue-500 sm:text-base">
          02
        </button>
        <button className="px-4 py-2 mx-1 text-sm text-blue-500 sm:text-base">
          03
        </button>
        <button className="px-4 py-2 mx-1 text-sm text-blue-500 sm:text-base">
          04
        </button>
        <button className="px-4 py-2 mx-1 text-sm text-blue-500 sm:text-base">
          Next
        </button>
      </div>
    </section>
  );
}
