'use client'

import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Spinner } from "@nextui-org/react";
// import QuillNoSSRWrapper from "./QuillNoSSRWrapper";

const RichTextEditor = () => {

  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), 
  { ssr: false, loading: () => <Spinner /> }), []);

  const myColors = [
    "black",
    "blue",
    "red",
    "gray",
    "green",
    "yellow",
    "purple",
  ]

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: myColors }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "align",
    "indent",
    "code",
  ];

  const [text, setText] = useState("Write content here");

  const handleTextChange = (content: any) => {
    setText(content);
  };

  return (
    <>
      <ReactQuill 
        theme="snow"
        value={text}
        modules={modules}
        formats={formats}
        onChange={handleTextChange}
        className="h-44 pb-12"
      />
    </>
  );
};

export default RichTextEditor;