import { createContext, ReactNode, useState } from "react";

interface ModalProviderProps {
  children: ReactNode;
}

type ModalContextData = {
  openModal(): void;
  closeModal(): void;
  modalIsOpen: boolean;
};

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modalIsOpen }} >
      {children}
    </ModalContext.Provider>
  )
}