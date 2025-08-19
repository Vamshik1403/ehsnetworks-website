"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

const menu = [
  {
    label: "About Us" , href: "/about" ,
  },
  {
    label: "Products",
    dropdown: [
      { label: "Laptops, Desktops & Mobile Devices", href: "/end-points/devices" },
      { label: "ENPL’s IoT & Physical Security Services", href: "/end-points/iot-security" },
    ],
  },
  {
    label: "Solutions",
    dropdown: [
      { label: "Monitoring Solutions", href: "/solutions/monitoring" },
      { label: "Artificial Intelligence", href: "/solutions/ai" },
      { label: "Data Center Solutions", href: "/solutions/datacenter" },
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
        { label: "Network Infrastructure Management Services", href: "/managed-services/cloud/network" },
        { label: "Remote Managed Services", href: "/managed-services/cloud/remote" },
      ] },
    ],
  },
  

  // { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

function Dropdown({ items, isResources, parentRect }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [submenuRect, setSubmenuRect] = useState(null);
  const containerRef = React.useRef();
  const pathname = usePathname();

  // For portals: get navbar root
  const navbarRoot = typeof window !== 'undefined' ? document.body : null;

  // Function to check if a menu item is active
  const isActive = (href) => {
    if (!href) return false;
    return pathname === href;
  };

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
              <span className={`block px-4 py-3 font-medium transition-colors duration-200 cursor-pointer rounded-md
                ${isActive(item.href) ? "text-blue-700 bg-blue-50 border-l-4 border-blue-500" : "text-gray-900 hover:bg-blue-50 hover:text-blue-700"}`}>
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
  const pathname = usePathname();

  // Function to check if a menu item is active
  const isActive = (href) => {
    if (!href) return false;
    return pathname === href;
  };

  // Function to check if any dropdown item is active
  const isDropdownActive = (dropdownItems) => {
    if (!dropdownItems) return false;
    return dropdownItems.some(item => {
      if (item.dropdown) {
        return isDropdownActive(item.dropdown);
      }
      return isActive(item.href);
    });
  };
  return (
    <nav className="w-full bg-gradient-to-r from-white via-blue-50 to-pink-50 shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group/logo cursor-pointer select-none">
          <img
            src="/icons/Enpl-logo.jpeg"
            alt="ENPL Logo"
            className="h-10 sm:h-12 w-10 sm:w-12 drop-shadow-lg rounded-full border-2 border-blue-100 group-hover/logo:border-blue-400 group-hover/logo:shadow-xl transition-all duration-300 ease-in-out group-hover/logo:scale-110 group-hover/logo:rotate-3"
            style={{ boxShadow: '0 4px 16px 0 rgba(30,64,175,0.08)' }}
          />
          <div>
            <span
              className="font-extrabold text-lg sm:text-lg tracking-widest bg-gradient-to-r from-blue-900 via-blue-500 to-pink-500 bg-clip-text text-transparent group-hover/logo:from-pink-600 group-hover/logo:to-blue-700 group-hover/logo:scale-110 group-hover/logo:drop-shadow-lg transition-all duration-300 ease-in-out animate-gradient-x block"
              style={{ letterSpacing: '0.08em' }}
            >
              Electrohelps Networks
            </span>
            <p className="text-xs sm:text-sm text-gray-600 group-hover/logo:text-gray-700 transition-colors duration-300">
              Solution | Cloud | Consulting | Assist
            </p>
          </div>
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
                    ${activeDropdown === idx ? "text-pink-600 bg-blue-50" : isDropdownActive(item.dropdown) ? "text-blue-600 bg-blue-50 border-blue-200" : "text-gray-900"}
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
                <span className={`px-3 py-2 font-semibold text-base rounded-lg transition-all duration-300 bg-transparent border border-transparent cursor-pointer flex items-center
                  ${isActive(item.href) ? "text-blue-600 bg-blue-50 border-blue-200 shadow-md" : "text-gray-900"}
                  hover:bg-gradient-to-r hover:from-pink-100 hover:to-blue-100 hover:text-pink-700 hover:shadow-lg hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-pink-300
                  group-hover:shadow-xl group-hover:scale-110`}>
                  {item.label}
                </span>
              </Link>
            )
          )}
        </div>
        {/* Actions: Contact Dropdown - always visible */}
        <div className="flex items-center gap-4 sm:gap-6 ml-4">
          {/* Contact Dropdown */}
          <div className="relative group/contact">
            <button
              className="bg-gradient-to-r from-blue-900 via-blue-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-500 text-sm font-semibold
                hover:from-pink-600 hover:to-blue-700 hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-300
                group-hover/contact:shadow-blue-200 group-hover/contact:ring-4 group-hover/contact:ring-blue-300/30
                transform hover:-translate-y-1"
              style={{ backgroundSize: '200% 200%' }}
            >
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Get in Touch</span>
                <svg className="w-3 h-3 transition-transform duration-300 group-hover/contact:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover/contact:opacity-100 group-hover/contact:visible transition-all duration-500 transform scale-95 group-hover/contact:scale-100 translate-y-2 group-hover/contact:translate-y-0 z-50">
              {/* Arrow */}
              <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
              
              <div className="p-6 space-y-6">
                {/* Sales Section */}
                <div className="group/sales">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg group-hover/sales:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover/sales:text-green-600 transition-colors duration-300">Sales</h3>
                  </div>
                  <div className="ml-11 space-y-2">
                    <a href="mailto:sales@electrohelps.com" className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-300 group-hover/sales:translate-x-1 cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">sales@electrohelps.com</span>
                    </a>
                    <a href="tel:+917718811771" className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-300 group-hover/sales:translate-x-1 cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm font-semibold">+91 771-8811-771</span>
                    </a>
                  </div>
                </div>

                {/* Support Section */}
                <div className="group/support">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover/support:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover/support:text-blue-600 transition-colors duration-300">Support</h3>
                  </div>
                  <div className="ml-11 space-y-2">
                    <a href="mailto:support@electrohelps.com" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group-hover/support:translate-x-1 cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">support@electrohelps.com</span>
                    </a>
                    <a href="tel:+917718811771" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group-hover/support:translate-x-1 cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm font-semibold">+91 771-8811-7474</span>
                    </a>
                  </div>
                </div>
                </div>
            </div>
          </div>
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
                     className={`w-full text-left px-3 py-3 font-semibold text-base rounded-lg transition-all duration-500 bg-transparent border border-transparent flex items-center justify-between
                       hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-100 hover:text-blue-800 hover:shadow-lg hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-blue-300 group
                       ${isDropdownActive(item.dropdown) ? "text-blue-600 bg-blue-50 border-blue-200" : ""}`}
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
                                       <span className={`block px-3 py-2 text-sm transition-all duration-300 cursor-pointer rounded-md
                                         ${isActive(subSubItem.href) ? "text-blue-700 bg-blue-50 border-l-4 border-blue-500" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm hover:scale-105"}`}>
                                         {subSubItem.label}
                                       </span>
                                     </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                                                         <Link href={subItem.href || "#"}>
                               <span className={`block px-3 py-2 font-medium text-sm transition-all duration-300 cursor-pointer rounded-md
                                 ${isActive(subItem.href) ? "text-blue-700 bg-blue-50 border-l-4 border-blue-500" : "text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:scale-105"}`}>
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
                   <span className={`block px-3 py-3 font-semibold text-base rounded-lg transition-all duration-500 bg-transparent border border-transparent cursor-pointer
                     hover:bg-gradient-to-r hover:from-pink-100 hover:to-blue-100 hover:text-pink-700 hover:shadow-lg hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-pink-300 animate-fade-in-up
                     ${isActive(item.href) ? "text-blue-600 bg-blue-50 border-blue-200 shadow-md" : "text-gray-900"}`} style={{ animationDelay: `${idx * 0.1}s` }}>
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
