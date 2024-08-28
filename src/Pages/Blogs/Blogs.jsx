import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch("blogs.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	return (
		<div className=" grid grid-cols-3 gap-4 text-white justify-items-center">
			
			{blogs.map((blog) =><Blog key={blog.id} blogs={blog} ></Blog>)}
		</div>
	);
};

export default Blogs;
