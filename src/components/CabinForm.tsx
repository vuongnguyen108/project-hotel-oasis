import { useState } from "react";
// import { createCabinApi, updateCabinApi, uploadCabinImageApi } from "../../services/cabin.api";
import toast from "react-hot-toast";
import type { Cabin, CreateCabinPayload } from "../type/cabin/Cabin.type";
import { uploadCabinImageApi } from "../services/cabin.api";
export default function CabinForm({
  cabin,
  onClose,
  onSuccess,
}: {
  cabin?: Cabin | null;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [form, setForm] = useState({
    name: cabin?.name || "",
    maxCapacity: cabin?.maxCapacity || 1,
    regularPrice: cabin?.regularPrice || 0,
    discount: cabin?.discount || 0,
    description: cabin?.description || "",
  });
  console.log(cabin, 'cabin');


  const [image, setImage] = useState<string>(cabin?.image || "");
  const [preview, setPreview] = useState<string>(cabin?.image || "");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setProgress(0);

    try {
      // preview ngay
      const localPreview = URL.createObjectURL(file);
      setPreview(localPreview);

      const res = await uploadCabinImageApi(file, setProgress);
      console.log(res, "res");
      
      // update ảnh thật từ server
      setPreview(res.url || res.image);
      setImage(res.url)
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("FORM:", form);

    const payload: CreateCabinPayload = {
      name: form.name,
      maxCapacity: Number(form.maxCapacity),
      regularPrice: Number(form.regularPrice),
      discount: Number(form.discount),
      description: form.description,
      image,
    };

    if (cabin) {
      // 🔥 UPDATE
    //   await updateCabinApi(cabin.id, payload);
      toast.success("Cabin updated ✅");
      onSuccess();
    } else {
      // 🔥 CREATE
    //   await createCabinApi(payload);
      toast.success("Cabin created 🎉");
      onSuccess();
    }



    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* IMAGE UPLOAD */}
      <div className="flex flex-col items-center gap-3 w-full">
        <div className="relative w-full">
          {preview ? (
            <img
              src={preview}
              className="w-full h-48 object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-xl">
              No Image
            </div>
          )}

          {/* 🔥 LOADING OVERLAY */}
          {uploading && (
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-xl">
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />

              <p className="text-white mt-2 text-sm">
                Uploading... {progress}%
              </p>

              {/* progress bar */}
              <div className="w-2/3 h-2 bg-white/30 rounded mt-2">
                <div
                  className="h-2 bg-white rounded"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <input
          type="file"
          onChange={handleFile}
          disabled={uploading}
          className="text-sm"
        />
      </div>

      {/* NAME */}
      <div>
        <label className="text-sm text-gray-600">Cabin Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="input"
        />
      </div>

      {/* CAPACITY + PRICE */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-600">Capacity</label>
          <input
            name="maxCapacity"
            type="number"
            value={form.maxCapacity}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Price</label>
          <input
            name="regularPrice"
            type="number"
            value={form.regularPrice}
            onChange={handleChange}
            className="input"
          />
        </div>
      </div>

      {/* DISCOUNT */}
      <div>
        <label className="text-sm text-gray-600">Discount (%)</label>
        <input
          name="discount"
          type="number"
          value={form.discount}
          onChange={handleChange}
          className="input"
        />
      </div>

      {/* DESCRIPTION */}
      <div>
        <label className="text-sm text-gray-600">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="input"
        />
      </div>

      {/* ACTION */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onClose}
          className="w-full py-2 border rounded-lg"
        >
          Cancel
        </button>

        <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          {cabin ? "Update Cabin" : "Create Cabin"}
        </button>
      </div>
    </form>
  );
}