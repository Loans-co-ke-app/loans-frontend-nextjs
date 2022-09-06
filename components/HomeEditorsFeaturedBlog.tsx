import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import { IPostEntity } from "../interfaces/Post";
import Image from "next/image";
import Link from "next/link";

const HomeEditorsFeaturedBlog = (post: IPostEntity) => {
  return (
    <Link href={`/post/${post.slug}`} key={post.slug} className="relative shadow-md h-48 cursor-pointer" onClick={e => {
    }}>
      <Image
        src={post.featured_image}
        alt=""
        className="w-full absolute h-full object-cover -z-[1]"
      />
      <div className="h-full w-full z-10 bg-slate-600 bg-opacity-20 p-2 flex flex-col justify-between text-white hover:bg-gradient-to-t hover:from-gray-400 hover:via-gray-400/25 hover:to-purple-gray-400/25 transition duration-500">
        {/* Actions */}
        <div className="w-full flex items-center justify-between">
          {/* left */}
          <div>
            {post.tags?.split(",").map((tag,index) => (
              <span key={tag+index} className="bg-purple-500 text-white px-1 uppercase text-[.75rem]">
                {tag}
              </span>
            ))}
          </div>
          {/* right */}
          <div className="text-gray-500 bg-gray-200 h-fit px-1 rounded-md">
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </div>
        {/* about post */}
        <div>
          <div className="text-[.75rem] flex gap-2">
            <span>By {post.authors.first_name} {post.authors.last_name}</span><span>On {moment(post.publish_date).format('LL')}</span>
          </div>
          <h3 className="text-2xl ">{post.article_title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default HomeEditorsFeaturedBlog;