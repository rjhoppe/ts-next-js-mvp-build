'use client'
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

const Breadcrumb = ({ childToParent }: any) => {
  const [currentPage, setCurrentPage] = React.useState<React.Key>("cases");

  const data = currentPage
  // Refactor this to use constants

  return (
    <section className="flex border-2 border-blue-500 mt-10">
      <Breadcrumbs underline="active" onAction={(key) => [setCurrentPage(key), childToParent(key)]}>
        <BreadcrumbItem 
          separator='' 
          size="lg" 
          key="cases" 
          isCurrent={currentPage === "cases"}
        >
          Cases
        </BreadcrumbItem>
        <BreadcrumbItem 
          className="ml-10" 
          separator='' 
          size="lg" 
          key="rules" 
          isCurrent={currentPage === "rules"}
        >
          Rules
        </BreadcrumbItem>
        <BreadcrumbItem 
          className="ml-10" 
          separator='' 
          size="lg" 
          key="templates" 
          isCurrent={currentPage === "templates"}
        >
          Templates
        </BreadcrumbItem>
      </Breadcrumbs>
    </section>
  );
}

export default Breadcrumb