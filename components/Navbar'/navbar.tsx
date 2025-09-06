"use client";
import React, { useEffect, useState, useCallback } from "react";
import { navRoutes, Route } from "./routes";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const routes: Route[] = navRoutes;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = useCallback(
    (path: string, sectionId: string) => {
      if (path.startsWith("#")) {
        if (pathname !== "/") {
          router.push(`/${path}`);
        } else {
          scrollToSection(sectionId);
        }
        setActiveSection(sectionId);
        return;
      }
      router.push(path);
    },
    [router, pathname]
  );

  useEffect(() => {
    if (pathname !== "/") return;
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSectionId = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionBottom =
          sectionTop + (section as HTMLElement).offsetHeight;

        if (
          window.scrollY >= sectionTop - 120 &&
          window.scrollY < sectionBottom - 120
        ) {
          currentSectionId = (section as HTMLElement).id;
        }
      });

      if (activeSection !== currentSectionId) {
        setActiveSection(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll as any);
  }, [activeSection, pathname]);

  return (
    <nav className="sticky top-0 left-0 right-0 bg-[#181824] flex justify-between md:justify-start items-center tracking-wider h-20 px-4 md:px-40 py-5 md:space-x-52 z-30">
      <Link href="/" className="hidden md:block">
        <h1 className="text-base md:text-[28px] font-semibold text-primary">
          VISHAL
        </h1>
      </Link>
      <div className="flex gap-6">
        {routes.map((item) => {
          const isHash = item.path.startsWith("#");
          const href = isHash ? `/${item.path}` : item.path;
          const isActive =
            pathname === "/"
              ? activeSection === item.sectionId
              : pathname === item.path;
          return (
            <Link
              href={href}
              key={item.sectionId}
              onClick={(e) => {
                if (isHash) {
                  if (pathname === "/") {
                    e.preventDefault();
                    handleNavClick(item.path, item.sectionId);
                  }
                }
              }}
              className={twMerge(
                "text-sm md:text-lg font-semibold tracking-wide cursor-pointer transition-colors duration-200",
                isActive ? "text-primary" : "text-white hover:text-primary"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
