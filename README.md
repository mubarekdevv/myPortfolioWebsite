# Mubarek Dev - Personal Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS, inspired by the Easyfolio template and customized for showcasing frontend development, UI/UX design, and game development projects.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Works perfectly on all devices and screen sizes
- **Project Showcase**: Organized portfolio with filtering by categories
- **Easy to Update**: Simple data structure for adding new projects
- **Contact Form**: Functional contact form for inquiries
- **SEO Optimized**: Built with Next.js for great performance
- **Lottie Animations**: Interactive animations with fallback support
- **Dark Theme**: Modern dark color scheme with cyan accents

## 📁 Project Categories

- **Websites**: Full websites and landing pages
- **Web Apps**: Interactive web applications
- **UI/UX Designs**: Design work, prototypes, and Figma projects
- **Games**: Browser games and Unity projects
- **Mobile Apps**: Mobile application designs and development

## 🎨 Lottie Animation Setup

To use your Lottie animation:

1. Create the directory: `public/assets/animations/`
2. Add your animation file as: `public/assets/animations/my-animation.json`
3. The component will automatically load your animation
4. If the animation fails to load, it will show a fallback profile image

### Animation Requirements:
- **Format**: JSON (exported from LottieFiles or After Effects)
- **Size**: Recommended max 500KB for optimal performance
- **Dimensions**: Square aspect ratio works best (500x500px)

## 🛠️ How to Add New Projects

Adding new projects is super easy! Just follow these steps:

1. Open `data/projects.ts`
2. Add a new project object to the `projects` array:

\`\`\`typescript
{
  id: 11, // Increment the ID
  title: "Your New Project",
  description: "Brief description of what the project does and its key features",
  image: "/path/to/your/project-image.jpg",
  category: "websites", // Choose: websites, apps, designs, games, mobile
  technologies: ["React", "Next.js", "Tailwind CSS"], // Technologies used
  liveUrl: "https://your-live-site.com", // Optional
  githubUrl: "https://github.com/your-repo", // Optional
  featured: true // Optional: shows in featured section
}
\`\`\`

3. Add your project image to the `public` folder
4. That's it! Your new project will automatically appear in the portfolio

## 🎨 Customization

### Personal Information
- Update `components/hero.tsx` with your name, title, and bio
- Update `components/about.tsx` with your skills and experience
- Update `components/contact.tsx` with your contact information
- Update `components/footer.tsx` with your social media links

### Colors & Styling
- Primary accent color: Cyan (`#00f5ff`)
- Background: Dark slate theme
- Modify colors in `app/globals.css`
- Update component styles as needed

### Images & Assets
- Replace placeholder images with your actual photos and project screenshots
- Add your Lottie animation file to `public/assets/animations/my-animation.json`
- Ensure all images are optimized for web performance

## 🚀 Getting Started

1. Clone or download this project
2. Install dependencies: `npm install`
3. Add your Lottie animation file (optional)
4. Update personal information and projects in the data files
5. Add your images to the `public` folder
6. Run development server: `npm run dev`
7. Build for production: `npm run build`

## 📱 Responsive Design

The portfolio is fully responsive and looks great on:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## 🔧 Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: Modern UI components
- **Lucide React**: Beautiful icons
- **Lottie Web**: Animation library for interactive animations

## 📈 Performance Features

- **Fast Loading**: Optimized images and code splitting
- **SEO Friendly**: Meta tags and structured data
- **Accessible**: WCAG compliant design
- **Mobile First**: Optimized for mobile devices
- **Error Handling**: Graceful fallbacks for animations and scripts

## 🚀 Deployment

This portfolio is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- Any hosting platform that supports Next.js

## 🐛 Troubleshooting

### Lottie Animation Issues:
- Ensure your animation file is at `public/assets/animations/my-animation.json`
- Check that the file is valid JSON format
- The component will show a fallback image if animation fails to load
- Check browser console for any error messages

### Script Errors:
- The portfolio includes error handling for external scripts
- All external resources have fallback mechanisms
- Check network connectivity if external resources fail to load

## 📞 Support

If you need help customizing your portfolio or have any questions, feel free to reach out!

---

Built with ❤️ by Mubarek Dev
