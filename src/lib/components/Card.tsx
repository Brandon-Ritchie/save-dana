type Props = {
  children: React.ReactNode;
  backgroundClass?: string;
  compact?: boolean;
};

export default ({ children, backgroundClass, compact }: Props) => (
  <div
    className={`card ${backgroundClass ?? "bg-base-100"} ${
      compact ? "card-compact" : ""
    } w-fit shadow-xl`}
  >
    <div className="card-body w-fit">{children}</div>
  </div>
);
