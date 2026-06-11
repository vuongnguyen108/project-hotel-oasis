import { useRef } from "react";

export default function Modal({
    isOpen,
    onClose,
    children,
}: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) {
    const modalRef = useRef<HTMLDivElement>(null);

    if (!isOpen) return null;

    const handleOutsideClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };


    return (
        <div
            onClick={handleOutsideClick}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        >
            <div
                ref={modalRef}
                className="bg-white rounded-2xl p-6 w-full max-w-lg relative shadow-xl"
            >
                {/* close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    ✕
                </button>

                {children}
            </div>
        </div>
    );
}