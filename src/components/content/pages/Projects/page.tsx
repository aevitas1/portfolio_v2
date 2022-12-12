interface PageInterface {
  children: React.ReactNode;
}

const Page = ({ children }: PageInterface) => {
  return <>{children}</>;
};

export default Page;
