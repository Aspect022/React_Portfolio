"use client";

import { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

interface ScrollLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  ({ children, href, className, onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      
      // Execute optional onClick callback
      if (onClick) {
        onClick();
      }
      
      // Extract the id from the href
      const targetId = href.toString().replace(/.*\#/, "");
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Scroll to the element
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        });
        
        // Update URL hash without scrolling (history API)
        window.history.pushState(null, "", href);
      }
    };

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

ScrollLink.displayName = "ScrollLink";