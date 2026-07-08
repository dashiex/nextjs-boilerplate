type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ 
  children ,
  variant = "primary",
}: ButtonProps) {
  return (
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
}