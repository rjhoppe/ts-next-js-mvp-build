"use client";

import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { bcFormHeaders } from "@/constants/index";

const TempEditBreadcrumb = ({ childToParent }: any) => {
  const [currentPage, setCurrentPage] = React.useState<React.Key>("editor");

  const data = currentPage;
  // Refactor this to use constants

  return (
    <section className="flex mt-5">
      <Breadcrumbs
        underline="active"
        onAction={(key) => [setCurrentPage(key), childToParent(key)]}
      >
        {bcFormHeaders.map((item) => (
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
    </section>
  );
};

export default TempEditBreadcrumb;
