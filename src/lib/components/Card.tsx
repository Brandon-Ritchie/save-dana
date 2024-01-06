type Props = {
  children: React.ReactNode;
};

export default ({ children }: Props) => (
  <div className="card bg-base-100 shadow-xl">
    <div className="card-body">{children}</div>
  </div>
);
