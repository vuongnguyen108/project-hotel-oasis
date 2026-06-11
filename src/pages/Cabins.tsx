import { useEffect, useState } from "react";
import { getCabinApi } from "../services/cabin.api";
import type { Cabin } from "../type/cabin/Cabin.type";
import Modal from "../components/Modal";
import CabinForm from "../components/CabinForm";

export const Cabins = () => {
    const [cabins, setCabins] = useState<Cabin[]>([]);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false)
    const [editingCabin, setEditingCabin] = useState<Cabin>(null)
    const fetchDataCabin = async () => {
        try {
            const res = await getCabinApi();
            console.log(res, "ressss");
            setCabins(res);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDataCabin();
    }, []);

    console.log(cabins, "cabins");

    return (
        <>
            <div className="p-6 space-y-6">
                {/* HEADER */}
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Cabins</h1>

                    <button
                        onClick={() => {
                            setEditingCabin(null);
                            setOpenModal(true);
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        + New Cabin
                    </button>
                </div>

                {/* SEARCH */}
                <input
                    placeholder="Search cabin..."
                    className="w-full md:w-80 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    // value={search}
                    // onChange={(e) => setSearch(e.target.value)}
                />

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-6">
                    {cabins.map((cabin) => (
                        <div
                            key={cabin.id}
                            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
                        >
                            <img
                                src={cabin.image}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4 space-y-2">
                                <h2 className="text-lg font-semibold">
                                    Cabin {cabin.name}
                                </h2>

                                <p className="text-gray-500 text-sm">
                                    {cabin.maxCapacity} guests
                                </p>

                                <p className="text-gray-400 text-xs line-clamp-2">
                                    {cabin.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-xl font-bold text-blue-600">
                                            ${cabin.regularPrice}
                                        </span>

                                        {cabin.discount > 0 && (
                                            <span className="ml-2 text-sm text-red-500">
                                                -{cabin.discount}%
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <button
                                            // onClick={() => handleDelete(cabin.id)}
                                            className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => {
                                                setEditingCabin(cabin);
                                                setOpenModal(true);
                                            }}
                                            className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* EMPTY */}
                {cabins.length === 0 && (
                    <p className="text-gray-500 text-center mt-10">
                        No cabins found
                    </p>
                )}
            </div>

            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
                <h2 className="text-xl font-bold mb-4">
                    {editingCabin ? "Edit Cabin" : "New Cabin"}
                </h2>

                <CabinForm
                    cabin={editingCabin}
                    onClose={() => setOpenModal(false)}
                    onSuccess={fetchDataCabin}
                />
            </Modal>
        </>
    );
};
