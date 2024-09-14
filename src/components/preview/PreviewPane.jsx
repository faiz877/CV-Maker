import CVTemplate from "./CVTemplate";

const PreviewPane = ({ formData }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">CV Preview</h2>
      <div className="border border-gray-300 p-4 rounded">
        <CVTemplate formData={formData} />
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.print()}
        >
          Print CV
        </button>
      </div>
    </div>
  );
};

export default PreviewPane;
