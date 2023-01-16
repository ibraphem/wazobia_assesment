
const Modal = ({ children, isOpen, closeModal }) => {
    if (!isOpen) return null
    const closeModalFromBg = (e) => {
        if (e.target.id === 'bg') closeModal()
    }
  return (
    <div
      className="fixed w-full h-screen inset-0 bg-overlay bg-opacity-[0.28] flex justify-center items-center"
      id='bg'
      onClick={closeModalFromBg}
    >
      <div className="bg-white rounded-lg shadow  relative">
       

        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal