"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import StyledMarkdown from "@/components/markdown/view/StyledMarkdown";

interface CustomMarkdownProps {
  mdFilePath: string;
}

// ReactMarkdown의 components
const components = {
  img: ({ ...props }) => (
    <div style={{ position: "relative" }}>
      <Image
        src={props.src}
        alt={props.alt}
        width={500}
        height={500}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ borderRadius: 2, width: "100%", height: "auto" }}
        {...props}
      />
    </div>
  ),
  a: ({ ...props }) => {
    const isHttp = props.href.includes("http");

    return isHttp ? (
      <Link href={props.href} {...props}>
        {props.children}
      </Link>
    ) : (
      <Link href={props.href} {...props}>
        {props.children}
      </Link>
    );
  },
  code: ({ ...props }) => {
    const { children, className, node, ...rest } = props;
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        language={match[1]}
        style={oneLight}
      />
    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    );
  },
};

export default function CustomMarkdown({ mdFilePath }: CustomMarkdownProps) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(mdFilePath)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <StyledMarkdown>
      <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
    </StyledMarkdown>
  );
}
