import { footerLinks, socialMedia } from "../constants"
import { footerLogo } from "../assets/images"
import { copyrightSign } from "../assets/icons"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a>
            <img
              src={footerLogo}
              alt="footer-logo"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="mt-8 flex items-center gap-5 ">
            {socialMedia.map(({ src, alt, link }) => (
              <div className="w-12 h-12 flex justify-center items-center bg-white rounded-full cursor-pointer">
                <img
                  src={src}
                  alt={alt}
                  width={24}
                  height={24}
                  onClick={() => window.open(link, "_blank")}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map(section => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map(link => (
                  <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                    <a href={link.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </footer>
  )
}

export default Footer