import React, { useState } from "react";
import axios from "axios";

const PaymentUpload = ({ courseId }) => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setUploadStatus("Wybierz plik przed przesłaniem.");
      return;
    }

    const formData = new FormData();
    formData.append("paymentConfirmation", file);

    try {
      setIsLoading(true);
      const response = await axios.post(
        `/courses/${courseId}/upload-payment-confirmation`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUploadStatus(response.data.message || "Plik przesłany pomyślnie.");
    } catch (error) {
      setUploadStatus(
        error.response?.data?.error || "Wystąpił błąd podczas przesyłania pliku."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="payment-upload">
      <h4>Prześlij potwierdzenie płatności</h4>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="application/pdf" />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Przesyłanie..." : "Prześlij"}
        </button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default PaymentUpload;
