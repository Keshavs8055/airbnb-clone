"use client";
import { useEffect, useState } from "react";

interface ClientProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
