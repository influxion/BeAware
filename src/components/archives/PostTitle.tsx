export default function PostTitle({ children }) {
  return (
    <h1 className="mb-12 mt-24 text-center text-4xl font-bold leading-tight tracking-tighter md:text-left lg:text-7xl md:leading-none lg:text-8xl">
      {children}
    </h1>
  );
}
