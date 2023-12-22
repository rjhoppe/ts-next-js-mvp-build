'use client'
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Divider } from "@nextui-org/divider";

const Breadcrumb = () => {
  const [currentPage, setCurrentPage] = React.useState<React.Key>("cases");

  // Refactor this to use constants

  return (
    <section className="flex border-2 border-blue-500 mt-10">
      <Breadcrumbs underline="active" onAction={(key) => setCurrentPage(key)}>
        <BreadcrumbItem size="lg" key="cases" isCurrent={currentPage === "cases"}>
          Cases
        </BreadcrumbItem>
        <BreadcrumbItem key="rules" isCurrent={currentPage === "rules"}>
          Rules
        </BreadcrumbItem>
        <BreadcrumbItem key="templates" isCurrent={currentPage === "templates"}>
          Templates
        </BreadcrumbItem>
      </Breadcrumbs>
    </section>
  );
}

export default Breadcrumb