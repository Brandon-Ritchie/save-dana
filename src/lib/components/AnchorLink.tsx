export default ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a className="underline" href={href}>
    {children}
  </a>
);
