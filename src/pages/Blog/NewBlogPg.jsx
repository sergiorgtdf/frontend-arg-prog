import ReactQuill from "react-quill";

import { useState } from "react";

function CreatePost() {}

const NewBlogPg = () => {
    return (
        <div className="flex flex-1 h-screen items-center justify-center">
            <form>
                <h1 className="text-3xl text-center font-semibold mb-5 text-white">
                    New Blog
                </h1>
                <button className="h-10 px-6  font-semibold rounded-md bg-green-500 text-white my-3 align-content">
                    New Blog
                </button>

                <input
                    className="w-full bg-zinc-700 text-white px4  py-2 rounded-md my-2 p-2"
                    type="text"
                    placeholder="Title"
                    required
                />
                <input
                    className="w-full bg-zinc-700 text-white px4  py-2 rounded-md my-2 p-2"
                    type="text"
                    placeholder="Summary"
                    required
                />

                <input
                    className="w-full bg-zinc-700 text-white px4  py-2 rounded-md my-2 p-2"
                    type="text"
                    placeholder="URL Image"
                />
                <ReactQuill />

                <textarea
                    className="w-full bg-zinc-700 text-white px4  py-2 rounded-md my-2 p-2"
                    type="text"
                    placeholder="Content"
                    required
                />
                <button className="h-10 px-6  font-semibold rounded-md bg-green-500 text-white my-3 align-content">
                    Create
                </button>
            </form>
        </div>
    );
};

export default NewBlogPg;
