claude-opus-4.6

You are an expert front-end web developer specializing in digital accessibility (WCAG 2.2 AA/AAA) and the Astro framework. We are building a lightweight, universally accessible marketing and logistics website for the 2nd Annual Crystal Lake Disability Pride Event using the "incluud/accessible-astro-starter" theme. 

The site must be fast, fully keyboard-navigable, and optimized for screen readers. External form logic must remain static.

Please analyze the repository layout and help me generate/modify the core pages. Use native semantic HTML elements (<main>, <nav>, <section>) and accessible components from the starter theme (like SkipLinks and theme toggles).

---

### Core Event Metadata (From official flyer image_0ce7e1.jpg):
- Event Name: 2nd Annual Crystal Lake Disability Pride Event
- Theme/Tagline: "Celebrating the beauty, diversity, and lived experiences of people with disabilities"
- Date: July 25, 2026
- Time: 10:00 AM - 1:00 PM
- Location: McHenry County College (8900 US-14, Crystal Lake, IL 60012)
- Specific Indoor Venues: Luecht Auditorium, Cafeteria, and Commons (all located inside Building B)

---

### Task 1: Update Homepage (`src/pages/index.astro`)
Create a clean, linear, high-contrast homepage layout that includes:
1. Hero Section: Display the event name, date, time, and tagline from image_0ce7e1.jpg. Provide a highly visible primary CTA button linking to the "Accessibility & Getting To the Event" page.
2. Feature image_0ce7e1.jpg cleanly using Astro's optimized <Image /> component. Provide meticulous alt text: "Official flyer for the Crystal Lake Disability Pride Event on July 25, 2026 at McHenry County College, featuring the Disability Pride Flag and the text: Celebrating the beauty, diversity, and lived experiences of people with disabilities."
3. Newsletter Sign-Up Section: Embed a semantic HTML form pointing to a static Beehiiv subscription endpoint. Ensure <label for="email"> is programmatically linked to the input box. Do not use custom JavaScript for submission.

---

### Task 2: Create Vendor Registration Page (`src/pages/vendor.md` or `.astro`)
Create a page outlining clear vendor guidelines and onboarding:
1. Explicitly list vendor rules: setup times, table dimensions, power availability constraints, and expectation of accessible booth setups (e.g., clear pathways around tables, text alternatives for visual materials).
2. Use a distinct, highly accessible mailto: link using Gmail plus addressing to manage the workflow seamlessly:
   href="mailto:sara.zadvocacy+vendors@gmail.com?subject=Disability%20Pride%20Vendor%20Inquiry%20-%202026"
3. Label the link clearly for screen readers: "Email Our Team About Becoming a Vendor".

---

### Task 3: Create Sponsorship Page (`src/pages/sponsorship.md` or `.astro`)
Create a straightforward sponsorship informational page:
1. Outline how local Crystal Lake and McHenry County businesses can back this community asset.
2. Use an explicit, plus-addressed mailto: link for incoming corporate or community inquiries:
   href="mailto:sara.zadvocacy+sponsors@gmail.com?subject=Disability%20Pride%20Sponsorship%20Inquiry%20-%202026"
3. Provide a clear, descriptive link string: "Contact Us Regarding Corporate and Community Sponsorships".

---

### Task 4: Create Accessibility & Getting To the Event Page (`src/pages/accessibility.md` or `.astro`)
This is our most critical logistics page for building community trust. Generate an intuitive, descriptive text-and-word guide detailing how to reach and navigate the venues:
1. Campus & Building Navigation: Provide a structured word-map explaining how to enter the McHenry County College campus from Route 14, where to park, and how to enter Building B to find the Luecht Auditorium, Cafeteria, and Commons.
2. Parking Instructions: Outline the designated ADA-accessible parking stalls nearest to the Building B entrances.
3. Word Guide/Alternative Map Matrix: Because visual maps can fail blind or low-vision attendees, write out step-by-step text directions describing the path from the parking lot, through the Building B doors, directly to the main event rooms.
4. Sensory & Accommodations Info: Include sections detailing sensory accommodations (e.g., quiet decompression zones), ASL interpreter locations, and welcoming policies for service animals.

---

### Task 5: Create About Us Page (`src/pages/about.md` or `.astro`)
Create an informational background page to build community legacy and introduce organizers:
1. Z Advocacy Section: Introduce the hosting 501(c)(3) non-profit organization, Z Advocacy, detailing its mission, values, and work in the disability community.
2. Leadership/Committee Grid: Create a clean semantic layout or grid showcasing the board and committee members running the Crystal Lake event.
3. General Contact Link: Provide an explicit general inquiry link using plus addressing:
   href="mailto:sara.zadvocacy+info@gmail.com?subject=Crystal%20Lake%20Disability%20Pride%20General%20Inquiry"
   Label the link: "Contact Z Advocacy Regarding the Crystal Lake Disability Pride Event".

---

Please provide the code snippets or markdown files required for these templates, keeping CSS minimal (utilizing existing Tailwind utility classes from the starter kit) and ensuring strict semantic HTML document flow.