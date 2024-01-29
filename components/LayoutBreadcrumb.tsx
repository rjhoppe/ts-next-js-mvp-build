'use client'

import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { FaUser } from "react-icons/fa";
import { bcLayoutHeaders } from "@/constants/index";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const LayoutBreadcrumb = ({ childToParent }: any) => {
  const [currentPage, setCurrentPage] = React.useState<React.Key>("cases");

  const data = currentPage
  // Refactor this to use constants

  return (
    <section className="flex justify-between mt-10">
      <Breadcrumbs underline="active" onAction={(key) => [setCurrentPage(key), childToParent(key)]}>
        {bcLayoutHeaders.map((item) => (
        <BreadcrumbItem
          className={item.class_name}
          separator={item.separator}
          size='lg'
          key={item.key}
          isCurrent={currentPage === item.key}
        >
          {item.title}
        </BreadcrumbItem>
        ))}
      </Breadcrumbs>
      <div className="flex justify-center mt-1 mr-1 gap-5">
        <div className="flex mt-1 mr-1 gap-3">
          <Link
            href="/"
            ><FaUser />
          </Link>
          <p className="flex text-gray-50 -translate-y-0.5 cursor-pointer
          transition-all bg-transparent"
          >Rick Hoppe</p>
        </div>
        <div className="flex justify-center -mt-3">
          <Button color="secondary">
            <Link
              href="/"
            >Sign Out
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default LayoutBreadcrumb