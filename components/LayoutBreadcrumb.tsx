"use client";

import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { FaUser } from "react-icons/fa";
import { bcLayoutHeaders } from "@/constants/index";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const LayoutBreadcrumb = ({ childToParent }: any) => {
  const [currentPage, setCurrentPage] = React.useState<React.Key>("cases");

  // const data = currentPage
  // Refactor this to use constants

  return (
    <section className="flex items-end justify-between">
      <Breadcrumbs
        underline="active"
        onAction={(key) => [setCurrentPage(key), childToParent(key)]}
      >
        {bcLayoutHeaders.map((item) => (
          <BreadcrumbItem
            className={item.class_name}
            separator={item.separator}
            size="lg"
            key={item.key}
            isCurrent={currentPage === item.key}
          >
            {item.title}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
      <div className="flex justify-center gap-5">
        <div className="flex">
          <Button
            isIconOnly
            aria-label="User settings"
            as={Link}
            href="/settings"
            className="bg-stone-800 text-white"
          >
            <FaUser />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LayoutBreadcrumb;
