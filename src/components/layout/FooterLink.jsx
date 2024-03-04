import Link from "next/link";

// Assuming FooterLink is only used within Footer, otherwise export this.
const FooterLink = ({ href, children, ariaLabel }) => (
  <Link
    href={`${href}`}
    className="text-dark fw-semibold p-2 text-decoration-none"
    aria-label={ariaLabel}
    target="_blank"
    
  >
    {children}
  </Link>
);

export default FooterLink;
