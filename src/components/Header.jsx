import { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import Cart from "./UI/Cart";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModalOpen]);

  return (
    <header>
      <nav>
        <h1 className="logo">ARC Shop</h1>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Show Cart
        </button>
      </nav>

      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <Cart />
        </Modal>
      )}
    </header>
  );
}

export default Header;
