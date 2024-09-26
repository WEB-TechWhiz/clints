'use client';

import React, { useState } from 'react';

// Type for Payment Method
interface PaymentMethod {
  id: number;
  type: 'qr' | 'upi';
  qrCodeUrl?: string;
  upiID?: string;
}

// Admin Payment Management Component
const Payment: React.FC = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedMethod, setSelectedMethod] = useState<'qr' | 'upi' | null>(null);
  const [qrCodeFile, setQrCodeFile] = useState<File | null>(null);
  const [upiID, setUpiID] = useState<string>('');

  const addPaymentMethod = () => {
    setShowModal(true);
  };

  const handleSavePaymentMethod = () => {
    const newMethod: PaymentMethod = {
      id: paymentMethods.length + 1,
      type: selectedMethod!,
    };

    if (selectedMethod === 'qr' && qrCodeFile) {
      newMethod.qrCodeUrl = URL.createObjectURL(qrCodeFile);
    } else if (selectedMethod === 'upi') {
      newMethod.upiID = upiID;
    }

    setPaymentMethods([...paymentMethods, newMethod]);
    resetForm();
  };

  const resetForm = () => {
    setSelectedMethod(null);
    setQrCodeFile(null);
    setUpiID('');
    setShowModal(false);
  };

  const handleRemoveMethod = (id: number) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Manage Payment Methods</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 transition duration-300 mb-4"
          onClick={addPaymentMethod}
        >
          Add Payment Method
        </button>

        <div className="grid grid-cols-1 gap-4 mb-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="payment-method-item p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="font-semibold text-gray-700">Payment Method: {method.type === 'qr' ? 'QR Code' : 'UPI'}</p>
              {method.qrCodeUrl && (
                <img src={method.qrCodeUrl} alt="QR Code" className="mt-2 max-w-xs rounded-md shadow-md" />
              )}
              {method.upiID && <p className="text-gray-600">UPI ID: {method.upiID}</p>}
              <button
                className="mt-4 bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition duration-300"
                onClick={() => handleRemoveMethod(method.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Modal for adding payment methods */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 overflow-hidden">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Add Payment Method</h3>

              <label className="block mb-2 text-gray-700">Select Method Type</label>
              <select
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                value={selectedMethod || ''}
                onChange={(e) => setSelectedMethod(e.target.value as 'qr' | 'upi')}
              >
                <option value="">Select...</option>
                <option value="qr">QR Code</option>
                <option value="upi">UPI</option>
              </select>

              {selectedMethod === 'qr' && (
                <div className="mb-4">
                  <label className="block mb-2 text-gray-700">Upload QR Code</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) => setQrCodeFile(e.target.files?.[0] || null)}
                  />
                </div>
              )}

              {selectedMethod === 'upi' && (
                <div className="mb-4">
                  <label className="block mb-2 text-gray-700">Enter UPI ID</label>
                  <input
                    type="text"
                    value={upiID}
                    onChange={(e) => setUpiID(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter UPI ID"
                  />
                </div>
              )}

              <div className="flex justify-between space-x-4">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                  onClick={handleSavePaymentMethod}
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
                  onClick={resetForm}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
