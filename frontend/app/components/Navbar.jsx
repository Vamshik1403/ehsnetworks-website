"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { createPortal } from "react-dom";

const menu = [
  {
    label: "About Us",
    dropdown: [
      { label: "About ENPL", href: "/about" },
      { label: "Leadership Team", href: "/about/leadership" },
      { label: "Awards & Recognitions", href: "/about/awards" },
    ],
  },
  {
    label: "Solutions",
    dropdown: [
      { label: "Monitoring Solutions", href: "/solutions/monitoring" },
      { label: "Artificial Intelligence", href: "/solutions/ai" },
      { label: "Data Centre Solutions", href: "/solutions/datacentre" },
      { label: "App Modernisation Services", href: "/solutions/app-modernisation" },
      { label: "Cloud Solutions", dropdown: [
        { label: "Public Cloud", href: "/solutions/cloud/public" },
        { label: "Private Cloud", href: "/solutions/cloud/private" },
      ] },
      { label: "Cybersecurity Solutions", href: "/solutions/cybersecurity" },
      { label: "Modern Workplaces", href: "/solutions/workplaces" },
      { label: "Networking Solutions", href: "/solutions/networking" },
    ],
  },
  {
    label: "Consulting",
    dropdown: [
      { label: "Cloud", dropdown: [
        { label: "Cloud Migration", href: "/consulting/cloud/migration" },
        { label: "Cloud Strategy", href: "/consulting/cloud/strategy" },
      ] },
      { label: "Assessments Audits", href: "/consulting/audits" },
      { label: "IT Consulting", href: "/consulting/it" },
      { label: "CentOs to Rhel Migration", href: "/consulting/centos-rhel" },
    ],
  },
  {
    label: "Managed Services",
    dropdown: [
      { label: "Support Services", dropdown: [
        { label: "Remote Support", href: "/managed-services/support/remote" },
        { label: "Onsite Support", href: "/managed-services/support/onsite" },
      ] },
      { label: "Cloud Services", dropdown: [
        { label: "AWS", href: "/managed-services/cloud/aws" },
        { label: "Azure", href: "/managed-services/cloud/azure" },
      ] },
    ],
  },
  {
    label: "End Points",
    dropdown: [
      { label: "Laptops, Desktops & Mobile Devices", href: "/end-points/devices" },
      { label: "ENPL’s IoT & Physical Security Services", href: "/end-points/iot-security" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Newsletter", href: "/resources/newsletter" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Commvault", dropdown: [
        { label: "Commvault Metallic", href: "/resources/commvault/metallic" },
        { label: "Commvault Hybrid Cloud", href: "/resources/commvault/hybrid" },
        { label: "Commvault Cyber Resilience", href: "/resources/commvault/cyber" },
      ] },
      { label: "Our Alliance Ecosystem", href: "/resources/alliance" },
      { label: "Testimonials", href: "/resources/testimonials" },
      { label: "Dell Showcase Page", href: "/resources/dell" },
      { label: "Apple Showcase Page", href: "/resources/apple" },
      { label: "Apple Products Comparison", href: "/resources/apple-comparison" },
      { label: "IBM Showcase Page", href: "/resources/ibm" },
      { label: "SmartHub Showcase Page", href: "/resources/smarthub" },
      { label: "Kubernetes", href: "/resources/kubernetes" },
      { label: "CSR", href: "/resources/csr" },
      { label: "Annual Returns", href: "/resources/annual-returns" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

function Dropdown({ items, isResources, parentRect }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [submenuRect, setSubmenuRect] = useState(null);
  const containerRef = React.useRef();

  // For portals: get navbar root
  const navbarRoot = typeof window !== 'undefined' ? document.body : null;

  // Helper to get bounding rect for submenu positioning
  const handleMouseEnter = (idx, e) => {
    setOpenIndex(idx);
    if (e && e.currentTarget) {
      setSubmenuRect(e.currentTarget.getBoundingClientRect());
    }
  };

  // Only top-level Resources gets scroll
  const isTopLevelResources = isResources;
  return (
    <div
      ref={containerRef}
      className={`absolute left-0 top-full min-w-[220px] bg-white rounded-lg shadow-xl border border-gray-100 z-50 animate-fade-in transition-all duration-300 ${isTopLevelResources ? 'max-h-[300px] overflow-y-auto' : ''}`}
      style={isTopLevelResources ? { overscrollBehavior: 'contain' } : {}}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="group relative"
          onMouseEnter={e => handleMouseEnter(idx, e)}
          onMouseLeave={() => setOpenIndex(null)}
        >
          {item.dropdown ? (
            <>
              <button
                className="w-full text-left px-4 py-3 font-medium text-gray-900 flex items-center justify-between rounded-md transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 group"
                style={{ boxShadow: openIndex === idx ? '0 2px 8px rgba(0,0,0,0.08)' : undefined }}
              >
                {item.label}
                <span
                  className={`ml-2 transition-transform duration-300 ease-in-out ${openIndex === idx ? ((item.label === 'Cloud Solutions' || item.label === 'Cloud') ? 'rotate-' : 'translate-y-1') : ''}`}
                  style={{ display: 'inline-block' }}
                >
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              {/* For Commvault and similar, render submenu as portal to avoid clipping by scroll */}
              {openIndex === idx && item.label === 'Commvault' && navbarRoot && submenuRect
                ? createPortal(
                    <div
                      className="absolute min-w-[200px] bg-white rounded-lg shadow-xl border border-gray-100 animate-fade-in transition-all duration-300 z-[9999]"
                      style={{
                        position: 'fixed',
                        top: submenuRect.top,
                        left: submenuRect.right - 4,
                      }}
                    >
                      <Dropdown items={item.dropdown} isResources={false} />
                    </div>,
                    navbarRoot
                  )
                : openIndex === idx && (
                    <div
                      className="absolute left-full top-0 min-w-[200px] bg-white rounded-lg shadow-xl border border-gray-100 animate-fade-in transition-all duration-300 z-50"
                      style={{ marginLeft: '-4px' }}
                    >
                      <Dropdown items={item.dropdown} isResources={false} />
                    </div>
                  )}
            </>
          ) : (
            <Link href={item.href || "#"}>
              <span className="block px-4 py-3 font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 cursor-pointer">
                {item.label}
              </span>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubDropdown, setMobileSubDropdown] = useState(null);
  return (
    <nav className="w-full bg-gradient-to-r from-white via-blue-50 to-pink-50 shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group/logo cursor-pointer select-none">
          <img
            src="/electronics/Enpl-logo.jpeg"
            alt="ENPL Logo"
            className="h-8 sm:h-10 w-auto drop-shadow-lg rounded-lg border-2 border-blue-100 group-hover/logo:border-blue-400 group-hover/logo:shadow-xl transition-all duration-300 ease-in-out group-hover/logo:scale-110 group-hover/logo:rotate-3"
            style={{ boxShadow: '0 4px 16px 0 rgba(30,64,175,0.08)' }}
          />
          <span
            className="font-extrabold text-lg sm:text-2xl tracking-widest bg-gradient-to-r from-blue-900 via-blue-500 to-pink-500 bg-clip-text text-transparent group-hover/logo:from-pink-600 group-hover/logo:to-blue-700 group-hover/logo:scale-110 group-hover/logo:drop-shadow-lg transition-all duration-300 ease-in-out animate-gradient-x"
            style={{ letterSpacing: '0.08em' }}
          >
            ENPL
          </span>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-2 md:gap-6 items-center flex-1 justify-end ml-8">
          {menu.map((item, idx) =>
            item.dropdown ? (
              <div
                key={idx}
                className="relative group flex items-center"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-3 py-2 font-semibold text-base rounded-lg transition-all duration-300 bg-transparent border border-transparent flex items-center
                    ${activeDropdown === idx ? "text-pink-600 bg-blue-50" : "text-gray-900"}
                    hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-100 hover:text-blue-800 hover:shadow-lg hover:scale-105
                    focus:outline-none focus:ring-2 focus:ring-blue-300
                    group-hover:shadow-xl group-hover:scale-110`}
                >
                  {item.label}
                  <span
                    className={`ml-1 transition-transform duration-300 ease-in-out ${activeDropdown === idx ? (item.label === 'Cloud Solutions' ? 'rotate-270' : 'translate-y-1') : ''}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                {activeDropdown === idx && (
                  <Dropdown items={item.dropdown} isResources={item.label === 'Resources'} />
                )}
              </div>
            ) : (
              <Link key={idx} href={item.href || "#"}>
                <span className="px-3 py-2 font-semibold text-base rounded-lg transition-all duration-300 bg-transparent border border-transparent text-gray-900 cursor-pointer flex items-center
                  hover:bg-gradient-to-r hover:from-pink-100 hover:to-blue-100 hover:text-pink-700 hover:shadow-lg hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-pink-300
                  group-hover:shadow-xl group-hover:scale-110">
                  {item.label}
                </span>
              </Link>
            )
          )}
        </div>
        {/* Actions: ShoppingBagIcon and Get Quote button - always visible */}
        <div className="flex items-center gap-4 sm:gap-6 ml-4">
          {/* <span className="relative group/cart">
            <ShoppingBagIcon
              width={26}
              className="hover:cursor-pointer bg-gray-100 p-1.5 rounded-full shadow-md transition-all duration-300 group-hover/cart:shadow-blue-200 group-hover/cart:scale-110 group-hover/cart:ring-2 group-hover/cart:ring-blue-300 hover:bg-blue-100"
            />
          </span> */}
          <Link href="/contact">
            <Button
              className="bg-gradient-to-r from-blue-900 via-blue-500 to-pink-500 text-white px-3 py-1.5 rounded-md shadow-md transition-all duration-300 text-sm font-semibold
                hover:from-pink-600 hover:to-blue-700 hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-300"
              style={{ backgroundSize: '200% 200%' }}
            >
              Get Quote
            </Button>
          </Link>
          {/* Hamburger for mobile and tablet */}
          <button
            className="ml-2 p-2 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none lg:hidden"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (mobileMenuOpen) {
                setActiveDropdown(null);
                setMobileSubDropdown(null);
              }
            }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>
             {/* Mobile & Tablet Menu Drawer */}
       {mobileMenuOpen && (
         <div className="lg:hidden w-full bg-white border-t border-gray-200 shadow-lg animate-fade-in max-h-[80vh] overflow-y-auto backdrop-blur-sm bg-white/95">
                     <div className="flex flex-col gap-2 py-3 px-4">
                         {menu.map((item, idx) =>
               item.dropdown ? (
                 <div key={idx} className="relative animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                                     <button
                     className="w-full text-left px-3 py-3 font-semibold text-base rounded-lg transition-all duration-500 bg-transparent border border-transparent flex items-center justify-between
                       hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-100 hover:text-blue-800 hover:shadow-lg hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-blue-300 group"
                     onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                   >
                    {item.label}
                                         <span className={`ml-1 transition-transform duration-500 ease-in-out ${activeDropdown === idx ? 'rotate-180' : ''} group-hover:scale-110`}>
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                                     {activeDropdown === idx && (
                     <div className="mt-1 ml-4 border-l-2 border-blue-200 pl-4 animate-fade-in-up">
                      {item.dropdown.map((subItem, subIdx) => (
                        <div key={subIdx} className="mb-2">
                          {subItem.dropdown ? (
                                                         <div className="relative">
                               <button
                                 className="w-full text-left px-3 py-2 font-medium text-sm rounded-md transition-all duration-500 bg-transparent border border-transparent flex items-center justify-between
                                   hover:bg-blue-50 hover:text-blue-700 hover:shadow-md hover:scale-105
                                   focus:outline-none focus:ring-2 focus:ring-blue-300 group"
                                 onClick={() => setMobileSubDropdown(mobileSubDropdown === `${idx}-${subIdx}` ? null : `${idx}-${subIdx}`)}
                               >
                                {subItem.label}
                                                                 <span className={`ml-1 transition-transform duration-500 ease-in-out ${mobileSubDropdown === `${idx}-${subIdx}` ? 'rotate-180' : ''} group-hover:scale-110`}>
                                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </span>
                              </button>
                                                             {mobileSubDropdown === `${idx}-${subIdx}` && (
                                 <div className="mt-1 ml-4 border-l-2 border-gray-200 pl-4 animate-fade-in-up">
                                  {subItem.dropdown.map((subSubItem, subSubIdx) => (
                                                                         <Link key={subSubIdx} href={subSubItem.href || "#"}>
                                       <span className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm hover:scale-105 transition-all duration-300 cursor-pointer rounded-md">
                                         {subSubItem.label}
                                       </span>
                                     </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                                                         <Link href={subItem.href || "#"}>
                               <span className="block px-3 py-2 font-medium text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:scale-105 transition-all duration-300 cursor-pointer rounded-md">
                                 {subItem.label}
                               </span>
                             </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                             ) : (
                 <Link key={idx} href={item.href || "#"}>
                   <span className="block px-3 py-3 font-semibold text-base rounded-lg transition-all duration-500 bg-transparent border border-transparent text-gray-900 cursor-pointer
                     hover:bg-gradient-to-r hover:from-pink-100 hover:to-blue-100 hover:text-pink-700 hover:shadow-lg hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-pink-300 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                     {item.label}
                   </span>
                 </Link>
               )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
