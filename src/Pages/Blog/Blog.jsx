const Blog = (blogs) => {

    

	return (
		<div className="">
			<div style={{'width':'400px', 'height':'300px'}} className="card bg-gradient-to-r from-slate-700 via-gray-800 to-gray-900 text-white w-96 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:border hover:border-blue-500 hover:border-opacity-50">
				
				<div className="card-body">
                <h1></h1>
					<h2 className="card-title">
                    {blogs.blogs.id}.
						{blogs.blogs.title}
						<div className="badge badge-secondary">NEW</div>
					</h2>
					<p>{blogs.blogs.body}</p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline">Technology</div>
						<div className="badge badge-outline">Programming</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
