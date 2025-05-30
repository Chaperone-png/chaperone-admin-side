import React from 'react';

interface DeleteModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  submitHandler: (id: number) => void;
  id: undefined | number;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ open, setOpen, submitHandler, id }) => {
  if (!open || !id) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Are you sure you want to delete this ID <span className="text-red-600 font-bold">"{id}"</span>?
        </h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => submitHandler(Number(id))}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
