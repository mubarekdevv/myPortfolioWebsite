import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-700">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">Mubarek Dev</h3>
            <p className="text-gray-300 mb-4">
              Frontend Developer & UI/UX Designer passionate about creating
              beautiful, functional digital experiences.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/mubarekdevv"
                target="_blank"
                className="hover:text-accent transition-all transform hover:scale-110 duration-300 hover:drop-shadow-[0_0_14px_rgba(0,245,255,0.9)]"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mubarek-hussein-9a192a386/"
                target="_blank"
                className="hover:text-accent transition-all transform hover:scale-110 duration-300 hover:drop-shadow-[0_0_14px_rgba(0,245,255,0.9)]"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com/mubarekdev"
                target="_blank"
                className="hover:text-accent transition-all transform hover:scale-110 duration-300 hover:drop-shadow-[0_0_14px_rgba(0,245,255,0.9)]"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:mubarekj71@gmail.com"
                className="hover:text-accent transition-all transform hover:scale-110 duration-300 hover:drop-shadow-[0_0_14px_rgba(0,245,255,0.9)]"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#hero"
                  className="hover:text-accent transition-colors relative group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors relative group"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#works"
                  className="hover:text-accent transition-colors relative group"
                >
                  Works
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-accent transition-colors cursor-default">
                Web Development
              </li>
              <li className="hover:text-accent transition-colors cursor-default">
                UI/UX Design
              </li>
              <li className="hover:text-accent transition-colors cursor-default">
                Frontend Development
              </li>
              <li className="hover:text-accent transition-colors cursor-default">
                Game Development
              </li>
              <li className="hover:text-accent transition-colors cursor-default">
                Mobile App Design
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Mubarek Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
