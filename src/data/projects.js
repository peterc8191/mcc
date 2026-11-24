// Completed projects, taken from the company brochure.
// Optional fields (duration, year, stats) are omitted where the brochure doesn't state them.
// `hero` and `gallery` list image files in public/images/projects/<slug>/; the first gallery image leads the gallery.
const rawProjects = [
  {
    id: 1,
    slug: "3300-citywest-business-park",
    title: "Citywest – Factory & Office Refurbishment",
    category: "Industrial",
    location: "Citywest Industrial Park",
    gradient: "linear-gradient(135deg, #0e2235 0%, #1f5f8f 60%, #8fb6e0 140%)",
    hero: "boardroom-wide.jpg",
    gallery: [
      ["boardroom-wide.jpg", "Boardroom with long timber table and glazed partition"],
      ["first-floor-atrium.jpg", "First-floor atrium with glass balustrade overlooking the boardroom"],
      ["breakout-area.jpg", "Breakout area with timber slatted screen and soft seating"],
      ["kitchen.jpg", "Fitted staff kitchen with island and bar stools"],
      ["canteen.jpg", "Staff canteen with dining tables and pendant lighting"],
      ["open-plan-office.jpg", "Open-plan office space with new ceiling and lighting"],
      ["breakout-seating.jpg", "Breakout seating against a blue feature wall"],
      ["office-feature-wall.jpg", "Refurbished office with blue feature wall"],
      ["boardroom.jpg", "Boardroom table with linear ceiling lighting"],
      ["atrium-glass-balustrade.jpg", "Glass balustrade around the first-floor atrium"],
      ["warehouse-floor.jpg", "Repaired and resealed warehouse floor"],
    ],
    summary:
      "A complete refurbishment and refit of the existing factory and office facilities, creating a modern, functional, and professional working environment.",
    description:
      "A complete refurbishment and refit of the existing factory and office facilities at Citywest, transforming the premises into a modern, functional, and professional working environment. The works included the replacement of existing ceiling systems, installation of new electrical services to accommodate the requirements of the business, and refurbishment of the warehouse flooring through repairs and resealing. Existing ceiling tiles were also replaced where required, providing a refreshed and improved finish throughout the building. The office refurbishment focused on creating a sleek, contemporary working environment, with modern finishes throughout the office spaces and communal areas. The overall project significantly enhanced the appearance, functionality, and usability of the premises, delivering an updated facility tailored to the client's operational needs.",
    features: [
      "Replacement of existing ceiling systems and ceiling tiles where required",
      "New electrical services installed to meet the requirements of the business",
      "Warehouse flooring refurbished through repairs and resealing",
      "Office spaces and communal areas refurbished with sleek, contemporary finishes",
    ],
  },
  {
    id: 2,
    slug: "airways-business-park",
    title: "Airways Business Park",
    category: "Industrial",
    location: "Airways Business Park",
    gradient: "linear-gradient(135deg, #15324c 0%, #1f5f8f 60%, #5b93cf 140%)",
    hero: "exterior-loading-bays.jpg",
    gallery: [
      ["exterior-loading-bays.jpg", "Warehouse exterior with new cladding and loading bays"],
      ["exterior-side-elevation.jpg", "Side elevation of the refurbished warehouse"],
      ["new-pir-roof.jpg", "New PIR insulated roof with rooflights"],
      ["roof-smoke-vents.jpg", "Roof ridge with smoke vents"],
      ["warehouse-interior.jpg", "Open warehouse interior with steel frame"],
      ["dock-leveller.jpg", "Insulated dock leveller and loading door"],
      ["refurbished-office.jpg", "Refurbished office space"],
    ],
    summary: "Asbestos roof removal, a new PIR insulated roofing system, and a full refit of the office space.",
    description:
      "At Airways Business Park we removed the existing asbestos roofing in full compliance with health and safety regulations and installed a new PIR insulated roofing system to improve thermal performance and durability. Outdated office areas were fully demolished to prepare for redevelopment, the dock leveller was installed and insulated, and the office space was refitted and upgraded throughout.",
    features: [
      "Removal of existing asbestos roofing in full compliance with health and safety regulations",
      "New PIR insulated roofing system for improved thermal performance and durability",
      "Full demolition of outdated office areas to prepare for redevelopment",
      "Dock leveller installed and insulated for operational efficiency and energy control",
      "Office space refitted and upgraded, including partitions, finishes, and layout improvements",
    ],
  },
  {
    id: 3,
    slug: "3030-citywest-business-park",
    title: "Citywest Business Park",
    category: "Commercial",
    location: "Citywest Business Park",
    gradient: "linear-gradient(135deg, #1e2a36 0%, #4a4d52 60%, #5b93cf 140%)",
    hero: "glazed-partition-corridor.jpg",
    gallery: [
      ["glazed-partition-corridor.jpg", "Corridor lined with fire-rated glazed office partitions"],
      ["kitchen-breakout.jpg", "Kitchen and breakout area with banquette seating"],
      ["corridor-glazed-office.jpg", "Corridor alongside a glazed meeting room"],
      ["open-plan-desks.jpg", "Open-plan desks with upholstered planters"],
      ["open-plan-workstations.jpg", "Open-plan workstations"],
      ["glazed-meeting-room.jpg", "Glazed meeting room with manifestation film"],
      ["glazed-corner-office.jpg", "Glazed corner office"],
      ["booth-seating.jpg", "Timber booth seating"],
      ["glazed-boardroom.jpg", "Boardroom behind a glazed partition"],
      ["atrium-balustrade.jpg", "Atrium with glass balustrade"],
    ],
    summary:
      "A customised office fit-out with fire-resistant materials and partitions, ceilings, and structures upgraded to fireproofing standards.",
    description:
      "At Citywest Business Park we completed a customised office fit-out to meet the client's needs. Fire-resistant materials were installed for full fire safety compliance, and partitions, ceilings, and structures were upgraded to fireproofing standards. We coordinated the MEP works with the new layout and oversaw site work, subcontractors, and quality control throughout.",
    features: [
      "Customised office fit-out to meet client needs",
      "Fire-resistant materials installed for full fire safety compliance",
      "Partitions, ceilings, and structures upgraded to fireproofing standards",
      "MEP works coordinated with the new layout",
      "Site work, subcontractors, and quality control overseen by MCC",
    ],
  },
  {
    id: 4,
    slug: "credit-union-forresters-hall",
    title: "Credit Union, Forrester's Hall",
    category: "Commercial",
    location: "Forrester's Hall, Dundalk, Co. Louth",
    gradient: "linear-gradient(135deg, #0a1826 0%, #1e4566 60%, #2f72b3 140%)",
    hero: "open-office-arched-windows.jpg",
    gallery: [
      [
        "open-office-arched-windows.jpg",
        "Open office behind a black-framed glazed screen, with original arched windows",
      ],
      ["glazed-screen-office.jpg", "Black-framed glazed screen dividing the office space"],
      ["glazed-screen-brick-feature.jpg", "Glazed screen in front of exposed brickwork"],
      ["exposed-services-brick.jpg", "Office with exposed brick walls and exposed services"],
      ["entrance-hall.jpg", "Restored entrance hall with chequered tiled floor"],
    ],
    summary: "Restoration of a conservation building, with new sub-floors and finishes and a complete office fit-out.",
    description:
      "At Forrester's Hall in Dundalk we restored the existing conservation building, bringing its structural and aesthetic elements back to a high standard. The existing concrete flooring was fully demolished to prepare for new works, followed by new sub-floors and surface finishes and a complete office fit-out. We coordinated all trades on site to keep work flowing and compliant with building regulations.",
    features: [
      "Restoration of the existing conservation building's structural and aesthetic elements",
      "Full demolition of existing concrete flooring",
      "New sub-floors and surface finishes meeting durability and safety requirements",
      "Complete office fit-out, including partitions, ceilings, and internal layout upgrades",
      "All trades coordinated on site for compliance with building regulations",
    ],
  },
  {
    id: 5,
    slug: "yew-grove-reit-naas",
    title: "Yew Grove REIT",
    category: "Industrial",
    location: "Naas Enterprise Park, Naas, Co. Kildare",
    gradient: "linear-gradient(135deg, #15324c 0%, #2f72b3 65%, #8fb6e0 140%)",
    hero: "warehouse-exterior.png",
    gallery: [
      ["warehouse-exterior.png", "Warehouse exterior at Naas Enterprise Park"],
      ["warehouse-interior.png", "Warehouse interior with sealed floor"],
    ],
    summary:
      "Roof repairs, warehouse floor sealing, a 60-minute shaftwall, fire alarm upgrades, and office refurbishment.",
    description:
      "For Yew Grove REIT at Naas Enterprise Park we carried out repairs and replacement to the roof, flashing, and gutters, sealed the warehouse floor, and provided a 60-minute shaftwall. The works also included upgrading the fire alarm systems, refurbishing the offices, and servicing the loading bays.",
    features: [
      "Repairs and replacement to roof, flashing, and gutters",
      "Sealing of warehouse floor",
      "60-minute shaftwall",
      "Fire alarm system upgrades",
      "Office refurbishment",
      "Servicing of loading bays",
    ],
  },
  {
    id: 6,
    slug: "icon-accounting-swords",
    title: "Icon Accounting",
    category: "Commercial",
    location: "Columba House, Airside Retail Park, Swords, Co. Dublin",
    duration: "4 months",
    gradient: "linear-gradient(135deg, #1e4566 0%, #1f5f8f 60%, #5b93cf 130%)",
    hero: "columba-house-exterior.png",
    gallery: [
      ["columba-house-exterior.png", "Columba House exterior, Airside Retail Park"],
      ["reception.png", "Icon Accounting reception area"],
    ],
    summary:
      "Relocating an entire office floor within a mixed-use building, with fireproofing works and a new entrance for other users.",
    description:
      "At Columba House in Airside Retail Park, a mixed-use development, we moved Icon Accounting's entire second-floor office to the third floor. We provided the necessary fireproofing works, created a new entrance for other users of the building, and refurbished the office areas. All elements of M&E and the floor, wall, and ceiling finishes were carried out by MCC.",
    features: [
      "Entire second-floor office relocated to the third floor",
      "Fireproofing works and a new entrance for other building users",
      "Refurbishment of office areas",
      "All M&E and floor, wall, and ceiling finishes carried out by MCC",
    ],
  },
];

// Expand image file names into public paths: <base>/images/projects/<slug>/<file>
const imagePath = (slug, file) => `${import.meta.env.BASE_URL}images/projects/${slug}/${file}`;

const projects = rawProjects.map((project) => ({
  ...project,
  hero: imagePath(project.slug, project.hero),
  gallery: project.gallery.map(([file, alt]) => ({ src: imagePath(project.slug, file), alt })),
}));

export default projects;

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
