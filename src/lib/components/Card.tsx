type Props = {
  children: React.ReactNode;
  backgroundClass?: string;
};

export default ({ children, backgroundClass }: Props) => (
  <div className={`card ${backgroundClass ?? "bg-base-100"} w-fit shadow-xl`}>
    <div className="card-body w-fit">{children}</div>
  </div>
);
