export default ({
  href,
  children,
  target,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) => (
  <a className="underline" href={href} target={target ?? ""}>
    {children}
  </a>
);
