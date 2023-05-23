export default function Title({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <h1
      className={`mb-12 mt-24 text-center text-4xl font-bold leading-tight tracking-tighter md:text-left md:text-6xl md:leading-none lg:text-8xl ${
        className ? className : ""
      }`}
    >
      {children}
    </h1>
  );
}
